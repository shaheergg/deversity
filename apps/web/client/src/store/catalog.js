import { create } from "zustand";
import { toast } from "sonner";
import { BASE_URL } from "../constants";
export const useCatalogStore = create((set) => ({
  catalog: [],
  getCatalog: async () => {
    try {
      const response = await fetch(BASE_URL + `/catalog`);
      if (response.ok) {
        // Parse the data (assuming JSON response)
        const courses = await response.json();
        // Update state with the parsed courses
        set((state) => ({ catalog: courses.data })); // Replace with your state update logic
        console.log("Courses fetched successfully:", courses);
      } else {
        console.log(response);
        toast.error("There was an error fetching data");
      }
    } catch (error) {
      console.error(error);
      toast.error("There was an error fetching data");
    }
  },
}));
