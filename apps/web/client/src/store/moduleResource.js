import { toast } from "sonner";
import { create } from "zustand";
import { BASE_URL } from "../constants";
export const useResourceStore = create((set) => ({
  resources: [],
  fetchResources: async (token, moduleId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/module/resources/${moduleId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        set({ resources: data.data });
      } else {
        toast.error("Internal server error occurred");
      }
    } catch (e) {
      console.log(e);
      toast.error("Internal server error occurred");
    }
  },
  createResource: async (token, { title, moduleId, url }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/module/resources/${moduleId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            url,
            type: "File",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        set((state) => ({ resources: [...state.resources, data.data] }));
        toast.success("Resource added successfully");
      } else {
        toast.error("Internal server error occurred");
      }
    } catch (e) {
      console.log(e);
      toast.error("Internal server error occurred");
    }
  },
}));
