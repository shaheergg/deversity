import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Course from '../pages/student/Course';
import CourseModule from './CourseModule';

export default function MyModal({ state, course, closeModal }) {
    //let [isOpen, setIsOpen] = useState(state);
    //console.log(course);

    return (
        <>

            <Transition appear show={state} as={Fragment}>
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

                    <div className="fixed inset-0 overflow-y-auto font-grotesk                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl max-h-3xl overflow-y-auto overflow-hidden transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {course.title}
                                    </Dialog.Title>
                                    <div className="my-2">
                                        <p className="text-sm text-gray-500">
                                            {course.description}
                                        </p>
                                    </div>
                                    <div className="max-w-screen overflow-y-auto" style={{"height":"300px"}}>
                                        {/* Modal content */}
                                        {course.modules.map((module, index) => (
                                            <CourseModule key={index} module={module} />
                                        ))}
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
