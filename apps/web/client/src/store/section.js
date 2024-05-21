import { toast } from "sonner";
import { create } from "zustand";
import { BASE_URL } from "../constants";

export const useSectionStore = create((set) => ({
  sections: [],
  fetchSections: async (courseId, token) => {
    try {
      const response = await fetch(`${BASE_URL}/api/sections/${courseId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        set({ sections: data.data });
      } else {
        toast.error("Failed to fetch sections");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch sections");
    }
  },
  createSection: async (title, courseId, token) => {
    try {
      const response = await fetch(`${BASE_URL}/api/sections/${courseId}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        const data = await response.json();
        set((state) => ({ sections: [...state.sections, data.section] }));
        toast.success(data.message);
      } else {
        toast.error("Failed to add section");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add section");
    }
  },
  deleteSection: async (sectionId) => {},
}));
