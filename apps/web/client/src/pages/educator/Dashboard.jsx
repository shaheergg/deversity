import React, { useEffect } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { Link } from "react-router-dom";
import { useCourseStore } from "../../store/course";
import { useAuthStore } from "../../store/auth";
import { useEducatorStore } from "../../store/educator";
import EmptyState from "../../components/EmptyState";

const EducatorDashboard = () => {
  const getCourses = useCourseStore((state) => state.getCourses);
  const token = useAuthStore((state) => state.token);
  const courses = useCourseStore((state) => state.courses);
  const fetchEducator = useEducatorStore((state) => state.fetchEducator);
  const educator = useEducatorStore((state) => state.educator);
  useEffect(() => {
    getCourses(token, educator?.id);
  }, [getCourses]);
  useEffect(() => {
    fetchEducator(token);
  }, [fetchEducator]);
  console.log(educator);
  // window.location.reload();
  return (
    <EducatorLayout>
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-4 text-4xl font-semibold font-grotesk">
            <span> Welcome! {educator?.name?.split(" ")[0]}</span>
            <span
              className={`px-2 py-1 font-sans text-xs font-semibold  rounded-full ${
                educator?.verified
                  ? "text-green-600 bg-green-100"
                  : "text-gray-600 bg-gray-100"
              }`}
            >
              {educator?.verified ? "Verified" : "Not Verified"}
            </span>
          </h2>
          <div className="flex flex-row">
            <Link
              to="/educator/create-course"
              className="flex items-center gap-2 px-4 py-2 text-white rounded-md hover:bg-secondary/70 bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"currentColor"}
                fill={"none"}
              >
                <path
                  d="M12 4V20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Create Course
            </Link>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                window.location.reload();
              }}
              className="flex items-center gap-2 px-4 py-2 ml-2 text-black rounded-md hover:bg-primary-hover bg-primary"
            >
              Logout
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col col-span-2 gap-4">
            <h3 className="text-xl font-semibold font-grotesk">Courses</h3>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 p-4 bg-yellow-100 rounded">
                <p className="text-3xl font-semibold font-grotesk">
                  {courses?.length}
                </p>
                <p className="text-sm font-medium text-gray-500">Total</p>
              </div>
              <div className="flex-1 p-4 bg-blue-100 rounded">
                <p className="text-3xl font-semibold font-grotesk">
                  {courses?.filter((course) => course.published).length}
                </p>
                <p className="text-sm font-medium text-gray-500">Published</p>
              </div>
              <div className="flex-1 p-4 bg-gray-100 rounded">
                <p className="text-3xl font-semibold font-grotesk">
                  {
                    courses?.filter((course) => course.published === false)
                      .length
                  }
                </p>
                <p className="text-sm font-medium text-gray-500">Draft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h2 className="flex items-center gap-4 text-xl font-semibold font-grotesk">
            Enrollment Analytics
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold font-grotesk">
              Recent Courses
            </h2>
            <Link
              to="/educator/courses"
              className="text-sm font-medium text-secondary"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="space-y-4 rounded-md">
              {courses?.length === 0 && (
                <EmptyState
                  headline={
                    "No courses found, Don't worry you can always create one!"
                  }
                  actionText={"Create Course"}
                  link={"/educator/create-course"}
                />
              )}
              {courses?.length > 0 &&
                courses?.map((course) => {
                  return (
                    <div
                      key={course.id}
                      className="flex items-center justify-between border-y"
                    >
                      <div className="flex items-center gap-4">
                        <div className="py-8">
                          <h3 className="flex items-center gap-2 text-lg font-semibold font-grotesk">
                            <span>{course?.title}</span>
                            <span
                              className={`px-2 py-1 font-sans text-xs font-semibold ${
                                !course?.published
                                  ? "text-gray-600 bg-gray-100"
                                  : "text-green-600 bg-green-100"
                              } rounded-full`}
                            >
                              {course?.published ? "Published" : "Draft"}
                            </span>
                          </h3>
                          <p className="max-w-lg text-sm font-medium text-gray-600 truncate">
                            {course?.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link
                          to={`/educator/courses/${course.id}/modules/${0}`}
                          className="px-4 py-2 text-xs text-white rounded-md bg-secondary"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>{" "}
          </div>
        </div>
      </section>
    </EducatorLayout>
  );
};
export default EducatorDashboard;
