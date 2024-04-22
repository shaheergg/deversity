import React from "react";
import { Disclosure } from "@headlessui/react";
const CredentialCard = ({ credential }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full gap-4 px-4 py-4 pl-4 pr-5 text-sm font-medium text-left rounded-lg bg-neutral-100">
            <span className="text-lg font-semibold">{credential?.title}</span>
            <span className="px-2 py-1 text-xs font-medium text-gray-100 bg-gray-900 rounded-full">
              {credential?.type}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-2 pt-4 pb-2 space-y-4 text-sm text-gray-500 ">
            <p className="">{credential?.description}</p>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="border border-gray-200 divide-y divide-gray-100 rounded-md"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex items-center flex-1 w-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="flex flex-1 min-w-0 gap-2 ml-4">
                      <span className="font-medium truncate">
                        {credential?.url}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 ml-4 space-x-4">
                    <button
                      type="button"
                      className="font-medium bg-white rounded-md text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        color={"currentColor"}
                        fill={"none"}
                        className="inline ml-2"
                      >
                        <path
                          d="M11.1005 3.00208C7.45162 3.00864 5.54086 3.09822 4.31974 4.31931C3.00195 5.63706 3.00195 7.75796 3.00195 11.9997C3.00195 16.2415 3.00195 18.3624 4.31974 19.6801C5.63753 20.9979 7.75849 20.9979 12.0004 20.9979C16.2423 20.9979 18.3632 20.9979 19.6811 19.6801C20.9021 18.4591 20.9917 16.5484 20.9983 12.8996"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.4809 3.51715L14.9316 9.05114M20.4809 3.51715C19.9869 3.02264 16.6593 3.06873 15.9558 3.07874M20.4809 3.51715C20.9748 4.01166 20.9288 7.34292 20.9188 8.04718"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default CredentialCard;
