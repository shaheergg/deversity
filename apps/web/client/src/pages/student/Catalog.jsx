import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Home from "../student/Home";
import Learn from "../student/Learn";
import CourseCard from "../../components/CourseCard";
import { useCatalogStore } from "../../store/catalog";
const Catalog = () => {
  const catalog = useCatalogStore((state) => state.catalog);
  const getCatalog = useCatalogStore((state) => state.getCatalog);
  useEffect(() => {
    getCatalog();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-10/12 p-4 m-auto font-grotesk mt-7">
        <div className="flex flex-wrap">
          <div className="flex-1 text-2xl font-bold">Course Catalog</div>
          <div className="items-center">
            <div className="flex items-center justify-end flex-1 gap-2 px-4 py-2 border-2">
              <label htmlFor="search" className="text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7389 25.6531L28.8344 22.7449C28.2229 22.1327 27.3057 22.1327 26.6943 22.7449C26.0828 23.3571 26.0828 24.2755 26.6943 24.8878L29.5987 27.7959C30.0573 28.2551 30.0573 29.0204 29.5987 29.4796C29.1401 29.9388 28.3758 29.9388 27.9172 29.4796L23.3312 24.8878C23.6369 24.5816 23.9427 24.4286 24.2484 24.1224C26.5414 21.8265 27.9172 18.6122 27.9172 15.398C27.9172 12.0306 26.6943 8.96939 24.2484 6.67347C19.3567 1.77551 11.5605 1.77551 6.66879 6.67347C1.77707 11.5714 1.77707 19.3776 6.66879 24.2755C8.96178 26.5714 12.172 27.949 15.3822 27.949C17.2166 27.949 19.051 27.4898 20.5796 26.7245L25.6242 31.7755C26.3885 32.5408 27.6115 33 28.6815 33C29.7516 33 30.8217 32.5408 31.7389 31.7755C33.4204 29.9388 33.4204 27.1837 31.7389 25.6531ZM8.80892 21.8265C5.14013 18.1531 5.14013 12.1837 8.80892 8.66327C10.6433 6.82653 12.9363 5.90816 15.3822 5.90816C17.828 5.90816 20.121 6.82653 21.9554 8.66327C23.7898 10.5 24.707 12.7959 24.707 15.2449C24.707 17.6939 23.7898 20.1429 21.9554 21.8265C20.121 23.5102 17.828 24.5816 15.3822 24.5816C12.9363 24.5816 10.4904 23.6633 8.80892 21.8265Z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="search"
                className="outline-none"
                placeholder="Search"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 font-grotesk">
          {searchTerm
            ? catalog
                .filter((course) => course.title.includes(searchTerm))
                .map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))
            : catalog.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  educator={course?.Educator}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
