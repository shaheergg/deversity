import { useEffect } from "react";
import { useAuthStore } from "../../store/auth";
import { useEnrollCourseStore } from "../../store/enrollCourse";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EnrollCourse = () => {
  const token = useAuthStore((state) => state.token);
  const getCourse = useEnrollCourseStore((state) => state.getCourse);
  const course = useEnrollCourseStore((state) => state.course);
  const enrollCourse = useEnrollCourseStore((state) => state.enrollCourse);
  const { courseId } = useParams();
  useEffect(() => {
    getCourse(token, courseId);
  }, [getCourse, token, courseId]);
  console.log("one course", course);
  const chapters = [
    {
      chapterTitle: "Python Basics",
      subtopics: [
        {
          title: "Variable Functions Libraries",
          duration: "1 hour",
        },
        {
          title: "Conditional Statements",
          duration: "1.5 hours",
        },
        {
          title: "Loops and Iterations",
          duration: "1 hour",
        },
      ],
    },
    {
      chapterTitle: "Data Analysis Techniques",
      subtopics: [
        {
          title: "Descriptive Statistics",
          duration: "2 hours",
        },
        {
          title: "Data Visualization",
          duration: "2.5 hours",
        },
        {
          title: "Data Wrangling",
          duration: "2 hours",
        },
      ],
    },
  ];
  const enroll = () => {
    enrollCourse(token, courseId);
  };

  return (
    <>
      <div className="flex flex-col w-10/12 gap-8 p-4 m-auto font-grotesk mt-7">
        <div className="flex flex-col rounded-md bg-secondary font-grotesk p-9">
          <div className="my-1 text-sm text-gray-400 uppercase">
            Interactive Course
          </div>
          <div className="text-3xl font-bold text-white mb-7">
            {course.title}
          </div>
          <div className="flex gap-2 mb-7">
            <button
              onClick={enroll}
              className="px-4 py-1 font-medium rounded-md bg-primary"
            >
              Start Course
            </button>
            <button
              to=""
              className="px-4 py-1 text-white border-2 rounded-md bg-secondary border-slate-200"
            >
              Bookmark
            </button>
          </div>
          <div className="flex gap-2 text-white">
            <div className="py-2">
              <span className="px-6 py-2 text-sm font-semibold border-2 rounded-md text-primary border-slate-200">
                {course?.level}
              </span>
            </div>
            <div className="inline-flex px-3 pt-2 rounded-md bg-slate-700">
              {/* {course.sections.length * 12} */}
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              0 hours
            </div>
          </div>
        </div>

        <div className="">
          <div className="text-2xl font-bold">Course Description</div>
          <div className="my-6">{course.description}</div>
        </div>
        <div>
          <div className="flex gap-3 font-grotesk">
            <div
              className="p-4 border-2 rounded-md border-slate-200"
              style={{ width: "75%" }}
            >
              {chapters.map((chapter, index) => (
                <div key={index} className="my-3">
                  <div className="my-1 text-xl font-bold">
                    {chapter.chapterTitle}
                  </div>
                  {chapter.subtopics.map((subtopic, subIndex) => (
                    <Link
                      to="/"
                      key={subIndex}
                      className="flex p-1 text-lg cursor-pointer hover:bg-slate-200"
                    >
                      <div className="w-4/5">{subtopic.title}</div>
                      <div className="w-1/5 text-right">
                        {/* {subtopic.duration} */}
                        XPs
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div class="flex flex-col gap-6" style={{ width: "25%" }}>
              <div className="flex flex-col gap-3 p-2 border-2 rounded-md border-slate-200 ">
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

              <div className="flex flex-col items-center justify-center p-6 my-3 border-2 rounded-md border-slate-200">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-full bg-lime-500">
                    <img
                      className="w-16 h-16 bg-gray-800 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-2 py-3 text-xl font-bold">
                    <div className="text-lg font-semibold">
                      {/* {course.Educator.name} */} {course?.Educator?.name}
                    </div>
                  </div>
                </div>
                <div className="my-3 align-middle">
                  {course?.Educator?.about}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-2 text-2xl font-bold">Summary of the Course</div>
          <div className="my-6">{course?.summary}</div>
        </div>
      </div>
    </>
  );
};

export default EnrollCourse;
