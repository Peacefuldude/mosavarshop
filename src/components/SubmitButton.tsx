import { submitSearchProps } from "@/Types/Types";
import { cn } from "@/Utils/tailwind-utils";

import React from "react";

const SubmitButton = ({
    currentFramework,
    submit,
    setSubmit,
}: submitSearchProps) => {
    return (
        <div className="max-lg:w-[40rem] max-md:w-[22rem] max-lg:mt-3">
            <div
                className="w-full flex items-center justify-center cursor-pointer"
                onClick={() => setSubmit(!submit)}
            >
                <div
                    className={cn(
                        "max-lg:ml-0 max-lg:mr-0 w-full relative inline-flex items-center justify-start py-5 pb-6 pl-4 pr-12 mr-3 overflow-hidden font-semibold shadow transition-color delay-100 duration-700 text-orange-500 transition-all ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group",
                        {
                            "bg-red-500": currentFramework === "monero",
                            "bg-blue-600": currentFramework === "ripple",
                            "bg-blue-300": currentFramework === "stellar",
                            "bg-orange-300": currentFramework === "bitcoin",
                            "bg-indigo-700": currentFramework === "etherium",
                            "bg-green-400": currentFramework === "tether",
                        }
                    )}
                >
                    <span
                        className={cn(
                            "absolute bottom-0 left-0 w-full h-1 transition-all ease-in-out transition-color delay-100 group-hover:h-full",
                            {
                                "bg-red-800": currentFramework === "monero",
                                "bg-blue-800": currentFramework === "ripple",
                                "bg-blue-400": currentFramework === "stellar",
                                "bg-orange-600": currentFramework === "bitcoin",
                                "bg-indigo-800":
                                    currentFramework === "etherium",
                                "bg-green-500": currentFramework === "tether",
                            }
                        )}
                    ></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                        جست و جو
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SubmitButton;
