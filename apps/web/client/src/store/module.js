import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";

export const useModuleStore = create((set) => ({
  modules: [],
  module: {},
  fetchModules: async (token, sectionId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/modules/${sectionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        set({ modules: data.data });
      } else {
        toast.error("Internal server error occurred");
      }
    } catch (e) {
      console.log(e);
      toast.error("Internal server error occurred");
    }
  },
  createModule: async (token, sectionId, title) => {
    try {
      const response = await fetch(`${BASE_URL}/api/modules/${sectionId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        const data = await response.json();
        set((state) => ({ modules: [...state.modules, data?.module] }));
        console.log(data);
        toast.success("Module created successfully");
      } else {
        toast.error("Internal server error occurred");
      }
    } catch (e) {
      console.log(e);
      toast.error("Internal server error occurred");
    }
  },
  getModule: async (token, moduleId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/modules/${moduleId}/content`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Data", data);
        set({ module: data.data });
        return data.data;
      } else {
        toast.error("Internal server error occurred");
      }
    } catch (e) {
      console.log(e);
      toast.error("Internal server error occurred");
    }
  },
  updateModule: async (token, { title, content }, moduleId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/modules/${moduleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        const data = await response.json();
        set({ module: data.data });
        toast.success("Module updated successfully");
      } else {
        toast.error("Internal server error occurred");
      }
    } catch (e) {
      console.log(e);
      toast.error("Internal server error occurred");
    }
  },
}));
