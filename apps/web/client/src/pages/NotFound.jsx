import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-5xl mx-auto space-y-12 text-center">
      <h1 className="text-5xl font-grotesk">404 - Page Not Found</h1>
      <p className="max-w-lg text-lg text-gray-700 font-grotesk">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="flex items-center gap-4 space-x-4">
        <Link
          to="/login"
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-2 rounded font-grotesk hover:bg-primary-hover border-primary bg-primary text-secondary"
        >
          Sign In
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
        <Link
          to="/"
          className="px-4 py-2 text-sm font-semibold border-2 rounded font-grotesk hover:bg-gray-100 border-secondary text-secondary"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
