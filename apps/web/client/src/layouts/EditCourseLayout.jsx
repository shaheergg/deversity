import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useSectionStore } from "../store/section";
import { Disclosure } from "@headlessui/react";
import SectionModules from "../components/SectionModules";
import AddResourceDrawer from "../components/AddResourceDrawer";
import { useModuleStore } from "../store/module";
import { useEditorStore } from "../store/editor";
import { toast } from "sonner";

const EditCourseLayout = ({
  children,
  title,
  courseId,
  currentModule,
  editable = true,
}) => {
  const [open, setOpen] = useState(true);
  const [section, setSection] = useState("");
  const [textview, setTextview] = useState(false);
  const token = useAuthStore((state) => state.token);
  const createSection = useSectionStore((state) => state.createSection);
  const sections = useSectionStore((state) => state.sections);
  const fetchSections = useSectionStore((state) => state.fetchSections);
  const [loading, setLoading] = useState(false);
  const [panels, setPanels] = useState(Array(sections?.length).fill(false));
  const module = useModuleStore((state) => state.module);
  const content = useEditorStore((state) => state.content);
  const updateModule = useModuleStore((state) => state.updateModule);

  const updateContent = () => {
    if (module?.title === "" || content === null) {
      toast.info("Please enter some content to save");
      return;
    }
    const stringContent = JSON.stringify(content);
    updateModule(
      token,
      { title: module?.title, content: stringContent },
      module?.id
    );
  };

  useEffect(() => {
    fetchSections(courseId, token);
  }, [courseId, token, fetchSections]);
  const handleCreateSection = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      if (section === "") return;
      createSection(section, courseId, token).then(() => {
        setLoading(false);
        setSection("");
        setTextview(false);
      });
    }
  };
  const openPanelHandler = (idx) => {
    const newPanels = panels.map((panel, index) =>
      index === idx ? !panel : false
    );
    setPanels(newPanels);
  };
  useEffect(() => {}, [currentModule]);
  return (
    <section>
      <div className="sticky top-0 flex items-center justify-between px-4 py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className={`z-50 p-1 bg-white border-2 top-3 rounded-md text-secondary hover:bg-gray-100`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M4 8.5L20 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 15.5L20 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold truncate font-grotesk">
            <Link to="/educator/courses" href="">
              Courses
            </Link>{" "}
            / {title}
          </span>
        </div>
        {!editable && (
          <div className="flex items-center">
            <button className="p-2 border-4 rounded-l hover:bg-gray-100 border-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"currentColor"}
                fill={"none"}
              >
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="px-4 py-[6px] font-semibold border-y-4 hover:bg-gray-100 border-secondary">
              {module?.title}
            </span>
            <button className="p-2 border-4 rounded-r hover:bg-gray-100 border-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"currentColor"}
                fill={"none"}
              >
                <path
                  d="M20 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        {editable && (
          <div className="flex items-center gap-4">
            <AddResourceDrawer>
              <button className="flex items-center gap-2 px-4 py-1 text-sm font-semibold border-4 rounded-md hover:bg-gray-100 font-grotesk border-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  color={"currentColor"}
                  fill={"none"}
                >
                  <path
                    d="M2.5 6C2.5 4.45956 2.5 3.68934 2.84673 3.12353C3.04074 2.80693 3.30693 2.54074 3.62353 2.34673C4.18934 2 4.95956 2 6.5 2C8.04044 2 8.81066 2 9.37647 2.34673C9.69307 2.54074 9.95926 2.80693 10.1533 3.12353C10.5 3.68934 10.5 4.45956 10.5 6C10.5 7.54044 10.5 8.31066 10.1533 8.87647C9.95926 9.19307 9.69307 9.45926 9.37647 9.65327C8.81066 10 8.04044 10 6.5 10C4.95956 10 4.18934 10 3.62353 9.65327C3.30693 9.45926 3.04074 9.19307 2.84673 8.87647C2.5 8.31066 2.5 7.54044 2.5 6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.78166 14.7817C4.82852 13.7348 5.35195 13.2114 5.9721 13.0625C6.3191 12.9792 6.6809 12.9792 7.0279 13.0625C7.64805 13.2114 8.17148 13.7348 9.21834 14.7817C10.2652 15.8285 10.7886 16.3519 10.9375 16.9721C11.0208 17.3191 11.0208 17.6809 10.9375 18.0279C10.7886 18.6481 10.2652 19.1715 9.21834 20.2183C8.17148 21.2652 7.64805 21.7886 7.02791 21.9375C6.6809 22.0208 6.3191 22.0208 5.9721 21.9375C5.35195 21.7886 4.82852 21.2652 3.78166 20.2183C2.7348 19.1715 2.21137 18.6481 2.06248 18.0279C1.97917 17.6809 1.97917 17.3191 2.06248 16.9721C2.21137 16.3519 2.7348 15.8285 3.78166 14.7817Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 2V10M22 6L14 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add Resources
              </button>
            </AddResourceDrawer>
            <button
              disabled={!content}
              onClick={updateContent}
              className={`px-4 py-1 text-sm font-semibold border-4 rounded-md hover:bg-primary-hover bg-primary font-grotesk border-primary text-secondary ${
                !content ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Save
            </button>
          </div>
        )}
        {!editable && (
          <div>
            <button className="p-2 bg-gray-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"currentColor"}
                fill={"none"}
              >
                <path
                  d="M16 2V4M11 2V4M6 2V4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 14L17.5 22M21.5 18L13.5 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 15H11M7 10H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <section>
        <aside
          className={`fixed overflow-y-auto transition-all h-[90vh] border-r w-[300px] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative group">
            <div className="">
              <h2 className="p-4 mb-2 text-2xl font-semibold font-grotesk">
                Course Content
              </h2>
              <div className="">
                {sections?.length !== 0
                  ? sections?.map((section, idx) => {
                      return (
                        <Disclosure
                          onChange={() => openPanelHandler(idx)}
                          open={panels[idx]}
                          key={idx}
                          as={"div"}
                          className="w-full"
                        >
                          <Disclosure.Button
                            onClick={() => openPanelHandler(idx)}
                            as="div"
                            className="flex items-center justify-between p-4 cursor-pointer group hover:bg-gray-100 border-y"
                          >
                            <div className="text-xl font-semibold text-secondary font-grotesk">
                              {section?.title}
                            </div>
                            <button className="p-1 text-secondary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={18}
                                height={18}
                                color={"currentColor"}
                                fill={"none"}
                                className="ui-open:rotate-90 ui-open:transform"
                              >
                                <path
                                  d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </Disclosure.Button>
                          <Disclosure.Panel className="">
                            <SectionModules
                              editable={editable}
                              currentModule={currentModule}
                              courseId={courseId}
                              sectionId={section?.id}
                            />
                          </Disclosure.Panel>
                        </Disclosure>
                      );
                    })
                  : !textview && (
                      <div className="flex items-center justify-center w-full p-4">
                        <span className="text-lg font-semibold text-gray-600 font-grotesk">
                          No Content Yet
                        </span>
                      </div>
                    )}
              </div>
            </div>
          </div>
          <div className="px-2">
            {textview && (
              <form className="py-2">
                <input
                  placeholder="Section Title"
                  onKeyDown={handleCreateSection}
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </form>
            )}
          </div>
          {editable && (
            <div className="flex flex-col justify-end flex-1">
              <button
                onClick={() => setTextview(true)}
                className="flex items-center justify-center w-full gap-4 py-4 text-lg font-semibold text-secondary font-grotesk hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  color={"currentColor"}
                  className=""
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
                Add Section
              </button>
            </div>
          )}
        </aside>
        <main
          className={`transition-all py-4 px-12 ${
            open ? "ml-[300px]" : "ml-0"
          }`}
        >
          {children}
        </main>
      </section>
    </section>
  );
};

export default EditCourseLayout;
