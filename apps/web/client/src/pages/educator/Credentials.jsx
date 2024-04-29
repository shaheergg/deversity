import React, { useEffect, useState } from "react";
import EducatorLayout from "../../layouts/EducatorLayout";
import { Disclosure } from "@headlessui/react";
import AddCredentialModal from "../../components/AddCredentialModal";
import { useAuthStore } from "../../store/auth";
import { useCredentialStore } from "../../store/credential";
import CredentialCard from "../../components/CredentialCard";
const CredentialsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useAuthStore((state) => state.token);
  const getCredentials = useCredentialStore((state) => state.getCredentials);
  const credentials = useCredentialStore((state) => state.credentials);
  useEffect(() => {
    getCredentials(token);
  }, []);

  console.log(credentials);

  return (
    <EducatorLayout current={4}>
      <AddCredentialModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Credentials</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-white rounded-md bg-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              color={"currentColor"}
              className="inline mr-2"
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
            Add Credential
          </button>
        </div>
        <div>
          <div className="space-y-2">
            {credentials.length > 0 ? (
              credentials?.map((credential, idx) => {
                return <CredentialCard key={idx} credential={credential} />;
              })
            ) : (
              <div className="flex items-center justify-center w-full h-56">
                <p className="font-semibold">No credentials found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </EducatorLayout>
  );
};

export default CredentialsPage;
