import React, { useEffect, useState } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { useCourseStore } from "../../store/course";
import { useAuthStore } from "../../store/auth";
import EmptyState from "../../components/EmptyState";

const EducatorCourses = () => {
  const courses = useCourseStore((state) => state.courses);
  const getCourses = useCourseStore((state) => state.getCourses);
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const [parsedUser, setParsedUser] = useState({});
  useEffect(() => {
    const parsedUser = JSON.parse(user);
    setParsedUser(parsedUser);
    getCourses(token, parsedUser?.id);
  }, []);
  console.log(courses);
  return (
    <EducatorLayout current={1}>
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="flex-1 text-4xl font-semibold font-grotesk">
          My Courses ({courses?.length})
        </h2>
        <div className="relative flex-1">
          <label className="absolute top-[14px] left-4" htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Search</span>
          </label>
          <input
            type="search"
            placeholder="Search for courses"
            className="w-full py-3 pl-12 border outline-none font-grotesk border-secondary focus:ring"
          />
        </div>
      </div>
      <div className="py-12 space-y-2">
        {courses?.length > 0 &&
          courses.map((course) => (
            <div key={course.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={course.coverPhoto}
                  alt={course.title}
                  className="object-cover w-20 h-20 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{course.title}</h3>
                  <p className="text-lg">{course.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={!parsedUser?.verified}
                  className={`px-4 py-2 rounded-md text-secondary ${
                    parsedUser?.verified
                      ? "bg-green-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Publish
                </button>
                <button className="px-4 py-2 rounded-md text-secondary">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </EducatorLayout>
  );
};

export default EducatorCourses;
