import React, { useState } from "react";
import { Link } from "react-router-dom";
const EditCourseLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <section>
      <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold font-grotesk">
            <Link to="/educator/courses" href="">
              Courses
            </Link>{" "}
            / {"Learn Python"}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-1 text-sm font-semibold border-4 rounded-md hover:bg-gray-100 font-grotesk border-secondary">
            Publish
          </button>
          <button className="px-4 py-1 text-sm font-semibold border-4 rounded-md hover:bg-primary-hover bg-primary font-grotesk border-primary text-secondary">
            Save
          </button>
        </div>
      </div>
      <section>
        <aside
          className={`fixed py-4 transition-all h-screen border-r w-[300px] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative group">
            <button
              onClick={() => setOpen(!open)}
              className={`absolute p-1 bg-white border-2 top-3 rounded-md text-secondary hover:bg-gray-100 ${
                open ? "-right-4" : "-right-8"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color={"#000000"}
                fill={"none"}
                className={`${open ? "rotate-180" : "rotate-0"}`}
              >
                <path
                  d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="">
              <h2 className="p-4 mb-2 text-2xl font-semibold font-grotesk">
                Course Outline
              </h2>
              <div className="">
                <div className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-100 border-y">
                  <h3 className="text-xl font-semibold text-secondary font-grotesk">
                    Introduction
                  </h3>
                  <button className="p-1 text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"currentColor"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-100 border-y">
                  <h3 className="text-xl font-semibold text-secondary font-grotesk">
                    Variables
                  </h3>
                  <button className="p-1 text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"currentColor"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>{" "}
                <div className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-100 border-y">
                  <h3 className="text-xl font-semibold text-secondary font-grotesk">
                    Functions
                  </h3>
                  <button className="p-1 text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      color={"currentColor"}
                      fill={"none"}
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end flex-1">
            <button className="flex items-center justify-center w-full gap-4 py-4 text-lg font-semibold text-secondary font-grotesk hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"currentColor"}
                className=""
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
              Add Section
            </button>
          </div>
        </aside>
        <main
          className={`transition-all py-4 px-12 ${
            open ? "ml-[300px]" : "ml-0"
          }`}
        >
          {children}
        </main>
      </section>
    </section>
  );
};

export default EditCourseLayout;
