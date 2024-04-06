import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
    console.log(course);
    let buttonText;
    switch (course.status) {
        case "Completed":
            buttonText = "Review";
            break;
        case "Enrolled":
            buttonText = "Continue";
            break;
        default:
            buttonText = "Enroll Now";
    }

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        } else {
            return description;
        }
    };
    return (
        <>

            <div className="flex flex-col gap-1 border-slate-500 p-4 bg-slate-300">
                <div className="text-sm">
                    Course
                </div>
                <div className="text-lg font-semibold">
                    {course.title}
                </div>
                <div>
                    <div className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></div> Beginner
                </div>
                <div>
                {truncateDescription(course.description, 100)}
                </div>
                <div>
                    <div className="flex flex-row items-start gap-3 my-3 flex-wrap">
                        <div className="bg-lime-500 rounded-full">
                            <img
                                className="w-10 h-10 bg-gray-800 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col font-grotesk">
                            <div className='text-base font-bold'>
                                John Smith
                            </div>
                            <div className="text-sm">
                                Data Scientist
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/singlecourse">
                        <button className="hover:bg-secondary hover:text-white text-black px-4 py-2 border-slate-800 border-2 right-1">
                            {buttonText}
                        </button>
                    </Link>
                </div>


            </div>


        </>
    )
}

export default CourseCard
