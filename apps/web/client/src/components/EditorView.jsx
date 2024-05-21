import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

export default function EditView({ editable = true, content, onChange }) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: content || [{ type: "paragraph", content: "Not Content" }],
  });

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      onChange={(editor) => onChange(editor)}
      editable={editable}
      theme={"light"}
      editor={editor}
    />
  );
}
