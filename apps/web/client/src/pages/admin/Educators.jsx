import React, { useEffect, useState, Fragment } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { BASE_URL } from "../../constants";
import { useAuthStore } from "../../store/auth";
import { Menu, Transition } from "@headlessui/react";
const AdminEducators = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = useAuthStore((state) => state.token);
  const [educators, setEductors] = useState([]);
  useEffect(() => {
    setSearchParams({ filter: "unverified" });
  }, []);
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
          toast.error("There was an error fetching educators");
        }
      } catch (error) {
        toast.error("An error occurred while fetching educators");
      }
    };
    getEducators();
  }, [token]);
  console.log(educators);
  const filteredEducators = educators.filter((educator) => {
    const filter = searchParams.get("filter");
    if (filter === "unverified") {
      return !educator.verified;
    } else if (filter === "verified") {
      return educator.verified;
    } else {
      return true;
    }
  });
  const handleUpdateVerificationStatus = async (status, id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/educator/verification`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status,
          id,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
      } else {
        toast.error("There was an error while update educator status");
      }
    } catch (error) {
      console.log(String(error));
      toast.error("There was an error updating educator status");
    }
  };
  const handleVerification = async (status, id) => {
    if (!status || !id) {
      return;
    }
    await handleUpdateVerificationStatus(status, id);
    window.location.reload();
  };
  return (
    <AdminLayout id="verifications">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold font-grotesk">
            Manage Educator Verifications
          </h2>
          <select
            defaultValue={"unverified"}
            name=""
            className="px-4 py-2 font-sans text-sm border rounded-md outline-none focus:ring-2"
            id=""
            onChange={(e) => setSearchParams({ filter: e.target.value })}
          >
            <option value={"all"}>All</option>
            <option value="unverified">Unverified</option>
            <option value="verified">Verified</option>
          </select>
        </div>
        <div className="my-10 border-2 rounded-lg">
          {filteredEducators?.map((educator) => {
            return (
              <div
                key={educator?.id}
                className="flex items-center justify-between p-4 border-b-2 hover:bg-neutral-50"
              >
                <div className="space-y-2">
                  <h2 className="text-sm font-semibold">
                    {educator?.name}
                    <code className="px-2 py-1 ml-2 text-xs rounded-lg bg-neutral-100 text-neutral-600 font-grotesk">
                      {educator?.id}
                    </code>
                  </h2>
                  <p className="max-w-6xl font-sans text-sm truncate">
                    {educator?.about}
                  </p>
                  <p className="font-sans text-sm text-neutral-600">
                    {educator?.verified ? (
                      <span className="px-2 py-1 text-xs font-semibold text-blue-900 bg-blue-100 rounded-full">
                        Verified
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-100 rounded-full">
                        Unverified
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
                      {!educator?.verified && (
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() =>
                                  handleVerification("verified", educator?.id)
                                }
                                className={`${
                                  active
                                    ? "bg-neutral-100 text-black"
                                    : "text-neutral-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Verify
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      )}
                      {educator?.verified && (
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() =>
                                  handleVerification("unverified", educator?.id)
                                }
                                className={`${
                                  active
                                    ? "bg-neutral-100 text-black"
                                    : "text-neutral-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Un-verify
                              </button>
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
      </div>
    </AdminLayout>
  );
};

export default AdminEducators;
