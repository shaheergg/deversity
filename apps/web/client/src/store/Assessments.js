import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useCourseAssessmentStore = create((set) => ({
  publishedCourses: null,
  projects: [],
  getPublishedCourses: async (token) => {
    //console.log("courseId", courseId);
    try {
      const response = await fetch(BASE_URL + `/api/getCourses`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });

      if (response.ok) {
        // Parse the data (assuming JSON response)
        const courses = await response.json();
        // Update state with the parsed courses
        console.log("in Assessment store", courses);
        const publishedCourseData = courses.data.filter(course => course.published);
        set({ publishedCourses: publishedCourseData }); // Replace with your state update logic
        console.log("Published Courses fetched successfully:", publishedCourseData);
      } else {
        toast.error("There was an error fetching published courses data");
        console.log(response);
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  },
  createAssessment: async (assessmentData, token, courseId) => {
    try {
      const response = await fetch(BASE_URL + `/api/project/${courseId}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assessmentData),
      });

      if (response.ok) {
        ///const data = await response.json();
        const data = await response.json();
        toast.success("Assessment created successfully");
        console.log("Assessment created successfully:", data);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "There was an error creating the assessment");
        console.log(response);
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  },
  getAssessments: async (token) => {
    try { 
      const response = await fetch(`${BASE_URL}/api/projects`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      if(response.ok) {
        const projects = await response.json();
        set({projects: projects.data})
      }
    }
    catch (error) {
      toast.error("There was an error fetching assessments.");
      console.error(error);
    }
  }
}));
