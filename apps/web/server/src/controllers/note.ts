import db from "../db";

// Get all notes for a module
export const getAllNotes = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const notes = await db.note.findMany({
      where: { moduleId },
    });

    res.status(200).send({ data: notes });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while fetching notes");
  }
};

// Add a new note for a module
export const addNote = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const { title, description } = req.body;

    const newNote = await db.note.create({
      data: {
        title,
        description,
        moduleId,
      },
    });

    res.status(200).send({ data: newNote });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while adding a note");
  }
};

// Update an existing note
export const updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { title, description } = req.body;

    const updatedNote = await db.note.update({
      where: { id: noteId },
      data: {
        title,
        description,
      },
    });

    res.status(200).send({ data: updatedNote });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while updating the note");
  }
};

// Delete a note
export const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;

    await db.note.delete({
      where: { id: noteId },
    });

    res.status(200).send("Note deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while deleting the note");
  }
};
