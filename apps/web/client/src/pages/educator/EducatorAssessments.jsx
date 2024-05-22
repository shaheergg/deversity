import React, { useEffect } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { Link } from "react-router-dom"
import { useCourseAssessmentStore } from "../../store/Assessments";
import { useAuthStore } from "../../store/auth";
const EducatorAssessments = () => {
    const projects = useCourseAssessmentStore((state) => state.projects)
    const getAssessments = useCourseAssessmentStore((state) => state.getAssessments)
    const token = useAuthStore((state) => state.token)
    useEffect(() => {
        getAssessments(token);
    }, [getAssessments, token])
    console.log(projects)
    return (

        <EducatorLayout current={2}>
            <div className="flex items-center justify-between">
                <h2 className="text-4xl font-semibold">Assessments</h2>
                <Link className="px-6 py-2 bg-secondary text-white" to="/educator/assessments/add">Create Assessment</Link>
            </div>
            <div>
                {projects.length === 0 && (
                    <div className="p-4 flex items-center justify-center">
                        <h2>No Assessments found.</h2>
                    </div>
                )}
                <div className="space-y-4 py-10">
                    {projects.length > 0 && (
                        projects.map((project) => {
                            return <div className="p-4 border rounded-md">
                                <div>
                                    <h2 className="text-lg font-semibold">{project?.title}
                                        <span className="text-sm font-medium">
                                            {" "}for{" "}
                                        </span>
                                        <Link className="text-blue-500 font-medium text-sm hover:underline" to={"/educator/courses"}>
                                            {project?.Course?.title}
                                        </Link>
                                    </h2>
                                    <p className="text-sm text-gray-600">{project?.description}</p>
                                </div>
                            </div>
                        })
                    )}
                </div>
            </div>
        </EducatorLayout>
    )
}

export default EducatorAssessments
