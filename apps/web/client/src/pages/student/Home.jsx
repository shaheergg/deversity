import React, { useEffect, useState } from "react";
import { useEnrollCourseStore } from "../../store/enrollCourse";
import { useAuthStore } from "../../store/auth";
import EnrollCourseCard from "../../components/EnrollCourseCard";
const Home = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(JSON.parse(u));
  }, []);
  const token = useAuthStore((state) => state.token);
  const getEnrollments = useEnrollCourseStore((state) => state.getEnrollments);
  const enrollments = useEnrollCourseStore((state) => state.enrollments);
  useEffect(() => {
    getEnrollments(token);
  }, [getEnrollments, token]);
  console.log(enrollments);
  return (
    <>
      <div id="scorecard" className="flex flex-col w-10/12 p-4 m-auto">
        <div className="flex flex-row flex-wrap items-center gap-5 p-6">
          <div className="rounded-full bg-lime-500">
            <img
              className="w-16 h-16 bg-gray-800 rounded-full"
              src={`https://api.dicebear.com/8.x/initials/svg?seed=${user?.name}`}
              alt=""
            />
          </div>
          <div className="flex flex-col flex-grow gap-1 font-grotesk">
            <div className="text-2xl font-bold">
              Hey, {user?.name?.split(" ")[0]}
            </div>
            <div>
              <span className="font-bold">From </span> {user?.school}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 p-6 font-grotesk">
          <div className="flex-1">
            <div className="flex justify-end gap-4 text-base font-bold">
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                M
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                T
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                W
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                T
              </div>
              <div className="flex items-center justify-center text-center text-white border rounded-full w-9 h-9 bg-secondary">
                F
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                S
              </div>
              <div className="flex items-center justify-center text-center border rounded-full w-9 h-9">
                S
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row gap-6 p-6 font-grotesk">
          <div className="flex-1 border-r-2 border-gray-300">
            <div className="text-xl font-bold">Course Completed</div>
            <div>5</div>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold">Projects Done</div>
            <div>3</div>
          </div>
        </div>

        <div className="p-6 text-2xl font-bold font-grotesk">
          In Progress Courses
        </div>
        <div className="space-y-2">
          {enrollments?.data?.map((enrollment) => {
            return (
              <EnrollCourseCard key={enrollment.id} enrollment={enrollment} />
            );
          })}
        </div>
        {enrollments?.data?.length === 0 && (
          <div className="flex items-center justify-center p-6 font-grotesk">
            No Courses in Progress
          </div>
        )}
      </div>

      {/* <div className="flex flex-col font-grotesk">
            <div className='text-2xl font-bold'>
                In Progress Courses
            </div>
            <div>

            </div>

        </div> */}
    </>
  );
};

export default Home;
