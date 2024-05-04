import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import EnrollCourse from "../pages/student/EnrollCourse";

const CourseCard = ({ course, educator }) => {
  console.log(course);
  let buttonText;
  switch (course.status) {
    case "Completed":
      buttonText = "Review";
      break;
    case "Enrolled":
      buttonText = "Continue";
      break;
    default:
      buttonText = "Enroll Now";
  }

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };

  const auth = useAuthStore((state) => state.auth);
  console.log(educator);

  return (
    <>
      <div className="flex flex-col justify-between col-span-1 gap-1 p-4 bg-gray-100 rounded shadow border-slate-500">
        <div className="text-sm">Course</div>
        <div className="text-lg font-semibold">{course?.title}</div>
        <div className="py-2">
          <span className="px-3 py-1 text-sm font-semibold text-green-700 lowercase bg-green-100 rounded-full">
            {course?.level}
          </span>
        </div>
        <div>{truncateDescription(course.description, 100)}</div>
        <div>
          <div className="flex flex-row flex-wrap items-center gap-3 my-3">
            <div className="rounded-full bg-lime-500">
              <img
                className="object-cover w-10 h-10 bg-gray-800 rounded-full"
                src={`https://api.dicebear.com/8.x/initials/svg?seed=${educator?.name}`}
                alt=""
              />
            </div>
            <div className="flex flex-col font-grotesk">
              <div className="text-base font-bold">{educator?.name}</div>
            </div>
          </div>
          <div className="py-2">
            <div className="text-sm">{educator?.about}</div>
          </div>
        </div>
        <div className="w-full py-2">
          <Link
            to={auth ? `/student/learn/course/${course?.id}` : "/login"}
            className="block w-full px-4 py-2 font-semibold text-center border-2 rounded font-grotesk text-secondary hover:bg-primary-hover border-primary bg-primary right-1"
            
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
