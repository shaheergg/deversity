import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LogoDark from "../components/LogoDark";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EducatorLayout({ children, current = 0 }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/educator/dashboard",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          color="currentColor"
          fill={"none"}
        >
          <path
            d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      current: true,
    },
    {
      name: "Courses",
      href: "/educator/courses",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          color="currentColor"
          fill={"none"}
        >
          <path
            d="M6.51379 2C5.20952 2.12853 4.33158 2.41902 3.6763 3.07554C2.50098 4.25309 2.50098 6.14832 2.50098 9.93879V13.9592C2.50098 17.7497 2.50098 19.6449 3.6763 20.8225C4.85163 22 6.74328 22 10.5266 22H12.533C16.3163 22 18.208 22 19.3833 20.8225C20.45 19.7538 20.5486 18.1056 20.5577 14.9766"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5261 7.00013L11.5293 10.5001C12.0895 11.6101 12.7924 11.9005 14.5387 12.0001C15.9279 11.9657 16.7344 11.8021 17.4215 11.2041C17.8906 10.7958 18.1031 10.1812 18.2055 9.56889L18.5514 7.50013M21.0592 5.50013V10.5001M8.60078 4.93259C10.1876 3.61641 11.6021 2.90936 14.5348 2.13121C14.8651 2.04356 15.2145 2.04521 15.544 2.13585C18.1405 2.85008 19.5418 3.48376 21.42 4.89366C21.5005 4.95409 21.524 5.06556 21.4676 5.14878C20.8555 6.0512 19.4857 6.78153 16.1282 8.08399C15.4302 8.35477 14.6524 8.3485 13.9566 8.0721C10.3807 6.65155 8.73723 5.89271 8.53769 5.10312C8.52161 5.03948 8.55017 4.97457 8.60078 4.93259Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      current: false,
    },
    {
      name: "Assessments",
      href: "/educator/assessments",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          color="currentColor"
          fill={"none"}
        >
          <path
            d="M9 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.5 12L16.4199 12.7929C16.8066 13.1262 17 13.2929 17 13.5C17 13.7071 16.8066 13.8738 16.4199 14.2071L15.5 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12L7.58009 12.7929C7.19337 13.1262 7 13.2929 7 13.5C7 13.7071 7.19336 13.8738 7.58009 14.2071L8.5 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 11L11 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      current: false,
    },
    {
      name: "Credentials",
      href: "/educator/credentials",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          color={"currentColor"}
          fill={"none"}
        >
          <path
            d="M18.5 17.838C19.5305 17.6867 20.2627 17.3941 20.8284 16.8284C22 15.6569 22 13.7712 22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17157 16.8284C3.97975 17.6366 5.1277 17.8873 7 17.965"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17 7L7 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5C9.5 13.1193 10.6193 12 12 12C13.3807 12 14.5 13.1193 14.5 14.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 14.5C9.5 18.5659 11.2222 20.8706 12 22L13.5 19L15.25 20L17 21C16.2653 20.2888 15.5058 18.0471 15.5058 18.0471"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    }
    , {
      name: "Submissions",
      href: "/educator/submissions",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          color="currentColor"
          fill={"none"}
        >
          <path
            d="M9 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.5 12L16.4199 12.7929C16.8066 13.1262 17 13.2929 17 13.5C17 13.7071 16.8066 13.8738 16.4199 14.2071L15.5 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12L7.58009 12.7929C7.19337 13.1262 7 13.2929 7 13.5C7 13.7071 7.19336 13.8738 7.58009 14.2071L8.5 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 11L11 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      current: false
    }
  ];
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-secondary/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-secondary grow gap-y-5 ring-1 ring-white/10">
                    <div className="flex items-center h-16 shrink-0">
                      <LogoDark />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item, idx) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    current === idx
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className=" lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 overflow-y-auto bg-secondary grow gap-y-5">
            <div className="flex items-center h-16 shrink-0">
              <LogoDark />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className={classNames(
                            current === idx
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto -mx-6">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-white gap-x-4 hover:bg-gray-800"
                  >
                    <img
                      className="w-8 h-8 bg-gray-800 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center px-4 py-4 shadow-sm bg-secondary gap-x-6 sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="w-8 h-8 bg-gray-800 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
