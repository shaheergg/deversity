import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const courses = [
        {
            title: "Web Development Fundamentals",
            status: "In Progress",
            description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
        },
        {
            title: "Introduction to Data Science",
            status: "Completed",
            description: "Gain an understanding of data analysis techniques and tools used in data science.",
        },
        {
            title: "Mobile App Development",
            status: "In Progress",
            description: "Explore mobile app development for iOS and Android platforms using React Native.",
        },
        {
            title: "Machine Learning Essentials",
            status: "In Progress",
            description: "Learn fundamental concepts of machine learning and how to apply them in real-world scenarios.",
        },
        {
            title: "Graphic Design Basics",
            status: "Completed",
            description: "Get started with graphic design tools and principles for creating visually appealing designs.",
        },
        {
            title: "Database Management Fundamentals",
            status: "In Progress",
            description: "Understand the basics of database management systems and SQL.",
        },
        {
            title: "Python Programming",
            status: "Completed",
            description: "Learn the fundamentals of Python programming language, including data structures, functions, and control flow.",
        }
    ];

    //console.log(courses);

    return (
        <>

            <div id="scorecard" className="flex flex-col w-10/12 m-auto p-4">
                <div className="flex flex-row items-start p-6 gap-5 flex-wrap">
                    <div className="bg-lime-500 rounded-full">
                        <img
                            className="w-16 h-16 bg-gray-800 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col font-grotesk gap-1 flex-grow">
                        <div className='text-2xl font-bold'>
                            Hey, Muhammad
                        </div>
                        <div className="flex flex-row gap-3 flex-wrap items-center">
                            <div className="w-2/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>

                            </div>
                            <div className="text-lg">
                                Skill Mastery
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row  p-6 font-grotesk gap-6">
                    <div className="flex-1 border-r-2 border-gray-300">
                        <div className="text-xl font-bold">
                            Daily Xp
                        </div>
                        <div>
                            430
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="text-xl font-bold">
                            Total Xp
                        </div>
                        <div>
                            11223
                        </div>
                    </div>

                </div>
                <hr></hr>
                <div className="flex p-6 font-grotesk gap-2">
                    <div className="flex-1">
                        <div className="text-xl font-bold">
                            Current Streak
                        </div>
                        <div>
                            {0} Days
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-row gap-6 font-bold text-base">
                            <div className="rounded-full w-8 h-8 border-2 text-center">
                                M
                            </div>
                            <div className="rounded-full w-8 h-8 border-2 text-center">
                                T
                            </div>
                            <div className="rounded-full w-8 h-8 border-2 text-center">
                                W
                            </div>
                            <div className="rounded-full w-8 h-8 border-2 text-center">
                                T
                            </div>
                            <div className="rounded-full w-8 h-8 border-2 text-center bg-secondary text-white">
                                F
                            </div>
                            <div className="rounded-full w-8 h-8 border-2 text-center">
                                S
                            </div>
                            <div className="rounded-full w-8 h-8 border-2 text-center">
                                S
                            </div>
                        </div>


                    </div>

                </div>
                <hr></hr>
                <div className="flex flex-row font-grotesk p-6 gap-6">
                    <div className="flex-1 border-r-2 border-gray-300">
                        <div className="text-xl font-bold">
                            Course Completed
                        </div>
                        <div>
                            5
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-xl font-bold">
                            Projects Done
                        </div>
                        <div>
                            3
                        </div>

                    </div>
                    <div className="flex-1 border-l-2 border-gray-300 pl-6">
                        <div className="text-xl font-bold">
                            Lessons Taken
                        </div>
                        <div>
                            77
                        </div>

                    </div>

                </div>

                <div className='text-2xl font-bold p-6 font-grotesk'>
                    In Progress Courses
                </div>

                {courses.filter(course => course.status === "In Progress").map((course, index) => (
                    <div key={index} className="p-4 rounded-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                                <div>
                                    <h3 className="flex items-center gap-2 text-xl font-semibold font-grotesk">
                                        {course.title}{" "}
                                        <span className="px-2 py-1 text-xs font-medium text-white bg-gray-600 rounded-md">
                                            {course.status}
                                        </span>
                                    </h3>
                                    <p className="max-w-lg text-sm font-medium text-gray-500 truncate">
                                        {course.description}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Link
                                    to="/CoursePage"
                                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                                >
                                    Continue
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                ))}




            </div>

            {/* <div className="flex flex-col font-grotesk">
            <div className='text-2xl font-bold'>
                In Progress Courses
            </div>
            <div>

            </div>

        </div> */}
        </>
    )
}

export default Home
