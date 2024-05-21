import React, { useState } from "react";
import { useAuthStore } from "../store/auth";
import { useModuleStore } from "../store/module";
const CreateModule = ({ sectionId }) => {
  const [inputView, setInputView] = useState(false);
  const token = useAuthStore((state) => state.token);
  const createModule = useModuleStore((state) => state.createModule);
  const [title, setTitle] = useState("");
  const handleCreateModule = (e) => {
    if (e.key === "Enter" && title !== "") {
      createModule(token, sectionId, title);
      setInputView(false);
      // setModules((modules) => [...modules, { title }]);
      setTitle("");
    }
  };
  return (
    <div className="py-2 space-y-2">
      {inputView && (
        <div className="px-4">
          <input
            onKeyDown={handleCreateModule}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Module title"
          />
        </div>
      )}
      <div>
        <button
          onClick={() => setInputView(true)}
          className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-center rounded-md hover:bg-gray-100 font-grotesk"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add Module
        </button>
      </div>
    </div>
  );
};

export default CreateModule;
