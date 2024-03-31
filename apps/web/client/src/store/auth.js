import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role") || "student",
  login: (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    set({ auth: true, token, role });
  },
}));
