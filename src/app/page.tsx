"use client";
import { assets } from "@/Utils/asset-utils";
import Image from "next/image";
import { type Framework, frameworks } from "@/Utils/framework-utils";
import { useEffect, useState } from "react";
import { cn } from "@/Utils/tailwind-utils";
import { FrameworkRotation } from "@/components/Framework-rotation";
import SearchCoin from "@/components/searchCoin";
import SubmitButton from "@/components/SubmitButton";
import { getAll } from "@/Utils/axios-utils";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
    const [coin, setCoin] = useState("");
    const [submit, setSubmit] = useState(false);
    const [currentFramework, setCurrentFramework] = useState<Framework>(
        frameworks[0]
    );
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        setShowBackground(true);
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        const rotateFramework = () => {
            setCurrentFramework(frameworks[currentIndex]);
            currentIndex = (currentIndex + 1) % frameworks.length;
        };
        const intervalId = setInterval(rotateFramework, 2000);
        return () => clearInterval(intervalId);
    }, []);

    // kheili khob natige shode inke ye component dige besazim ke oon use client nadare ta
    // betoonim async konimesh va tooye oon getAll ro seda bezanim. intori ham function ha to file haye jodan
    // va ham herfe i tare ke ye component dige bezarim oonja. va baraye search ham mitonam az hamoon component
    // estefade konam intori ke age submit search false bood bia getAll ro seda kon va age true bood bia
    // get Search ro seda kon.

    return (
        <main>
            <div
                className={cn(
                    "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
                    {
                        "bg-red-500": currentFramework === "monero",
                        "bg-blue-600": currentFramework === "ripple",
                        "bg-blue-300": currentFramework === "stellar",
                        "bg-orange-300": currentFramework === "bitcoin",
                        "text-indigo-700": currentFramework === "etherium",
                        "bg-green-400": currentFramework === "tether",
                    }
                )}
            />
            <Image
                width={1200}
                height={1200}
                role="presentation"
                alt="gradient background"
                className="fixed inset-0 w-screen h-screen object-cover"
                src={assets.gradient}
            />
            <div
                className="fixed inset-0 opacity-30"
                style={{
                    backgroundImage: `url(${assets.square})`,
                    backgroundSize: "30px",
                }}
            ></div>
            <div
                className={cn(
                    "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
                    !showBackground ? "opacity-100" : "opacity-0"
                )}
            />

            <div className="max-w-7xl mt-20 mx-auto">
                <div className="flex flex-col items-center relative z-10">
                    <h1
                        className={`max-lg:text-5xl max-sm:text-2xl max-sm:max-w-md text-6xl max-w-3xl text-center leading-snug mb-12`}
                    >
                        تموم{" "}
                        <FrameworkRotation
                            currentFramework={currentFramework}
                        />{" "}
                        در اتاق{" "}
                        <span
                            className={cn("transition-colors duration-200 ", {
                                "text-red-500": currentFramework === "monero",
                                "text-blue-600": currentFramework === "ripple",
                                "text-blue-300": currentFramework === "stellar",
                                "text-orange-300":
                                    currentFramework === "bitcoin",
                                "text-indigo-700":
                                    currentFramework === "etherium",
                                "text-green-400": currentFramework === "tether",
                            })}
                        >
                            شما
                        </span>{" "}
                        خواهد بود
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl mt-5 mx-auto">
                <div className="flex flex-col items-center relative z-10">
                    <h3 className="max-md:max-w-md max-md:text-lg max-sm:max-w-sm max-sm:text-sm text-xl max-w-2xl text-center leading-snug mb-12">
                        مسیر زیبایی از همینجا می گذره. اتاقت رو با مصور زیبا کن
                    </h3>
                </div>
            </div>
            <div className="max-xl:max-w-4xl max-w-6xl mt-10 mx-auto">
                <div className="max-lg:flex-col max-lg:items-center flex flex-row-reverse items-start justify-center w-full relative z-10">
                    <SearchCoin coin={coin} setCoin={setCoin} />
                    <SubmitButton
                        submit={submit}
                        setSubmit={setSubmit}
                        currentFramework={currentFramework}
                    />
                </div>
            </div>
            <div className="max-w-6xl mt-20 mx-auto">
                <div className="text-7xl flex w-full justify-center items-center relative z-10">
                    <Image
                        src="/arrow.png"
                        alt="arrow icon"
                        width={35}
                        height={35}
                        className="animate-bounce"
                    />
                </div>
            </div>
            <div className="max-xl:max-w-4xl max-lg:max-w-2xl max-md:max-w-lg max-sm:max-w-full max-w-6xl mt-36 mx-auto">
                <div className="w-full flex justify-center items-center relative z-10">
                    <Cards coinForCard={coin} submitForCard={submit} />
                </div>
            </div>
            <div className="max-xl:max-w-4xl max-lg:max-w-2xl max-md:max-w-lg max-sm:max-w-full max-sm:mx-4 max-w-6xl mt-36 mb-6 mx-auto">
                <div className="w-full flex justify-start items-start relative z-10">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
