import React, { useEffect, useState } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { useCourseStore } from "../../store/course";
import { useAuthStore } from "../../store/auth";
import EmptyState from "../../components/EmptyState";
import { useEducatorStore } from "../../store/educator";
import { Link } from "react-router-dom";

const EducatorCourses = () => {
  const courses = useCourseStore((state) => state.courses);
  const getCourses = useCourseStore((state) => state.getCourses);
  const token = useAuthStore((state) => state.token);
  const educator = useEducatorStore((state) => state.educator);
  const publishCourse = useCourseStore((state) => state.publishCourse);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCourses(token, educator?.id);
  }, []);
  const publish = (id) => {
    const courseToPublish = courses.find((course) => course.id === id);

    if (!courseToPublish) {
      // Handle case where course with id is not found (optional)
      console.error(`Course with id ${id} not found`);
      return;
    }
    if (!courseToPublish.published) {
      publishCourse(token, id);
    }
  };
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for courses"
            className="w-full py-3 pl-12 border outline-none font-grotesk border-secondary focus:ring"
          />
        </div>
      </div>
      <div className="py-12 space-y-2">
        {courses?.length > 0 &&
          filteredCourses.map((course) => (
            <div key={course.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={course.coverPhoto}
                  alt={course.title}
                  className="object-cover w-20 h-20 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{course.title}</h3>
                  <p className="text-lg max-w-7xl font-grotesk">
                    {course.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {course.published ? (
                  ""
                ) : (
                  <button
                    onClick={() => publish(course.id)}
                    disabled={!educator?.verified && !course?.published}
                    className={`px-4 py-2 rounded-md text-secondary ${
                      educator?.verified || !course.published
                        ? "bg-primary hover:bg-primary-hover text-secondary font-grotesk"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Publish
                  </button>
                )}
                <Link
                  to={`/educator/courses/${course.id}`}
                  className="px-4 py-2 rounded-md text-secondary"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        {courses?.length === 0 && (
          <EmptyState
            headline="No Courses yet"
            link={"/educator/create-course"}
            actionText={"Create Course"}
          />
        )}
      </div>
    </EducatorLayout>
  );
};

export default EducatorCourses;
