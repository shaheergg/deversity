import React from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { Link } from "react-router-dom";

const EducatorDashboard = () => {
  return (
    <EducatorLayout>
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-4xl font-semibold font-grotesk">
            Hi, Welcome, Muhammad!{" "}
            <span className="px-2 py-1 font-sans text-xs font-semibold text-white bg-green-600 rounded-md font-grotesk">
              verified
            </span>
          </h2>
          <div>
            <Link
              to="/"
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
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col col-span-2 gap-4 p-4 border rounded">
            <h3 className="text-xl font-semibold font-grotesk">Courses</h3>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xl font-semibold font-grotesk">5</p>
                <p className="text-sm font-medium text-gray-500">Total</p>
              </div>
              <div>
                <p className="text-3xl font-semibold font-grotesk">3</p>
                <p className="text-sm font-medium text-gray-500">Published</p>
              </div>
              <div>
                <p className="text-3xl font-semibold font-grotesk">2</p>
                <p className="text-sm font-medium text-gray-500">Draft</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-1 gap-4 p-4 border rounded">
            <h3 className="text-xl font-semibold font-grotesk">Enrollments</h3>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xl font-semibold font-grotesk">25</p>
                <p className="text-sm font-medium text-gray-500">Total</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold font-grotesk">
              Recent Courses
            </h2>
            <Link to="/" className="text-sm font-medium text-secondary">
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold font-grotesk">
                      Working with firebase and react{" "}
                      <span className="px-2 py-1 text-xs font-medium text-white bg-gray-600 rounded-md">
                        Draft
                      </span>
                    </h3>
                    <p className="max-w-lg text-sm font-medium text-gray-500 truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis repellat et aliquam. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Alias explicabo commodi
                      veritatis voluptatum odit!
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold font-grotesk">
                      Working with firebase and react{" "}
                      <span className="px-2 py-1 text-xs font-medium text-white bg-gray-600 rounded-md">
                        Draft
                      </span>
                    </h3>
                    <p className="max-w-lg text-sm font-medium text-gray-500 truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis repellat et aliquam. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Alias explicabo commodi
                      veritatis voluptatum odit!
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold font-grotesk">
                      Working with firebase and react{" "}
                      <span className="px-2 py-1 text-xs font-medium text-white bg-gray-600 rounded-md">
                        Draft
                      </span>
                    </h3>
                    <p className="max-w-lg text-sm font-medium text-gray-500 truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis repellat et aliquam. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Alias explicabo commodi
                      veritatis voluptatum odit!
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold font-grotesk">
                      Working with firebase and react{" "}
                      <span className="px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-md">
                        Published
                      </span>
                    </h3>
                    <p className="max-w-lg text-sm font-medium text-gray-500 truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis repellat et aliquam. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Alias explicabo commodi
                      veritatis voluptatum odit!
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EducatorLayout>
  );
};
export default EducatorDashboard;
