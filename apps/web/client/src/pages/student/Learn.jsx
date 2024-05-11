<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
=======
import { useState, useEffect } from "react";
import { useEnrollCourseStore } from "../../store/enrollCourse";
>>>>>>> 2230b4eb34697c32ccfeea8ae4a2a9f1fdf681c4
import { useAuthStore } from "../../store/auth";
import EnrollCourseCard from "../../components/EnrollCourseCard";
import { useEnrollmentStore } from "../../store/enrollment";

const Learn = async() => {
  const [category, setCategory] = useState("Enrolled");
<<<<<<< HEAD
  const enrollments = useEnrollmentStore((state) => state.enrollments);
  const token = useAuthStore((state) => state.token);
  const getEnrollments = useEnrollmentStore((state) => state.getEnrollments);
  const getCourse = useEnrollmentStore((state) => state.getCourse);

  console.log("lEARN PAGER");
  // useEffect(() => {
  //   console.log("In use Effect");
  // const get = async () => {
  //   await getEnrollments(token);
  //   console.log("Enrollments in Learn page", enrollments);
  // }
  // get();

  // }, [category]);

  // useEffect(async () => {
  //   console.log("In use Effect");
  //   await getEnrollments(token);
  //   if(enrollments)
  //   {
  //     setEnrolledCourses(enrollments);
  //     console.log("Enrollments in Learn page", enrollments);
  //   }
  // }, [enrollments]);

  useEffect(()=>{
    getEnrollments(token).catch((error)=>{
      console.log(String(error))
    })
  },[token, getEnrollments])
  // console.log("In use Effect");
  // const get = async () => {
  //   await getEnrollments(token);
  //   console.log("Enrollments in Learn page", enrollments);
  // }
  // get();

=======
  const enrollments = useEnrollCourseStore((state) => state.enrollments);
  const token = useAuthStore((state) => state.token);
  const getEnrollments = useEnrollCourseStore((state) => state.getEnrollments);
  console.log(enrollments);
  useEffect(() => {
    getEnrollments(token).catch((error) => {
      // Handle error here, e.g., show a toast notification
      console.error("Error fetching enrollments:", error);
    });
  }, [getEnrollments, token]);

  console.log("Enrollments in Learn page", enrollments);
>>>>>>> 2230b4eb34697c32ccfeea8ae4a2a9f1fdf681c4
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
<<<<<<< HEAD

=======
>>>>>>> 2230b4eb34697c32ccfeea8ae4a2a9f1fdf681c4
        </div>

        <div className="flex gap-4 text-lg font-medium border-b">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Enrolled");
            }}
            className={`${
              category === "Enrolled"
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
            className={`${
              category === "Completed"
                ? "border-b-secondary font-semibold border-b-2"
                : ""
            } cursor-pointer  py-2`}
          >
            Completed
          </button>
<<<<<<< HEAD

=======
>>>>>>> 2230b4eb34697c32ccfeea8ae4a2a9f1fdf681c4
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 font-grotesk">
            {enrollments?.data
<<<<<<< HEAD
              // .filter((course) => course.status === category)
=======
              .filter((enrollment) => enrollment?.progress?.percentage < 100)
>>>>>>> 2230b4eb34697c32ccfeea8ae4a2a9f1fdf681c4
              ?.map((enrollment, index) => (
                <EnrollCourseCard key={index} enrollment={enrollment} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
