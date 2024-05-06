import React, { useInsertionEffect } from "react";
import { useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard";
import { useEnrollCourseStore } from "../../store/EnrollCourse";
import { useAuthStore } from "../../store/auth";
import EnrollCourseCard from "../../components/EnrollCourseCard";

const Learn = () => {
  const [category, setCategory] = useState("Enrolled");
  const enrollments = useEnrollCourseStore((state) => state.enrollments);
  const course = useEnrollCourseStore((state) => state.course);
  const token = useAuthStore((state) => state.token);
  const getEnrollments = useEnrollCourseStore((state) => state.getEnrollments);
  const getCourse = useEnrollCourseStore((state) => state.getCourse);

  useEffect(() => {
   const get = async () => {
    await getEnrollments(token);
   }
   get()
  }, [getEnrollments]);

console.log("Enrollments in Learn page",enrollments);
  return (
    <>
      <div id="learn" className="flex flex-col w-10/12 p-4 m-auto font-grotesk">
        <div className="flex flex-row flex-wrap items-start gap-5 p-6">
          <div className="rounded-full bg-lime-500">
            <img
              className="w-16 h-16 bg-gray-800 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-grow gap-1">
            <div className="text-2xl font-bold">Hey, Muhammad</div>
            <div className="flex flex-row flex-wrap items-center gap-3">
              <div className="w-2/12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="text-lg">Skill Mastery</div>
            </div>
          </div>
          
        </div>

        <div className="flex gap-4 text-lg font-medium border-b">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Enrolled");
            }}
            className={`${category === "Enrolled"
              ? "border-b-secondary font-semibold border-b-2 "
              : ""
              } cursor-pointer  py-2`}
          >
            Enrolled
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Completed");
            }}
            className={`${category === "Completed"
              ? "border-b-secondary font-semibold border-b-2"
              : ""
              } cursor-pointer  py-2`}
          >
            Completed
          </button>
          
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 font-grotesk">
            {enrollments?.data
              // .filter((course) => course.status === category)
              .map((enrollment, index) => (
                <EnrollCourseCard key={index} enrollment={enrollment} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
