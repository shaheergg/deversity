import React, { useEffect, useState, Fragment } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { useSearchParams } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useAuthStore } from "../../store/auth";
import { toast } from "sonner";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
const AdminCourse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = useAuthStore((state) => state.token);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/courses`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCourses(data.data);
        } else {
          toast.error("There was an error fetching courses");
        }
      } catch (error) {
        toast.error("An error occurred while fetching courses");
      }
    };
    getCourses();
  }, [token]);
  const filteredCourses = courses.filter((course) => {
    const filter = searchParams.get("filter");
    if (filter === "visible") {
      return course.status === "VISIBLE";
    } else if (filter === "hidden") {
      return !course.status === "VISIBLE";
    } else {
      return true;
    }
  });
  return (
    <AdminLayout id="courses">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold font-grotesk">Courses List</h2>
        <select
          name=""
          onChange={(e) => setSearchParams({ filter: e.target.value })}
          defaultValue={"all"}
          className="px-4 py-2 font-sans text-sm border rounded-md outline-none focus:ring-2"
          id=""
        >
          <option value={"all"}>All</option>
          <option value="visible">Visible</option>
          <option value="hidden">Hidden</option>
        </select>
      </div>
      <div className="my-10 border-2 rounded-lg">
        {filteredCourses?.map((course) => {
          return (
            <div className="flex items-center justify-between p-4 border-b-2 hover:bg-neutral-50">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold">
                  {course?.title}
                  <code className="px-2 py-1 ml-2 text-xs rounded-lg bg-neutral-100 text-neutral-600 font-grotesk">
                    {course?.id}
                  </code>
                </h2>
                <p className="max-w-6xl font-sans text-xs truncate">
                  {course?.description}
                </p>
                <p className="font-sans text-sm text-neutral-600">
                  {course?.status === "VISIBLE" ? (
                    <span className="px-2 py-1 text-xs font-semibold text-blue-900 bg-blue-100 rounded-full">
                      Visible
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-100 rounded-full">
                      Hidden
                    </span>
                  )}
                </p>
              </div>
              <Menu
                as="div"
                className="relative inline-block font-sans text-left"
              >
                <div>
                  <Menu.Button>
                    <button className="p-2 rounded-md hover:bg-neutral-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        color={"currentColor"}
                        fill={"none"}
                      >
                        <path
                          d="M11.9959 12H12.0049"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.9998 12H18.0088"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.99981 12H6.00879"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-50 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-36 ring-1 ring-black/5 focus:outline-none">
                    {course?.status === "VISIBLE" && (
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/admin/settings"
                              className={`${
                                active
                                  ? "bg-neutral-100 text-black"
                                  : "text-neutral-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Hide
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    )}
                    {course?.status === "HIDDEN" && (
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/admin/settings"
                              className={`${
                                active
                                  ? "bg-neutral-100 text-black"
                                  : "text-neutral-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Show
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    )}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
};

export default AdminCourse;
