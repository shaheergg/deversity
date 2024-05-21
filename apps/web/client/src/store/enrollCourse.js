import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useEnrollCourseStore = create((set) => ({
  course: null,
  enrollments: {},
  getCourse: async (token, courseId) => {
    console.log("courseId", courseId);
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
        console.log("in store", course);
        set({ course: course.data }); // Replace with your state update logic
        console.log("Course fetched successfully:", course.data);
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
      const response = await fetch(
        BASE_URL + `/api/students/courses/${courseId}/enroll`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Parse the data (assuming JSON response)
        const data = await response.json();
        console.log(data);
        console.log("Course is enrolled successfully:");
        toast.success("Course is enrolled successfully");
      } else {
        toast.error("You have already enrolled in this course.");
        console.log(response);
        console.log(response.errors);
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  },
  getEnrollments: async (token) => {
    try {
      const response = await fetch(BASE_URL + `/api/students/enrollments`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Parse the data (assuming JSON response)
        const enrollment = await response.json();
        set((state) => ({ enrollments: enrollment }));
        console.log(
          "Course Enrollments by Student fetched successfully:",
          enrollment
        );
        toast.success("Course Enrollments by Student fetched successfully:");
      } else {
        toast.error("The course is already enrolled.");
        console.log(response);
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  },
}));
