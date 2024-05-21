import { create } from "zustand";

export const useEditorStore = create((set) => ({
  content: null,
  setContent: (newContent) => {
    set({ content: newContent });
  },
}));
