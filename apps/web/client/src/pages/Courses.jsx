import React from "react";
import Catalog from "./student/Catalog";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div>
      <section className="h-[50vh] flex-col max-w-5xl mx-auto text-center space-y-5 flex items-center justify-center">
        <h1 className="max-w-2xl text-5xl font-grotesk">
          Explore <span className="font-bold text-premium"> 1000+ </span> of
          courses from top educators
        </h1>
        <p className="text-lg text-gray-700 font-grotesk"></p>
        <div className="flex items-center gap-4 space-x-4">
          <Link
            to="/signup"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-2 rounded font-grotesk hover:bg-primary-hover border-primary bg-primary text-secondary"
          >
            Start your journey
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              color={"currentColor"}
              fill={"none"}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 12L8 12M16 12C16 12.7002 14.0057 14.0085 13.5 14.5M16 12C16 11.2998 14.0057 9.99153 13.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link className="px-4 py-2 text-sm font-semibold border-2 rounded font-grotesk hover:bg-gray-100 border-secondary text-secondary">
            For Educators
          </Link>
        </div>
      </section>
      <Catalog />
    </div>
  );
};

export default Courses;
