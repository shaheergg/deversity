import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function CourseModule({ module, index, showcontent = false }) {
  console.log(module);
  return (
    <div
      className={`w-full font-grotesk text-gray-500 ${
        showcontent ? "pb-3" : ""
      }`}
    >
      <div className="w-full max-w-full py-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              {showcontent && (
                <div className="py-3 text-base">{module.description}</div>
              )}

              <Disclosure.Button
                className={`flex w-full justify-between rounded-lg px-4 ${
                  showcontent
                    ? "py-4 text-xl bg-gray-700 hover:bg-secondary text-white"
                    : "py-2 bg-purple-100 text-sm hover:bg-purple hover:bg-purple-200 text-black"
                }   font-bold  focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
              >
                <span key={index}> {module.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>

              {module.submodules.map((submodule, index) => (
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                  <div key={index} className="flex flex-col">
                    {showcontent && (
                      <div className={`text-lg`}>
                        <div>
                          <Disclosure>
                            {({ open2 }) => (
                              <>
                                <Disclosure.Button
                                  className={`flex w-full justify-between rounded-lg bg-purple-100 px-4 ${
                                    showcontent ? "py-4" : "py-2"
                                  } text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75`}
                                >
                                  <span>{submodule.title}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open2 ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-white`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                                  {submodule.description}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div>
                    )}
                    {!showcontent && (
                      <div className={``}>{submodule.title}</div>
                    )}
                  </div>
                </Disclosure.Panel>
              ))}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
