import React, { useEffect, useState } from 'react'
import EducatorLayout from '../../layouts/EducatorLayout'
import Selectbox from "../../components/Selectbox";
import AssessmentSelectbox from "../../components/AssessmentSelectbox"
import { LEVELS } from "../../constants";
import { useCourseAssessmentStore } from '../../store/Assessments';
import { useAuthStore } from '../../store/auth';

const Assessments = () => {
    const [title, setTitle] = useState("");
    const [courses, setCourses] = useState([]);
    const [description, setDescription] = useState("");
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [loading, setLoading] = useState(false);
    const publishedCourses = useCourseAssessmentStore((state) => state.publishedCourses);
    const getPublishedCourses = useCourseAssessmentStore((state) => state.getPublishedCourses);
    const createAssessment = useCourseAssessmentStore((state)=> state.createAssessment);
    const token = useAuthStore((state) => state.token);

    useEffect(() => {
        getPublishedCourses(token);
        console.log("from Assessment page ", publishedCourses);

    }, [getPublishedCourses, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) return;
        if (!title || !description || !selectedCourse)
            return toast.error("Please fill all fields");

        const assessment = {
            title,
            description,
            course: selectedCourse,
        };

        
        setLoading(true);
        try {
          createAssessment(assessment,token,selectedCourse[1]);
          // Handle successful response (e.g., show success message)
          setLoading(false);
          //Navigate("/educator/courses", { replace: true });
        } catch (error) {
          // Handle errors (e.g., show error message)
          setLoading(false);
        } finally {
          setTitle("");
          setDescription("");
          setSelectedCourse([]);
        }
    };

    const options = publishedCourses ? publishedCourses.map(course => ({
        label: course.title,
        value: course.id
    })) : [];


    return (
        <>
            <EducatorLayout current={2}>
                <div className="flex items-center">
                    <h2 className="text-4xl font-semibold">Create Assessment</h2>
                </div>
                <div className="max-w-2xl py-10 mx-auto">
                    <form>
                        <div className="grid grid-cols-4 space-y-4">

                            <div className="col-span-full">
                                <label
                                    htmlFor="title"
                                    className="block font-semibold leading-6 text-gray-900"
                                >
                                    Assessment Title
                                </label>
                                <div className="w-full mt-2">
                                    <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400">
                                        <input
                                            type="text"
                                            name="title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            id="title"
                                            autoComplete="title"
                                            className="flex-1 block w-full px-4 py-3 text-gray-900 bg-transparent border-0 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Assessment Title"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="username"
                                    className="block font-semibold leading-6 text-gray-900"
                                >
                                    Assessment Description
                                </label>
                                <div className="w-full mt-2">
                                    <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            name="description"
                                            id="description"
                                            className="flex-1 block w-full h-48 px-4 py-3 text-gray-900 bg-transparent border-0 outline-none resize-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Assessment Description"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="username"
                                    className="block font-semibold leading-6 text-gray-900"
                                >
                                    Select Course
                                </label>
                                <div className="w-full mt-2">
                                    <AssessmentSelectbox 
                                    options={options}
                                    value={selectedCourse[0]}
                                    setCourse={(value) => setSelectedCourse(value)}
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full px-5 py-3 text-sm text-white rounded-md font-grotesk bg-secondary"
                                >
                                    {loading ? "Adding Assessment..." : "Add Assessment"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </EducatorLayout>
        </>
    )
}

export default Assessments
