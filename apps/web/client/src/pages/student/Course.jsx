import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { useLocation } from 'react-router-dom';
import CourseOutlineModal from "../../components/CourseOutlineModal";
import CourseLayout from "../../components/CourseLayout";


const Course = () => {
    // Inside your component
    // const location = useLocation();
    // const { state } = location;

    // // Now you can access the state object
    // console.log(state.course);
    const course = {
        title: "Introduction to Python Programming",
        description:
            "This comprehensive course is designed for beginners who wish to learn Python programming from scratch. Whether you're new to programming or want to expand your skillset, this course will provide you with a solid foundation in Python. From basic syntax to advanced concepts, you'll explore everything you need to start writing Python code with confidence.",
        status: "Enrolled",
        modules: [
            {
                title: "Module 1: Python Basics",
                description:
                    "In this module, you will dive into the fundamentals of Python programming. You'll start by understanding the basics of Python syntax, variables, and data types. Then, you'll explore control flow statements such as if, else, and loops to make your programs more dynamic and interactive.",
                submodules: [
                    {
                        title: "Submodule 1: Getting Started with Python",
                        description:
                            "Get started with Python programming by setting up your development environment and writing your first Python script. You'll learn how to install Python, run Python scripts, and use the Python interpreter to execute code interactively.",
                        topic: {
                            title: "Topic 1: Variables and Data Types",
                            description:
                                "In this topic, you will learn about variables and different data types in Python such as integers, floats, strings, and booleans. You'll also discover how to assign values to variables and perform basic operations with them.",
                        },
                    },
                    {
                        title: "Submodule 2: Control Flow in Python",
                        description:
                            "Explore control flow statements in Python to make decisions and control the execution of your code. You'll learn about conditional statements like if, else, and elif, as well as loops such as while and for loops.",
                        topic: {
                            title: "Topic 2: Conditional Statements",
                            description:
                                "Learn about if, else, and elif statements for controlling the flow of your Python programs. You'll understand how to use these statements to execute different blocks of code based on specific conditions.",
                        },
                    },
                    
                ],
            },
            {
                title: "Module 2: Advanced Python Concepts",
                description:
                    "In this module, you'll dive deeper into Python programming and explore more advanced concepts and techniques. From functions and modules to object-oriented programming, you'll gain a deeper understanding of Python's capabilities.",
                submodules: [
                    {
                        title: "Submodule 1: Functions in Python",
                        description:
                            "Learn how to define and use functions in Python to modularize your code and make it more reusable and maintainable. You'll explore function parameters, return values, and scope.",
                        topic: {
                            title: "Topic 3: Defining Functions",
                            description:
                                "This topic covers how to define and call functions in Python. You'll learn about function syntax, parameters, and return values, as well as how to use functions to organize your code.",
                        },
                    },
                    {
                        title: "Submodule 2: Object-Oriented Programming (OOP)",
                        description:
                            "Discover the principles of object-oriented programming (OOP) in Python and learn how to create classes, objects, and methods. You'll explore encapsulation, inheritance, and polymorphism.",
                        topic: {
                            title: "Topic 4: Classes and Objects",
                            description:
                                "Understand the concepts of classes and objects in Python. You'll learn how to define classes, create objects from them, and access their attributes and methods. Additionally, you'll explore inheritance and method overriding.",
                        },
                    },
                    
                ],
            },
            {
                title: "Module 1: Python Basics",
                description:
                    "In this module, you will dive into the fundamentals of Python programming. You'll start by understanding the basics of Python syntax, variables, and data types. Then, you'll explore control flow statements such as if, else, and loops to make your programs more dynamic and interactive.",
                submodules: [
                    {
                        title: "Submodule 1: Getting Started with Python",
                        description:
                            "Get started with Python programming by setting up your development environment and writing your first Python script. You'll learn how to install Python, run Python scripts, and use the Python interpreter to execute code interactively.",
                        topic: {
                            title: "Topic 1: Variables and Data Types",
                            description:
                                "In this topic, you will learn about variables and different data types in Python such as integers, floats, strings, and booleans. You'll also discover how to assign values to variables and perform basic operations with them.",
                        },
                    },
                    {
                        title: "Submodule 2: Control Flow in Python",
                        description:
                            "Explore control flow statements in Python to make decisions and control the execution of your code. You'll learn about conditional statements like if, else, and elif, as well as loops such as while and for loops.",
                        topic: {
                            title: "Topic 2: Conditional Statements",
                            description:
                                "Learn about if, else, and elif statements for controlling the flow of your Python programs. You'll understand how to use these statements to execute different blocks of code based on specific conditions.",
                        },
                    },
                    
                ],
            }
            
        ],
    };



    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <div className="sticky top-0 flex gap-8 px-4 py-3 bg-white border-b shadow items-center justify-center">
                <div className="flex-1">
                    <Logo />
                </div>

                <div onClick={openModal}
                    className="flex font-grotesk text-lg font-semibold items-center justify-center cursor-pointer">
                    <Link to="/student/dashboard" className="border-r-2 px-2 mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <div onClick={openModal}
                        className=" hover:bg-slate-700 hover:text-white border-gray-300 border-2 rounded-xl py-1 px-3">
                        Course Outline
                    </div>
                    <Link to="/student/dashboard" className="border-l-2 px-2 mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>


                </div>
                <div className="flex items-center justify-end flex-1 gap-4">
                    <Link
                        to="/plans"
                        className="px-3 py-2 text-sm text-white rounded bg-premium"
                    >
                        Upgrade
                    </Link>
                    <Link
                        className="px-3 py-2 text-sm text-black rounded hover:bg-primary-hover bg-primary"
                        onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}
                    >
                        Logout
                    </Link>
                    <button className="flex items-center p-2 rounded-full hover:bg-gray-100">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.935 6C12.904 6 8.92138 9.89612 8.92138 14.5161V19.4516C8.92138 19.7496 8.83265 20.0408 8.66651 20.2881L6.22857 23.9171L6.21242 23.9407C5.93189 24.3415 5.96262 24.7075 6.1074 24.9708C6.25787 25.2445 6.58679 25.5 7.11664 25.5H28.9057C29.2876 25.5 29.6577 25.2727 29.8643 24.9048C30.0616 24.5533 30.0319 24.2336 29.8466 23.9908C29.8369 23.9781 29.8273 23.9652 29.818 23.9521L27.2277 20.3231C27.0462 20.0687 26.9486 19.7641 26.9486 19.4516V14.5161C26.9486 12.1977 25.921 9.98162 24.3878 8.50967C22.6453 6.98576 20.4061 6 17.935 6ZM5.92138 14.5161C5.92138 8.10389 11.3858 3 17.935 3C21.2432 3 24.1759 4.32821 26.3917 6.27682C26.4067 6.28998 26.4214 6.30344 26.4358 6.31718C28.5478 8.32922 29.9486 11.3292 29.9486 14.5161V18.9712L32.2474 22.1919C33.2637 23.5417 33.1554 25.1708 32.4802 26.3735C31.8106 27.566 30.5046 28.5 28.9057 28.5H7.11664C3.87336 28.5 1.79033 25.0469 3.74554 22.2334L5.92138 18.9946V14.5161ZM11.9992 31.5C11.9992 30.6716 12.6708 30 13.4992 30H22.4992C23.3276 30 23.9992 30.6716 23.9992 31.5C23.9992 32.3284 23.3276 33 22.4992 33H13.4992C12.6708 33 11.9992 32.3284 11.9992 31.5Z"
                                fill="black"
                            />
                        </svg>
                    </button>

                </div>
            </div>

            {isModalOpen && <CourseOutlineModal state={isModalOpen} course={course} closeModal={closeModal} />}

            <div className="flex flex-col w-10/12 m-auto p-10 font-grotesk gap-2">
                <div>
                    <h1 className="text-3xl font-bold ">{course.title}</h1>
                </div>
                <div className="text-sm flex flex-row justify-between">
                    <div>
                        Read time : 3 hours | Completion time : 10 hours
                    </div>
                    <div className="">
                        Educator : John Doe
                    </div>

                </div>
                <div className="flex flex-row pb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffb529" fill="none">
                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffb529" fill="none">
                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffb529" fill="none">
                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffb529" fill="none">
                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffb529" fill="none">
                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <hr></hr>
                <div className="">
                    <CourseLayout modules={course.modules} />
                </div>

            </div>


        </>
    )
}

export default Course
