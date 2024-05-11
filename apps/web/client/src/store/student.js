import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";

export const useStudentStore = create((set) => ({
  student: {},
  fetchStudent: async (token) => {
    try {
      const response = await fetch(BASE_URL + "/api/student", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        set({ student: data });
      } else {
        set({ student: {} });
      }
    } catch (error) {
      set({ student: {} });
      toast.error("Failed to fetch student data");
    }
  },
}));
