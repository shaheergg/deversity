import { toast } from "sonner";
import { create } from "zustand";
import { BASE_URL } from "../constants";

export const useEducatorStore = create((set) => ({
  educator: JSON.parse(localStorage.getItem("user")) || {},
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
        localStorage.setItem("user", JSON.stringify(data.data));
      } else {
        toast.error("Failed to fetch educator data");
      }
    } catch (error) {
      toast.error("Failed to fetch educator data");
    } finally {
      // window.location.reload();
    }
  },
  createEducator: async (token, data) => {
    try {
      const response = await fetch(`${BASE_URL}/api/educator`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Educator created successfully");
      } else {
        toast.error("Failed to create educator");
      }
    } catch (error) {
      toast.error("Failed to create educator");
    }
  },
}));
