import React from "react";
import { create } from "zustand";
import { BASE_URL } from "../constants";
import { toast } from "sonner";

export const useNoteStore = create((set) => ({
  notes: [],
  getNotes: async (moduleId, token) => {
    try {
      const response = await fetch(`${BASE_URL}/api/module/notes/${moduleId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const notes = await response.json();
        set({ notes: notes.data });
      } else {
        console.error(response);
        toast.error("There was an error fetching notes");
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error");
    }
  },
  addNote: async (moduleId, token, data) => {
    try {
      const response = await fetch(`${BASE_URL}/api/module/notes/${moduleId}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const note = await response.json();
        set((state) => ({ notes: [...state.notes, note.data] }));
      } else {
        console.error(response);
        toast.error("There was an error adding note");
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error");
    }
  },
  deleteNote: async (token, noteId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/module/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== noteId),
        }));
      } else {
        console.error(response);
        toast.error("There was an error deleting note");
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error");
    }
  },
}));
