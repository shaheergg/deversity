import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";

export const useUploadStore = create((set) => ({
  fileData: {},
  upload: async (token, formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/upload`, {
        method: "POST",
        body: formData,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      console.log(data.result);
      set({ fileData: data.result });
      toast.success(data.message);
      return data.result;
    } catch (error) {
      console.error("Error uploading file:", error);
      console.log(error);
      toast.error("Error uploading file");
    }
  },
}));
