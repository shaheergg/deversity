import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";
export const useCredentialStore = create((set) => ({
  credentials: [],
  getCredentials: async (token) => {
    try {
      const response = await fetch(BASE_URL + "/api/credentials", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const credentials = await response.json();
      if (response.ok) {
        set({ credentials: credentials.data });
      } else {
        toast.error("Failed to fetch credentials");
      }
    } catch (error) {
      console.error("Failed to fetch credentials:", error);
    }
  },

  createCredential: async (credential, token) => {
    try {
      const response = await fetch(BASE_URL + "/api/credentials", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      });
      if (response.ok) {
        toast.success("Credential created successfully");
        set((state) => ({
          credentials: [...state.credentials, credential],
        }));
      } else {
        toast.error("Failed to create credential");
      }
    } catch (error) {
      toast.error("Failed to create credential");
    }
  },
}));
