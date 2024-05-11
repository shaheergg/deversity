import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useCourseStore = create((set) => ({
  courses: [],
  getCourses: async (token, educatorId) => {
    try {
      const response = await fetch(BASE_URL + `/api/courses/${educatorId}`, {
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
  publishCourse: async (token, courseId) => {
    try {
      const response = await fetch(
        BASE_URL + `/api/courses/${courseId}/publish`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast.success("Course published successfully");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  },
  createCourse: async (course, token, educatorId) => {
    try {
      const response = await fetch(BASE_URL + `/api/courses/${educatorId}`, {
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
}));
