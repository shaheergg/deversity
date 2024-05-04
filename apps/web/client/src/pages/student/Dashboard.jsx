import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Home from "../student/Home";
import Learn from "../student/Learn";
import Catalog from "./Catalog";
const StudentDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedPage(e.target.textContent);
  };
  return (
    <div>
      <div className="sticky top-0 flex items-center gap-8 px-4 py-3 bg-white border-b shadow">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-between px-1 py-1 bg-gray-100 rounded-full">
          <Link
            className={`px-4 py-2 text-sm rounded-full ${
              selectedPage === "Home"
                ? "bg-secondary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            className={`px-4 py-2 text-sm rounded-full ${
              selectedPage === "Learn"
                ? "bg-secondary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={handleClick}
          >
            Learn
          </Link>
          <Link
            className={`px-4 py-2 text-sm rounded-full ${
              selectedPage === "Catalog"
                ? "bg-secondary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={handleClick}
          >
            Catalog
          </Link>

          <Link
            className={`px-4 py-2 text-sm rounded-full ${
              selectedPage === "Projects"
                ? "bg-secondary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={handleClick}
          >
            Projects
          </Link>
        </div>

        {selectedPage !== "Catalog" && (
          <div className="flex items-center">
            <div className="flex items-center justify-end flex-1 gap-2 px-4 py-2 border-2 rounded-full">
              <label htmlFor="search" className="text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7389 25.6531L28.8344 22.7449C28.2229 22.1327 27.3057 22.1327 26.6943 22.7449C26.0828 23.3571 26.0828 24.2755 26.6943 24.8878L29.5987 27.7959C30.0573 28.2551 30.0573 29.0204 29.5987 29.4796C29.1401 29.9388 28.3758 29.9388 27.9172 29.4796L23.3312 24.8878C23.6369 24.5816 23.9427 24.4286 24.2484 24.1224C26.5414 21.8265 27.9172 18.6122 27.9172 15.398C27.9172 12.0306 26.6943 8.96939 24.2484 6.67347C19.3567 1.77551 11.5605 1.77551 6.66879 6.67347C1.77707 11.5714 1.77707 19.3776 6.66879 24.2755C8.96178 26.5714 12.172 27.949 15.3822 27.949C17.2166 27.949 19.051 27.4898 20.5796 26.7245L25.6242 31.7755C26.3885 32.5408 27.6115 33 28.6815 33C29.7516 33 30.8217 32.5408 31.7389 31.7755C33.4204 29.9388 33.4204 27.1837 31.7389 25.6531ZM8.80892 21.8265C5.14013 18.1531 5.14013 12.1837 8.80892 8.66327C10.6433 6.82653 12.9363 5.90816 15.3822 5.90816C17.828 5.90816 20.121 6.82653 21.9554 8.66327C23.7898 10.5 24.707 12.7959 24.707 15.2449C24.707 17.6939 23.7898 20.1429 21.9554 21.8265C20.121 23.5102 17.828 24.5816 15.3822 24.5816C12.9363 24.5816 10.4904 23.6633 8.80892 21.8265Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="search"
                className="outline-none"
                placeholder="Search"
              />
            </div>
          </div>
        )}
        <div className="flex items-center justify-end flex-1 gap-4">
          <Link
            to="/plans"
            className="px-3 py-2 text-sm text-white rounded bg-premium"
          >
            Upgrade
          </Link>
          <Link
            className="px-3 py-2 text-sm text-black rounded hover:bg-primary-hover bg-primary"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </Link>
          <button className="flex items-center p-2 rounded-full hover:bg-gray-100">
            <svg
              width="20"
              height="20"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.935 6C12.904 6 8.92138 9.89612 8.92138 14.5161V19.4516C8.92138 19.7496 8.83265 20.0408 8.66651 20.2881L6.22857 23.9171L6.21242 23.9407C5.93189 24.3415 5.96262 24.7075 6.1074 24.9708C6.25787 25.2445 6.58679 25.5 7.11664 25.5H28.9057C29.2876 25.5 29.6577 25.2727 29.8643 24.9048C30.0616 24.5533 30.0319 24.2336 29.8466 23.9908C29.8369 23.9781 29.8273 23.9652 29.818 23.9521L27.2277 20.3231C27.0462 20.0687 26.9486 19.7641 26.9486 19.4516V14.5161C26.9486 12.1977 25.921 9.98162 24.3878 8.50967C22.6453 6.98576 20.4061 6 17.935 6ZM5.92138 14.5161C5.92138 8.10389 11.3858 3 17.935 3C21.2432 3 24.1759 4.32821 26.3917 6.27682C26.4067 6.28998 26.4214 6.30344 26.4358 6.31718C28.5478 8.32922 29.9486 11.3292 29.9486 14.5161V18.9712L32.2474 22.1919C33.2637 23.5417 33.1554 25.1708 32.4802 26.3735C31.8106 27.566 30.5046 28.5 28.9057 28.5H7.11664C3.87336 28.5 1.79033 25.0469 3.74554 22.2334L5.92138 18.9946V14.5161ZM11.9992 31.5C11.9992 30.6716 12.6708 30 13.4992 30H22.4992C23.3276 30 23.9992 30.6716 23.9992 31.5C23.9992 32.3284 23.3276 33 22.4992 33H13.4992C12.6708 33 11.9992 32.3284 11.9992 31.5Z"
                fill="black"
              />
            </svg>
          </button>
          {/* <Dropdown>
            <div className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100">
              <img
                className="w-10 h-10"
                src="https://api.dicebear.com/7.x/lorelei/svg"
                alt="avatar"
              />
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </Dropdown> */}
        </div>
      </div>
      {selectedPage === "Home" && <Home />}
      {selectedPage === "Learn" && <Learn />}
      {selectedPage === "Catalog" && <Catalog />}
    </div>
  );
};

export default StudentDashboard;
