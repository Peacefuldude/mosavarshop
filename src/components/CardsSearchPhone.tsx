import { cardSearchPhoneProps } from "@/Types/Types";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const CardsSearchPhone = ({
    isOpen,
    name,
    rank,
    priceUsd,
    volumeUsd24Hr,
    marketCapUsd,
    changePercent24Hr,
    closeModel,
}: cardSearchPhoneProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModel}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded bg-black py-20 bg-opacity-70 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button
                                        type="button"
                                        onClick={closeModel}
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
                                    <div className="flex-1 flex flex-col justify-center items-center gap-2 px-10">
                                        <h2 className="font-bold text-6xl capitalized">
                                            {name}
                                        </h2>
                                        <div className="w-full flex flex-row justify-end items-center flex-wrap gap-4">
                                            <span className="text-2xl mr-20">
                                                #{rank}
                                            </span>
                                        </div>
                                        <div className="w-full mt-8 flex flex-row justify-between items-center flex-wrap gap-4">
                                            <span>Price(USD):</span>
                                            <span>{priceUsd}</span>
                                        </div>
                                        <div className="w-full mt-4 flex flex-row justify-between items-center flex-wrap gap-4">
                                            <span>Volume(24Hr):</span>
                                            <span>{volumeUsd24Hr}</span>
                                        </div>
                                        <div className="w-full mt-4 flex flex-row justify-between items-center flex-wrap gap-4">
                                            <span>Market Cap(USD):</span>
                                            <span>{marketCapUsd}</span>
                                        </div>
                                        <div className="w-full mt-4 flex flex-row justify-between items-center flex-wrap gap-4">
                                            <span>Change(24Hr):</span>
                                            <span>{changePercent24Hr}</span>
                                        </div>
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

export default CardsSearchPhone;
