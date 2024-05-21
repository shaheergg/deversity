import React, { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { useNoteStore } from "../store/note";
import { useAuthStore } from "../store/auth";
import { useParams } from "react-router-dom";
const NotesDrawer = ({ children }) => {
  const notes = useNoteStore((state) => state.notes);
  const getNotes = useNoteStore((state) => state.getNotes);
  const token = useAuthStore((state) => state.token);
  const addNote = useNoteStore((state) => state.addNote);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { moduleId } = useParams();
  const [visible, setVisible] = useState(false);
  const deleteNote = useNoteStore((state) => state.deleteNote);
  useEffect(() => {
    getNotes(moduleId, token);
  }, [getNotes, token, moduleId]);
  const handleAddNote = () => {
    if (!title || !description) return;
    addNote(moduleId, token, { title, description });
    setTitle("");
    setDescription("");
  };
  const handleDeleteNote = (noteId) => {
    deleteNote(token, noteId);
  };
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 z-50 flex flex-col rounded-t-[10px] h-[80%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-4xl mx-auto">
              <Drawer.Title className="flex items-center justify-between w-full mb-4 text-2xl font-medium">
                <span>Notes</span>
                <button
                  onClick={() => setVisible(!visible)}
                  className="px-4 py-2 mt-8 text-sm text-white rounded-lg bg-secondary"
                >
                  {visible ? "Close" : "Add Note"}
                </button>
              </Drawer.Title>
              {visible && (
                <div className="py-5">
                  <form>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Add a title"
                      className="w-full p-2 mb-4 border rounded-lg"
                    />
                    <textarea
                      placeholder="Add a note"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full h-20 p-2 mb-4 border rounded-lg"
                    />
                    <div className="flex items-center justify-end">
                      <button
                        onClick={handleAddNote}
                        disabled={!description || !title}
                        className="px-4 py-2 mt-8 text-white rounded-lg bg-secondary"
                      >
                        Add Note
                      </button>
                    </div>
                  </form>
                </div>
              )}
              <div className="space-y-4 overflow-y-auto hide-scrollbar h-96">
                {notes.length > 0 ? (
                  notes.map((note) => (
                    <div
                      key={note?.id}
                      className="flex items-center justify-between p-4 py-4 mb-4 rounded-lg bg-zinc-100"
                    >
                      <div className="flex flex-col">
                        <div className="text-lg font-medium">{note?.title}</div>
                        <div className="text-sm">{note?.description}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleDeleteNote(note?.id)}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-4 text-lg text-center text-zinc-500">
                    No notes available
                  </div>
                )}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default NotesDrawer;
