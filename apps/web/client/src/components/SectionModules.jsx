import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import { Link } from "react-router-dom";
import CreateModule from "./CreateModule";
import { BASE_URL } from "../constants";
import { useModuleStore } from "../store/module";
const SectionModules = ({
  sectionId,
  courseId,
  currentModule,
  editable = true,
}) => {
  const token = useAuthStore((state) => state.token);
  const modules = useModuleStore((state) => state.modules);
  const fetchModules = useModuleStore((state) => state.fetchModules);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(sectionId);
  useEffect(() => {
    fetchModules(token, sectionId);
  }, [token, sectionId, fetchModules]);
  console.log(modules);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center ">
          <div className="w-5 h-5 border-t-2 border-b-2 rounded-full border-secondary animate-spin"></div>
        </div>
      ) : (
        <div>
          <div>
            <small className="block px-4 py-2 font-sans text-xs font-semibold text-gray-600">
              Modules
            </small>
          </div>
          {modules?.length > 0 &&
            modules?.map((module, idx) => {
              return (
                module?.sectionId === sectionId && (
                  <div key={idx} className="">
                    <Link
                      to={`/${
                        editable ? "educator" : "student"
                      }/courses/${courseId}/modules/${module?.id}`}
                      className={`block w-full py-4 pl-12 pr-4 font-semibold truncate border-b font-grotesk  ${
                        Number(currentModule) === module?.id
                          ? "bg-secondary text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {module?.title}
                    </Link>
                  </div>
                )
              );
            })}
        </div>
      )}
      {editable && <CreateModule sectionId={sectionId} />}
    </div>
  );
};

export default SectionModules;
