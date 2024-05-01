import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useCourseStore = create((set) => ({
  courses: [],
  getCourses: async (token) => {
    try {
      const response = await fetch(BASE_URL + "/api/courses", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Parse the data (assuming JSON response)
        const courses = await response.json();
        // Update state with the parsed courses
        set((state) => ({ courses: courses.data })); // Replace with your state update logic
        console.log("Courses fetched successfully:", courses);
      } else {
        toast.error("There was an error fetching data");
        console.log(response);
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  },

  createCourse: async (course, token) => {
    try {
      const response = await fetch(BASE_URL + "/api/courses", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });
      if (response.ok) {
        toast.success("Course created successfully");
        set((state) => ({
          courses: [...state.courses, course],
        }));
      } else {
        toast.error("Failed to create course");
        console.log(response);
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  },

  getAllCourse: async () => {
    try {
      const response = await fetch(BASE_URL + "/catalog", {
        headers: {
          "Content-Type": "application/json",
        },
      });

        if (response.ok) {
          toast.success("Courses Fetched Successfully");
           console.log(response);
        } else {
          toast.error("Failed to create course");
          console.log(response);
        }
 
    } catch (error) {
      console.log(error);
    }
  },
}));
