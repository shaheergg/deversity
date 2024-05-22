import { useEffect } from "react";
import { useAuthStore } from "../../store/auth";
import { useEnrollCourseStore } from "../../store/enrollment";
import { Link, useParams } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import Logo from "../../components/Logo";

const EnrollCourse = () => {
  const token = useAuthStore((state) => state.token);
  const getCourse = useEnrollCourseStore((state) => state.getCourse);
  const course = useEnrollCourseStore((state) => state.course);
  const enrollCourse = useEnrollCourseStore((state) => state.enrollCourse);
  const { courseId } = useParams();
  useEffect(() => {
    getCourse(token, courseId);
    console.log("courseId", courseId);
  }, [getCourse, token, courseId]);

  const enroll = () => {
    enrollCourse(token, courseId);
  };
  console.log(course);
  return (
    <>
      <div className="flex items-center justify-between p-4 border-2 border-b shadow">
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex flex-col w-10/12 gap-8 p-4 m-auto font-grotesk mt-7">
        <div className="flex flex-col rounded-xl bg-secondary font-grotesk p-9">
          <div className="text-3xl font-bold text-white mb-7">
            <Link to="/student/dashboard" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={40}
                height={40}
                color={"currentColor"}
                fill={"none"}
                className="inline-block mb-2 mr-4"
              >
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {course?.title}
          </div>
          <div className="pb-2">
            <h2 className="text-white">
              For{" "}
              <span className="lowercase text-primary">{course?.level}s</span>
            </h2>
          </div>
          <div className="text-white mb-7 ">{course?.description}</div>
          <div className="flex items-center gap-4 ">
            <Link
              to='/student/dashboard'
              className="px-4 py-2 font-semibold text-white border-2 border-white hover:text-secondary hover:bg-white bg-secondary"
            >
              Go to Dashboard
            </Link>
            <button
              onClick={enroll}
              className="px-4 py-2 font-semibold border-2 border-primary hover:bg-primary-hover hover:border-primary-hover bg-primary"
            >
              Enroll in the course
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-3 font-grotesk">
            <div className="" style={{ width: "75%" }}>
              <div className="pb-4 border-2 rounded-b-xl rounded-t-xl">
                <div className="p-4 border-b">
                  <div className="text-2xl font-bold">Course Overview</div>
                </div>
                {!course ? (
                  <div className="p-4">Course is empty</div>
                ) : (
                  course?.sections.map((section, index) => (
                    <Disclosure className="font-sans " as={"div"} key={index}>
                      <Disclosure.Button as="div">
                        <div
                          class="flex cursor-pointer border-y p-4 items-center justify-between"
                          id="stepTwoHeader"
                        >
                          <h2 class="text-lg font-semibold">
                            {section?.title}
                          </h2>
                          <span class="text-sm text-gray-600">
                            {section?.modules.length} modules
                          </span>
                        </div>
                      </Disclosure.Button>
                      {section?.modules.map((module, subIndex) => (
                        <Transition
                          key={subIndex}
                          enter={`transition duration-${
                            12 * subIndex + 1
                          } ease-out`}
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="flex px-4 py-1 border cursor-pointer hover:bg-gray-100">
                            <div class="py-2">
                              <Link
                                to={`/student/courses/${course?.id}/modules/${module?.id}`}
                                class="flex w-full items-center justify-between text-left"
                              >
                                <span>{module?.title}</span>
                              </Link>
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      ))}
                    </Disclosure>
                  ))
                )}
              </div>
              <div className="py-4 space-y-4">
                <div className="my-2 text-2xl font-bold">
                  Who is this course for?
                </div>
                <div>{course?.summary}</div>
              </div>
            </div>
            <div class="flex flex-col gap-6" style={{ width: "25%" }}>
              <div className="flex flex-col gap-3 p-2 border-2 rounded-xl">
                <div className="inline-flex items-center px-4 py-2 mb-3 font-semibold ">
                  Course Resources
                </div>
                <div className="inline-flex items-center px-4 py-2 border rounded-md cursor-pointer hover:bg-secondary hover:text-white">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </span>
                  Course Notes
                </div>
                <div className="inline-flex items-center px-4 py-2 border rounded-md cursor-pointer hover:bg-secondary hover:text-white">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </span>
                  Course Links
                </div>
                <div className="inline-flex items-center px-4 py-2 border rounded-md cursor-pointer hover:bg-secondary hover:text-white">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </span>
                  Course PDFs
                </div>
              </div>

              <div className="flex flex-col p-6 my-3 border-2 rounded-xl">
                <div className="flex">
                  <div className="text-xl font-bold">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={`https://api.dicebear.com/8.x/initials/svg?seed=${course?.Educator?.name}`}
                        alt=""
                      />
                      <span>{course?.Educator?.name}</span>
                    </div>
                  </div>
                </div>
                <div className="my-3 align-middle">
                  {course?.Educator?.about}
                </div>
                <div>
                  <button className="w-full px-4 py-2 text-white transition-all border bg-secondary border-secondary hover:bg-white hover:text-secondary">
                    See Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollCourse;
