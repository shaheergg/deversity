import { toast } from "sonner";
import { create } from "zustand";
import { BASE_URL } from "../constants";

export const useCourseContentStore = create((set) => ({
  course: {},
  getCourseDetails: async (token, courseId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/course/${courseId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const course = await response.json();
        set({ course: course.data });
      } else {
        toast.error("Internal Error!!");
      }
    } catch (error) {
      toast.error("Course Details cannot be fetched");
    }
  },
}));
