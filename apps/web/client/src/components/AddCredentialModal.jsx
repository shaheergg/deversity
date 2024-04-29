import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Selectbox from "./Selectbox";
import { CREDENTIAL_TYPES } from "../constants";
import { useCredentialStore } from "../store/credential";
import { toast } from "sonner";
import { validateURL } from "../lib/utils";
import { useAuthStore } from "../store/auth";

const AddCredentialModal = ({ isOpen, setIsOpen }) => {
  const [selected, setSelected] = useState(CREDENTIAL_TYPES[0]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const token = useAuthStore((state) => state.token);
  const createCredential = useCredentialStore(
    (state) => state.createCredential
  );
  const [description, setDescription] = useState("");
  const closeModal = () => {
    setIsOpen(false);
  };
  const submitForm = () => {
    if (!title || !url || !description) {
      toast.error("Please fill all fields");
      return;
    }
    if (!validateURL(url)) {
      toast.error("Please enter a valid URL");
      return;
    }
    createCredential(
      {
        title,
        type: selected,
        url,
        description,
      },
      token
    );
    setIsOpen(false);
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl px-6 py-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Credential
                  </Dialog.Title>
                  <div className="mt-2">
                    <form action="" className="space-y-4">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="link"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select Credential Type
                        </label>
                        <Selectbox
                          setValue={setSelected}
                          value={selected}
                          options={CREDENTIAL_TYPES}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="link"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Link to Credential
                        </label>
                        <input
                          type="url"
                          name="link"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          id="link"
                          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="credential"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          type="text"
                          name="credential"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          id="credential"
                          className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="flex items-center justify-end gap-2 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-secondary"
                      onClick={submitForm}
                    >
                      Proceed
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddCredentialModal;
