import React, { useEffect, useState } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { useCourseStore } from "../../store/course";
import { useAuthStore } from "../../store/auth";
import EmptyState from "../../components/EmptyState";
import { useEducatorStore } from "../../store/educator";
import { Link } from "react-router-dom";
import SelectList from "../../components/ListBox";

const EducatorCourses = () => {
  const filters = [
    { name: "All Courses", label: "all" },
    {
      name: "Published",
      label: "published",
    },
    {
      name: "Drafts",
      label: "drafts",
    },
  ];
  const [selected, setSelected] = useState(filters[0]);
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
    if (selected.label === "all") {
      return course.title.toLowerCase().includes(query.toLowerCase());
    } else if (selected.label === "published") {
      return (
        course.published &&
        course.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return (
      !course.published &&
      course.title.toLowerCase().includes(query.toLowerCase())
    );
  });
  console.log(courses);
  return (
    <EducatorLayout current={1}>
      <div className="flex flex-wrap items-center justify-between gap-4">
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
        <div>
          <SelectList
            data={filters}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div className="py-12 space-y-2">
        {courses?.length > 0 &&
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between gap-4 py-4 border-y"
            >
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="flex items-center gap-2 text-2xl font-semibold">
                    {course.title}
                    <span
                      className={`px-4 py-1 font-sans text-xs font-semibold  rounded-full ${
                        course.published
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {course.published ? "Published" : "Draft"}
                    </span>
                  </h3>
                  <p className="text-lg max-w-7xl font-grotesk">
                    {course.description.split(" ").slice(0, 30).join(" ") +
                      "..."}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2">
                {course.published ? (
                  ""
                ) : (
                  <button
                    onClick={() => publish(course.id)}
                    disabled={!educator?.verified && !course?.published}
                    className={`px-4 py-1 font-semibold font-grotesk rounded-md text-secondary ${
                      educator?.verified || !course.published
                        ? "bg-primary border-[3px] border-primary hover:bg-primary-hover text-secondary font-grotesk"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Publish
                  </button>
                )}
                <Link
                  to={`/educator/courses/${course.id}/modules/${0}`}
                  className="px-4 py-1 font-semibold border-[3px] rounded-md hover:bg-gray-100 font-grotesk border-secondary text-secondary"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        {courses?.length === 0 && (
          <EmptyState
            headline="No Courses yet, but no worries! you can always create one."
            link={"/educator/create-course"}
            actionText={"Create Course"}
          />
        )}
      </div>
    </EducatorLayout>
  );
};

export default EducatorCourses;
