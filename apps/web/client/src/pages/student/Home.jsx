import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const courses = [
    {
      title: "Web Development Fundamentals",
      status: "In Progress",
      description:
        "Learn the basics of web development including HTML, CSS, and JavaScript.",
    },
    {
      title: "Introduction to Data Science",
      status: "Completed",
      description:
        "Gain an understanding of data analysis techniques and tools used in data science.",
    },
    {
      title: "Mobile App Development",
      status: "In Progress",
      description:
        "Explore mobile app development for iOS and Android platforms using React Native.",
    },
    {
      title: "Machine Learning Essentials",
      status: "In Progress",
      description:
        "Learn fundamental concepts of machine learning and how to apply them in real-world scenarios.",
    },
    {
      title: "Graphic Design Basics",
      status: "Completed",
      description:
        "Get started with graphic design tools and principles for creating visually appealing designs.",
    },
    {
      title: "Database Management Fundamentals",
      status: "In Progress",
      description:
        "Understand the basics of database management systems and SQL.",
    },
    {
      title: "Python Programming",
      status: "Completed",
      description:
        "Learn the fundamentals of Python programming language, including data structures, functions, and control flow.",
    },
  ];
  const [user, setUser] = useState({});
  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(JSON.parse(u));
  }, []);
  return (
    <>
      <div id="scorecard" className="flex flex-col w-10/12 p-4 m-auto">
        <div className="flex flex-row flex-wrap items-center gap-5 p-6">
          <div className="rounded-full bg-lime-500">
            <img
              className="w-16 h-16 bg-gray-800 rounded-full"
              src={`https://api.dicebear.com/8.x/initials/svg?seed=${user?.name}`}
              alt=""
            />
          </div>
          <div className="flex flex-col flex-grow gap-1 font-grotesk">
            <div className="text-2xl font-bold">
              Hey, {user?.name?.split(" ")[0]}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-row gap-6 p-6 font-grotesk">
          <div className="flex-1 border-r-2 border-gray-300">
            <div className="text-xl font-bold">Daily Xp</div>
            <div>430</div>
          </div>

          <div className="flex-1">
            <div className="text-xl font-bold">Total Xp</div>
            <div>11223</div>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row gap-2 p-6 font-grotesk">
          <div className="flex-1">
            <div className="flex justify-end gap-4 text-base font-bold">
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                M
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                T
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                W
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                T
              </div>
              <div className="flex items-center justify-center text-center text-white border rounded-full w-9 h-9 bg-secondary">
                F
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                S
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                S
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row gap-6 p-6 font-grotesk">
          <div className="flex-1 border-r-2 border-gray-300">
            <div className="text-xl font-bold">Course Completed</div>
            <div>5</div>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold">Projects Done</div>
            <div>3</div>
          </div>
          <div className="flex-1 pl-6 border-l-2 border-gray-300">
            <div className="text-xl font-bold">Lessons Taken</div>
            <div>77</div>
          </div>
        </div>

        <div className="p-6 text-2xl font-bold font-grotesk">
          In Progress Courses
        </div>

        {courses
          .filter((course) => course.status === "In Progress")
          .map((course, index) => (
            <div key={index} className="p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div className="flex-1 space-y-2">
                    <h3 className="flex items-center gap-2 text-xl font-semibold font-grotesk">
                      {course.title}{" "}
                      <span className="px-2 py-1 text-xs font-medium text-white bg-gray-600 rounded-md">
                        {course.status}
                      </span>
                    </h3>
                    <p className="max-w-lg text-sm font-medium text-gray-500 truncate">
                      {course.description}
                    </p>
                    {/* <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-200">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div> */}
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
  );
};

export default Home;
