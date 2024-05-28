import React, { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import ReactChart from "../../components/Chart";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { toast } from "sonner";
import { BASE_URL } from "../../constants";
const AdminDashboard = () => {
  const token = useAuthStore((state) => state.token);
  const [educators, setEductors] = useState([]);
  const [uvCount, setUVCount] = useState(0);
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
  useEffect(() => {
    const getEducators = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/educators`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setEductors(data.data);
        } else {
          toast.error("There was an error fetching 1 educators");
        }
      } catch (error) {
        toast.error("An error occurred while 2 fetching educators");
      }
    };
    getEducators();
  }, [token]);
  useEffect(() => {
    const unverifiedCount = educators.filter(
      (educator) => !educator?.verified
    ).length;
    setUVCount(unverifiedCount);
  });
  console.log(educators);
  return (
    <AdminLayout id={"overview"}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link
          to={"/admin/verifications"}
          className="flex items-center justify-between col-span-1 p-4 border-2 rounded-md cursor-pointer hover:bg-neutral-100"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold font-grotesk">
              Pending Verifications
            </h2>
            <p className="max-w-sm font-sans text-neutral-600">
              verify pending educator accounts
            </p>
          </div>
          <div>
            <span className="text-4xl font-semibold font-grotesk">
              {uvCount}
            </span>
          </div>
        </Link>
        <Link
          to="/admin/courses"
          className="flex items-center justify-between col-span-1 p-4 border-2 rounded-md cursor-pointer hover:bg-neutral-100"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold font-grotesk">Courses</h2>
            <p className="max-w-sm font-sans text-neutral-600">
              View and manage courses
            </p>
          </div>
          <div>
            <span className="text-4xl font-semibold font-grotesk">
              {courses?.length}
            </span>
          </div>
        </Link>
        <Link
          to="/admin/users"
          className="flex items-center justify-between col-span-1 p-4 border-2 rounded-md cursor-pointer hover:bg-neutral-100"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold font-grotesk">Users</h2>
            <p className="max-w-sm font-sans text-neutral-600">
              View and manage users
            </p>
          </div>
          <div>
            <span className="text-4xl font-semibold font-grotesk">39</span>
          </div>
        </Link>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 p-4 rounded-md">
            <h2 className="text-2xl font-semibold font-grotesk">
              {" "}
              User Signups
            </h2>
            <ReactChart />
          </div>
          <div className="col-span-1 p-4 space-y-4 rounded-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold font-grotesk">
                {" "}
                Recent Activities
              </h2>
              <Link
                to="/admin/logs"
                className="px-4 py-2 font-sans text-sm rounded-md hover:bg-neutral-100"
              >
                View All
              </Link>
            </div>
            <div className="border-2 rounded-lg">
              <div className="flex items-center justify-between p-4 border-b-2 hover:bg-neutral-50">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold">
                    Post request to{" "}
                    <code className="px-2 py-1 text-xs rounded-lg bg-neutral-100 text-neutral-600 font-grotesk">
                      /api/login
                    </code>
                  </h2>
                  <p className="font-sans text-sm text-neutral-600">
                    <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-100 rounded-full">
                      Error
                    </span>
                  </p>
                </div>
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
              </div>
              <div className="flex items-center justify-between p-4 border-b-2 hover:bg-neutral-50">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold">
                    Post request to{" "}
                    <code className="px-2 py-1 text-xs rounded-lg bg-neutral-100 text-neutral-600 font-grotesk">
                      /api/login
                    </code>
                  </h2>
                  <p className="font-sans text-sm text-neutral-600">
                    <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-100 rounded-full">
                      Error
                    </span>
                  </p>
                </div>
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
              </div>{" "}
              <div className="flex items-center justify-between p-4 border-b-2 hover:bg-neutral-50">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold">
                    Post request to{" "}
                    <code className="px-2 py-1 text-xs rounded-lg bg-neutral-100 text-neutral-600 font-grotesk">
                      /api/login
                    </code>
                  </h2>
                  <p className="font-sans text-sm text-neutral-600">
                    <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-100 rounded-full">
                      Error
                    </span>
                  </p>
                </div>
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
              </div>
              <div className="flex items-center justify-between p-4 border-b-2 hover:bg-neutral-50">
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold">
                    Post request to{" "}
                    <code className="px-2 py-1 text-xs rounded-lg bg-neutral-100 text-neutral-600 font-grotesk">
                      /api/login
                    </code>
                  </h2>
                  <p className="font-sans text-sm text-neutral-600">
                    <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-100 rounded-full">
                      Error
                    </span>
                  </p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
