import { cardsDetailsProps } from "@/Types/Types";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const CardsDetails = ({
    isOpen,
    name,
    rank,
    priceUsd,
    volumeUsd24Hr,
    marketCapUsd,
    changePercent24Hr,
    closeModel,
}: cardsDetailsProps) => {
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
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-hidden transform rounded bg-black py-20 bg-opacity-80 text-left shadow-xl transition-all flex flex-col gap-5">
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
                                        <Image
                                            src="/mock2.png"
                                            alt="product"
                                            width={280}
                                            height={280}
                                            className="mb-4"
                                        />
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
                                        <button className="w-full font-bold rounded-md mt-2 py-4 transition-all ease-in-out transition-color delay-150 bg-orange-600 hover:bg-orange-700">
                                            اضافه به سبد خرید
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

export default CardsDetails;
