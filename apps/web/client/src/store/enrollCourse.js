import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useEnrollCourseStore = create((set) => ({
  course: {},
  getCourse: async (token, courseId) => {
    try {
      const response = await fetch(BASE_URL + `/api/course/${courseId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Parse the data (assuming JSON response)
        const course = await response.json();
        // Update state with the parsed courses
        set((state) => ({ course: course.data })); // Replace with your state update logic
        console.log("Course fetched successfully:", course);
      } else {
        toast.error("There was an error fetching course data");
        console.log(response);
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  },
  enrollCourse: async (token, courseId) => {
    try {
      console.log("Enrolling Course");
    } catch (error) {
      toast.error("Internal Server Error");
    }
  },
  
}));