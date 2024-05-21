import React, { useEffect, useState } from "react";
import { CraftEditor } from "@sergeysova/craft";
import { useEditorStore } from "../store/editor";
import { useParams } from "react-router-dom";
import { useModuleStore } from "../store/module";
import { useAuthStore } from "../store/auth";
import EditView from "./EditorView";
import { toast } from "sonner";
const Editor = ({ editable = true }) => {
  const content = useEditorStore((state) => state.content);
  const setContent = useEditorStore((state) => state.setContent);
  const { moduleId } = useParams();
  const getModule = useModuleStore((state) => state.getModule);
  const token = useAuthStore((state) => state.token);
  const module = useModuleStore((state) => state.module);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const contentRender = async () => {
      try {
        setLoading(true);
        const m = await getModule(token, moduleId);
        const parsedContent = await JSON.parse(m?.content);
        console.log("Parsed Content", parsedContent);
        await setContent(parsedContent);
      } catch (error) {
        toast.error("Data not fetched" + error.message);
      }
    };
    contentRender().then(() => {
      setLoading(false);
    });
  }, [token, getModule, moduleId]);
  console.log(moduleId);
  console.log(content); // Watch for changes in the module prop
  console.log("content from store", content);
  const onChange = (editor) => {
    setContent(editor.document);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="py-4 pl-12 text-4xl font-semibold font-grotesk">
          {module?.title}
        </h2>
      </div>
      {loading && (
        <div className="flex items-center justify-center w-full h-20 font-semibold">
          <h2>Loading...</h2>
        </div>
      )}
      {(!loading || module?.content === undefined) && (
        <div key={"editor2"}>
          <EditView content={content} editable={editable} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default Editor;
