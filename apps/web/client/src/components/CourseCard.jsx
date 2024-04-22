import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const CourseCard = ({ course }) => {
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

  const handleClick = () => {
    console.log("Button clicked!");
    return <Navigate to="/student/learn/course" state={{ course: course }} />;
  };
  return (
    <>
      <div className="flex flex-col justify-between col-span-1 gap-1 p-4 bg-gray-100 rounded shadow border-slate-500">
        <div className="text-sm">Course</div>
        <div className="text-lg font-semibold">{course.title}</div>
        <div>
          <div className="inline-block w-2 h-2 mr-2 rounded-full bg-primary"></div>{" "}
          Beginner
        </div>
        <div>{truncateDescription(course.description, 100)}</div>
        <div>
          <div className="flex flex-row flex-wrap items-start gap-3 my-3">
            <div className="rounded-full bg-lime-500">
              <img
                className="w-10 h-10 bg-gray-800 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-col font-grotesk">
              <div className="text-base font-bold">John Smith</div>
              <div className="text-sm">Data Scientist</div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="w-full px-4 py-2 font-semibold border-2 rounded font-grotesk text-secondary hover:bg-primary-hover border-primary bg-primary right-1"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
