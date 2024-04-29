import { toast } from "sonner";
import { create } from "zustand";
import { BASE_URL } from "../constants";

export const useEducatorStore = create((set) => ({
  educator: {},
  fetchEducator: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/api/educator`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        set({ educator: data.data });
      } else {
        toast.error("Failed to fetch educator data");
      }
    } catch (error) {
      toast.error("Failed to fetch educator data");
    }
  },
}));
