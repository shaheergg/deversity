import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useAuthStore = create((set) => ({
  auth: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role") || "student",
  login: async (data, role) => {
    try {
      const response = await fetch(BASE_URL + `/login/${role}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      if (response.ok) {
        set({ auth: true, token: res.token, role });
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.role?.toLowerCase());
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later");
    }
  },
}));
