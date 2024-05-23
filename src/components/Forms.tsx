import { formsProps } from "@/Types/Types";
import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Login from "@/forms/Login";
import Signup from "@/forms/SIgnup";

const Forms = ({ formsIsOpen, formsCloseModel }: formsProps) => {
    const [loginActive, setLoginActive] = useState(true);

    return (
        <>
            <Transition appear show={formsIsOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={formsCloseModel}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-hidden transform rounded bg-black py-20 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button
                                        type="button"
                                        onClick={formsCloseModel}
                                        className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                    >
                                        <Image
                                            src="/close.png"
                                            alt="close"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </button>
                                    <div className="flex-1 flex flex-col justify-center items-center gap-2">
                                        {loginActive ? <Login /> : <Signup />}
                                        {loginActive ? (
                                            <p
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    setLoginActive(
                                                        !loginActive
                                                    );
                                                }}
                                            >
                                                حساب کاربری ندارم
                                            </p>
                                        ) : (
                                            <p
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    setLoginActive(
                                                        !loginActive
                                                    );
                                                }}
                                            >
                                                حساب کاربری دارم
                                            </p>
                                        )}
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

export default Forms;
