import React, { useState, useEffect } from 'react'
import { useAuthStore } from "../../store/auth";
import { useEnrollCourseStore } from '../../store/EnrollCourse';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EnrollCourse = () => {


    const token = useAuthStore((state) => state.token);
    const course = useEnrollCourseStore((state) => state.course);
    const getCourse = useEnrollCourseStore((state) => state.getCourse)

    const { courseId } = useParams();
    console.log(courseId);

    useEffect(() => {
        getCourse(token, courseId);
    }, [getCourse]);

    console.log(course);


    const chapters = [
        {
            "chapterTitle": "Python Basics",
            "subtopics": [
                {
                    "title": "Variable Functions Libraries",
                    "duration": "1 hour"
                },
                {
                    "title": "Conditional Statements",
                    "duration": "1.5 hours"
                },
                {
                    "title": "Loops and Iterations",
                    "duration": "1 hour"
                }
            ]
        },
        {
            "chapterTitle": "Data Analysis Techniques",
            "subtopics": [
                {
                    "title": "Descriptive Statistics",
                    "duration": "2 hours"
                },
                {
                    "title": "Data Visualization",
                    "duration": "2.5 hours"
                },
                {
                    "title": "Data Wrangling",
                    "duration": "2 hours"
                }
            ]
        }
    ]

    console.log(chapters);

    return (
        <>
            <div className="flex flex-col w-10/12 p-4 m-auto font-grotesk mt-7 gap-8">
                <div className='flex flex-col bg-secondary font-grotesk p-9 rounded-md'>
                    <div className="text-sm text-gray-400 my-1 uppercase">
                        Interactive Course
                    </div>
                    <div className="text-white text-3xl mb-7 font-bold">
                        {course.title}
                    </div>
                    <div className='flex gap-2 mb-7'>
                        <Link to="" className="bg-primary px-4 py-1 rounded-md font-medium">
                            Start Course
                        </Link>
                        <button to="" className='bg-secondary px-4 py-1 text-white border-slate-200 border-2 rounded-md'>
                            Bookmark
                        </button>
                    </div>
                    <div className="flex gap-2 text-white">
                        <div className="py-2">
                            <span className="px-6 py-2 text-sm font-semibold text-primary border-slate-200 border-2 rounded-md" >
                                {course?.level}
                            </span>
                        </div>
                        <div className="rounded-md bg-slate-700 px-3 pt-2 inline-flex">


                            {/* {course.sections.length * 12} */}
                            <span className='mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            0 hours
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='text-2xl font-bold'>
                        Course Description
                    </div>
                    <div className='my-6'>
                        {course.description}
                        
                    </div>
                </div>
                <div>
                    <div className="flex font-grotesk gap-3">
                        <div className="border-slate-200 border-2 rounded-md p-4" style={{ "width": "75%" }}>

                            {chapters.map((chapter, index) => (
                                <div key={index} className='my-3'>
                                    <div className="text-xl font-bold my-1">
                                        {chapter.chapterTitle}
                                    </div>
                                    {chapter.subtopics.map((subtopic, subIndex) => (
                                        <Link to="/" key={subIndex} className='flex text-lg p-1 hover:bg-slate-200 cursor-pointer'>
                                            <div className='w-4/5'>
                                                {subtopic.title}
                                            </div>
                                            <div className='w-1/5 text-right'>
                                                {/* {subtopic.duration} */}
                                                XPs
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ))}


                        </div>
                        <div class="" style={{ "width": "25%" }}>

                            <div className="flex flex-col p-3 border-slate-200 border-2 rounded-md gap-3 ">
                                <div className='text-md font-semibold uppercase inline-flex items-center mb-3 bg-primary text-black py-2 px-2'>
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                                        </svg>
                                    </span>

                                    Course Resources
                                </div>

                                <div className='inline-flex items-center py-2 px-2 hover:bg-secondary hover:text-white cursor-pointer' style={{ borderRadius: "2px", border: "1px solid gray" }}
                                >
                                    <span className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </span>

                                    Course Notes
                                </div>
                                <div className="inline-flex items-center py-2 px-2 hover:bg-secondary hover:text-white cursor-pointer" style={{ borderRadius: "2px", border: "1px solid gray" }}>
                                    <span className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                    </span>
                                    Course Links
                                </div>
                                <div className="inline-flex items-center py-2 px-2 hover:bg-secondary hover:text-white cursor-pointer" style={{ borderRadius: "2px", border: "1px solid gray" }}>
                                    <span className='mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>

                                    </span>
                                    Course PDFs

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="text-2xl font-bold my-2">
                        Summary of the Course
                    </div>
                    <div className='my-6'>
                        {course.summary}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnrollCourse
