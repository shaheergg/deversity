import { useParams } from "react-router-dom";
import { Drawer } from "vaul";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import { useResourceStore } from "../store/moduleResource";
import { toast } from "sonner";
import { useUploadStore } from "../store/upload";
import PDFViewer from "./PDFViewer";
function AddResourceDrawer({ children }) {
  const { moduleId } = useParams();
  const fetchResources = useResourceStore((state) => state.fetchResources);
  const resources = useResourceStore((state) => state.resources);
  const token = useAuthStore((state) => state.token);
  const [uploadView, setUploadView] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const upload = useUploadStore((state) => state.upload);
  const createResource = useResourceStore((state) => state.createResource);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e) => {
    // show error if the file is not pdf
    if (e.target.files[0].type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      return;
    }
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const handleFileUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const result = await upload(token, formData);

    await createResource(token, {
      title: fileName,
      moduleId,
      url: result.secure_url,
    });
    setLoading(false);
    setUploadView(false);
    setFile(null);
    setFileName("");
  };
  const cancelUpload = () => {
    setUploadView(false);
    setFile(null);
    setFileName("");
  };
  useEffect(() => {
    fetchResources(token, moduleId).then(() => {
      console.log("Resources fetched");
    });
  }, [fetchResources, moduleId, token]);
  console.log(resources);
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 overflow-auto z-50 flex flex-col rounded-t-[10px] h-[100%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="mx-auto max-w-7xl">
              <Drawer.Title className="flex items-center justify-between w-full mb-4 text-2xl font-medium">
                Add a new resource
                {!uploadView && (
                  <button
                    onClick={() => setUploadView(true)}
                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                  >
                    Add
                  </button>
                )}
                {uploadView && (
                  <button
                    onClick={handleFileUpload}
                    className="px-4 py-2 text-sm text-white rounded-md bg-secondary"
                  >
                    Upload
                  </button>
                )}
              </Drawer.Title>
              <div className="py-4 space-y-2">
                {resources?.length === 0 ? (
                  !uploadView && (
                    <div className="flex items-center justify-center h-40">
                      <p className="text-lg text-zinc-500">
                        No resources available
                      </p>
                    </div>
                  )
                ) : (
                  <div className="w-full space-y-2">
                    {resources?.map((resource) => (
                      <PDFViewer resource={resource} />
                    ))}
                  </div>
                )}
              </div>
              {uploadView && (
                <form>
                  <div className="flex flex-col h-[40vh] space-y-4 items-center justify-center">
                    <label className="w-[70%] space-y-4 flex text-secondary flex-col items-center px-4 py-6 bg-white rounded-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray.-100">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span className="mt-2 font-sans font-semibold leading-normal capitalize">
                        {loading ? "Uploading your file..." : "Select a file"}
                      </span>
                      {/* Display file name */}
                      {fileName && (
                        <div className="flex items-center justify-between w-full px-4 py-4 border rounded shadow">
                          <p className="text-sm font-semibold lowercase">
                            {file.name}
                          </p>
                          <button onClick={cancelUpload}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={20}
                              height={20}
                              color={"currentColor"}
                              fill={"none"}
                            >
                              <path
                                d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      )}{" "}
                      <span className="font-sans text-xs text-green-500 lowercase capitalize">
                        Pdfs, PNGs, JPGs, and DOCs are allowed
                      </span>
                      <input
                        onChange={handleFileChange}
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default AddResourceDrawer;
