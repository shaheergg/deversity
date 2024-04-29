import React, { useState } from "react";
import Selectbox from "./Selectbox";
import { useCourseStore } from "../store/course";
import { useAuthStore } from "../store/auth";
import { toast } from "sonner";
import { LEVELS } from "../constants";
import { Navigate } from "react-router-dom";
const CourseOverview = () => {
  const [photo, setPhoto] = useState("https://picsum.photos/200");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const token = useAuthStore((state) => state.token);
  const createCourse = useCourseStore((state) => state.createCourse);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;
    if (!title || !description || !difficulty || !summary)
      return toast.error("Please fill all fields");
    const course = {
      title,
      description,
      level: difficulty,
      summary,
      coverPhoto: photo,
    };
    setLoading(true);
    try {
      await createCourse(course, token);
      // Handle successful response (e.g., show success message)
      setLoading(false);
      Navigate("/educator/courses", { replace: true });
    } catch (error) {
      // Handle errors (e.g., show error message)
      setLoading(false);
    } finally {
      setTitle("");
      setDescription("");
      setDifficulty(LEVELS[0]);
      setSummary("");
      setPhoto("https://picsum.photos/200");
    }
  };
  return (
    <div className="max-w-2xl py-10 mx-auto">
      <form>
        <div className="grid grid-cols-4 space-y-4">
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block font-semibold leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={30}
                  height={30}
                  color={"currentColor"}
                  fill={"none"}
                >
                  <path
                    d="M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 18C8.42061 13.2487 12.2647 6.9475 18 11.6734"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-semibold bg-white rounded-md cursor-pointer text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload an image</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="title"
              className="block font-semibold leading-6 text-gray-900"
            >
              Course Title
            </label>
            <div className="w-full mt-2">
              <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400">
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  autoComplete="title"
                  className="flex-1 block w-full px-4 py-3 text-gray-900 bg-transparent border-0 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Working with Open AI GPT-3 using python & LangChain"
                />
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="username"
              className="block font-semibold leading-6 text-gray-900"
            >
              Course Description
            </label>
            <div className="w-full mt-2">
              <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  id="description"
                  className="flex-1 block w-full h-48 px-4 py-3 text-gray-900 bg-transparent border-0 outline-none resize-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="A comprehensive guide to working with Open AI GPT-3 using python & LangChain"
                />
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="username"
              className="block font-semibold leading-6 text-gray-900"
            >
              Select Difficulty Level
            </label>
            <div className="w-full mt-2">
              <Selectbox
                options={LEVELS}
                value={difficulty}
                setValue={(value) => setDifficulty(value)}
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="username"
              className="block font-semibold leading-6 text-gray-900"
            >
              Course Summary
            </label>
            <div className="w-full mt-2">
              <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                <textarea
                  name="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  id="summary"
                  className="flex-1 block w-full h-64 px-4 py-3 text-gray-900 bg-transparent border-0 outline-none resize-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="In this course, you will learn how to work with Open AI GPT-3 using python & LangChain"
                />
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-5 py-3 text-sm text-white rounded-md font-grotesk bg-secondary"
            >
              {loading ? "Creating Course..." : "Create Course"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseOverview;
