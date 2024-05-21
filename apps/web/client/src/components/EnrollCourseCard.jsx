import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const EnrollCourseCard = ({ enrollment }) => {
  console.log("Single Enrl", enrollment);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };

  const auth = useAuthStore((state) => state.auth);
  //console.log(educator);

  return (
    <>
      <div className="flex flex-col justify-between col-span-1 gap-1 p-4 bg-gray-100 rounded shadow border-slate-500">
        <div className="text-sm">Course</div>
        <div className="text-lg font-semibold">{enrollment.Course.title}</div>
        <div className="py-2">
          <span className="px-3 py-1 text-sm font-semibold text-green-700 lowercase bg-green-100 rounded-full">
            {enrollment.Course.level}
          </span>
        </div>
        <div className="truncate">{enrollment.Course.description}</div>
        <div>
          <div className="flex flex-row items-center gap-3 my-3 font-grotesk">
            Enrollment Status:{" "}
            <span className="font-semibold lowercase">{enrollment.status}</span>
          </div>
        </div>
        <div className="flex justify-end w-full py-2">
          <Link
            to={
              auth
                ? `/student/courses/${enrollment.Course?.id}/modules/${0}`
                : "/login"
            }
            className="w-full px-4 py-2 font-semibold text-center border-2 rounded font-grotesk text-secondary hover:bg-primary-hover border-primary bg-primary right-1"
          >
            Keep Making Progress
          </Link>
        </div>
      </div>
    </>
  );
};

export default EnrollCourseCard;
