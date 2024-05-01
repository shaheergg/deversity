import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Home from "../student/Home";
import Learn from "../student/Learn";
import CourseCard from "../../components/CourseCard";
const Catalog = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedPage(e.target.textContent);
  };

  const courses = [
    {
      title: "Introduction to Python Programming",
      description: "Learn the fundamentals of Python programming language.",
      creation_date: "2024-04-29",
      enrollments: 100,
      educator_name: "John Doe",
      status: "None",
    },
    {
      title: "Machine Learning Basics",
      description: "An introductory course to machine learning concepts.",
      creation_date: "2024-04-30",
      enrollments: 75,
      educator_name: "Jane Smith",
      status: "None",
    },
    {
      title: "Web Development Fundamentals",
      description:
        "Explore the basics of web development including HTML, CSS, and JavaScript.",
      creation_date: "2024-05-01",
      enrollments: 120,
      educator_name: "Alice Johnson",
      status: "None",
    },
    {
      title: "Introduction to Data Science",
      description: "An overview of data science concepts and techniques.",
      creation_date: "2024-05-02",
      enrollments: 90,
      educator_name: "Michael Brown",
      status: "None",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      description:
        "Learn the basics of artificial intelligence and its applications.",
      creation_date: "2024-05-03",
      enrollments: 80,
      educator_name: "David Lee",
      status: "None",
    },
    {
      title: "Java Programming for Beginners",
      description: "An introductory course to Java programming language.",
      creation_date: "2024-05-04",
      enrollments: 110,
      educator_name: "Emily Wilson",
      status: "None",
    },
    {
      title: "Graphic Design Principles",
      description: "Explore the fundamental principles of graphic design.",
      creation_date: "2024-05-05",
      enrollments: 95,
      educator_name: "Sam Carter",
      status: "None",
    },
    {
      title: "Digital Marketing Fundamentals",
      description: "An introduction to digital marketing strategies and tools.",
      creation_date: "2024-05-06",
      enrollments: 85,
      educator_name: "Sophia Garcia",
      status: "None",
    },
    {
      title: "Introduction to Cloud Computing",
      description: "Learn the basics of cloud computing and its benefits.",
      creation_date: "2024-05-07",
      enrollments: 105,
      educator_name: "Daniel Martinez",
      status: "None",
    },
    {
      title: "Cybersecurity Essentials",
      description: "An overview of cybersecurity principles and practices.",
      creation_date: "2024-05-08",
      enrollments: 70,
      educator_name: "Emma Thompson",
      status: "None",
    },
    {
      title: "Spanish Language Basics",
      description: "Learn the basics of the Spanish language.",
      creation_date: "2024-05-09",
      enrollments: 95,
      educator_name: "Carlos Rodriguez",
      status: "None",
    },
    {
      title: "Financial Literacy",
      description: "An introduction to basic financial concepts and skills.",
      creation_date: "2024-05-10",
      enrollments: 115,
      educator_name: "Olivia Clark",
      status: "None",
    },
    {
      title: "Photography Fundamentals",
      description:
        "Explore the fundamentals of photography techniques and composition.",
      creation_date: "2024-05-11",
      enrollments: 80,
      educator_name: "Benjamin White",
      status: "None",
    },
    {
      title: "Mobile App Development",
      description:
        "An introductory course to mobile app development using popular frameworks.",
      creation_date: "2024-05-12",
      enrollments: 100,
      educator_name: "Liam Taylor",
      status: "None",
    },
    {
      title: "Leadership Skills Development",
      description:
        "Develop essential leadership skills for personal and professional growth.",
      creation_date: "2024-05-13",
      enrollments: 90,
      educator_name: "Ava Martin",
      status:"Recent",
    },
    {
      title: "Public Speaking Mastery",
      description:
        "Master the art of public speaking and effective communication.",
      creation_date: "2024-05-14",
      enrollments: 85,
      educator_name: "Noah Anderson",
      status: "Recent",
    },
    {
      title: "Introduction to UX/UI Design",
      description:
        "Learn the basics of user experience (UX) and user interface (UI) design.",
      creation_date: "2024-05-15",
      enrollments: 95,
      educator_name: "Luna Perez",
      status: "None",
    },
    {
      title: "Environmental Sustainability",
      description:
        "Explore concepts and strategies for environmental sustainability.",
      creation_date: "2024-05-16",
      enrollments: 75,
      educator_name: "Mateo Sanchez",
      status: "None",
    },
    {
      title: "Creative Writing Workshop",
      description:
        "Hone your creative writing skills through interactive workshops.",
      creation_date: "2024-05-17",
      enrollments: 110,
      educator_name: "Ella Turner",
      status: "Enrolled",
    },
    {
      title: "Economics for Everyone",
      description:
        "An accessible introduction to economic principles and theories.",
      creation_date: "2024-05-18",
      enrollments: 120,
      educator_name: "Isaac Baker",
      status: "Enrolled",
    },
    {
      title: "Mindfulness and Meditation",
      description:
        "Learn techniques for mindfulness and meditation for overall well-being.",
      creation_date: "2024-05-19",
      enrollments: 100,
      educator_name: "Mia Lewis",
      status: "Enrolled",
    },
  ];

  const [searchTerm, setSearchTerm] = useState('None');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-10/12 p-4 m-auto font-grotesk mt-7">
        <div className="flex flex-wrap">
          <div className="flex-1 text-2xl font-bold">All Catalogs</div>
          <div className="items-center">
            <div className="flex items-center justify-end flex-1 gap-2 px-4 py-2 border-2">
              <label htmlFor="search" className="text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7389 25.6531L28.8344 22.7449C28.2229 22.1327 27.3057 22.1327 26.6943 22.7449C26.0828 23.3571 26.0828 24.2755 26.6943 24.8878L29.5987 27.7959C30.0573 28.2551 30.0573 29.0204 29.5987 29.4796C29.1401 29.9388 28.3758 29.9388 27.9172 29.4796L23.3312 24.8878C23.6369 24.5816 23.9427 24.4286 24.2484 24.1224C26.5414 21.8265 27.9172 18.6122 27.9172 15.398C27.9172 12.0306 26.6943 8.96939 24.2484 6.67347C19.3567 1.77551 11.5605 1.77551 6.66879 6.67347C1.77707 11.5714 1.77707 19.3776 6.66879 24.2755C8.96178 26.5714 12.172 27.949 15.3822 27.949C17.2166 27.949 19.051 27.4898 20.5796 26.7245L25.6242 31.7755C26.3885 32.5408 27.6115 33 28.6815 33C29.7516 33 30.8217 32.5408 31.7389 31.7755C33.4204 29.9388 33.4204 27.1837 31.7389 25.6531ZM8.80892 21.8265C5.14013 18.1531 5.14013 12.1837 8.80892 8.66327C10.6433 6.82653 12.9363 5.90816 15.3822 5.90816C17.828 5.90816 20.121 6.82653 21.9554 8.66327C23.7898 10.5 24.707 12.7959 24.707 15.2449C24.707 17.6939 23.7898 20.1429 21.9554 21.8265C20.121 23.5102 17.828 24.5816 15.3822 24.5816C12.9363 24.5816 10.4904 23.6633 8.80892 21.8265Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="search"
                className="outline-none"
                placeholder="Search"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 font-grotesk">
          {
            
            searchTerm ? courses
            .filter((course) => course.title.includes(searchTerm))
            .map((course, index) => (
            <CourseCard key={index} course={course} />
          )):courses
           
            .map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
