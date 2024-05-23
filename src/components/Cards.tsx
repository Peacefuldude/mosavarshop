import { cardsProps } from "@/Types/Types";
import { useState } from "react";
import axios from "axios";
import { sliceFunc } from "@/Utils/slice-utils";
import { sliceAll } from "@/Utils/slice-utils";
import Image from "next/image";
import CardsDetails from "./CardsDetails";
import React, { useEffect } from "react";
import Forms from "./forms";

const Cards = ({ coinForCard, submitForCard }: cardsProps) => {
    const BASE_URL = "https://api.coincap.io/v2/assets";
    const jwtToken = "e4b4fead-1fb8-40d7-9ac2-051c887aa817";
    const [name, setName] = useState("");
    const [rank, setRank] = useState("");
    const [priceUsd, setPriceUsd] = useState("");
    const [volumeUsd24Hr, setVolumeUsd24Hr] = useState("");
    const [marketCapUsd, setMarketCapUsd] = useState("");
    const [changePercent24Hr, setChangePercent24Hr] = useState("");
    const [allData, setAllData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isAllOpen, setIsAllOpen] = useState(false);

    const axiosConfig = {
        Authorization: "Bearer " + jwtToken,
    };

    useEffect(() => {
        axios
            .get(`${BASE_URL}`, axiosConfig)
            .then((response) => {
                setAllData(sliceAll(response.data.data));
                setLoading(false);
                // console.log(response.data.data);
            })
            .catch((errors) => {
                console.log(errors);
            });
    }, []);

    const [formsIsOpen, setFormsIsOpen] = useState(false);
    const loginHandler = () => {
        if (!localStorage.getItem("mosavarshopuser")) {
            setFormsIsOpen(!formsIsOpen);
        }
    };

    return (
        <div className="w-full">
            {Loading ? (
                <div className="w-full flex justify-center items-center mt-6">
                    <h4>چند ثانیه منتظر بمانید</h4>
                </div>
            ) : undefined}
            <div className="max-xl:px-16 max-lg:grid-cols-2 max-md:px-8 max-sm:grid-cols-1 max-sm:px-2 px-36 grid grid-cols-3">
                {allData?.map((item, index) => (
                    <div
                        onClick={() => setIsOpen(true)}
                        key={index}
                        className="hover:bg-opacity-20 transition-all ease-in-out transition-color delay-150 cursor-pointer rounded-xl bg-opacity-10 mt-6 mx-6 py-4 px-6 bg-white flex flex-col justify-center items-center"
                    >
                        <Image
                            src="/mock2.png"
                            alt="product"
                            width={512}
                            height={512}
                            className="mb-4"
                        />
                        <div className="w-full flex flex-col justify-start items-start">
                            <h3 className="white font-bold text-xl mb-4">
                                Batman v. Joker
                            </h3>
                            <p className="text-gray-300 mb-2">
                                The battle has just begun!
                            </p>
                            <p className="text-gray-100 mb-2">
                                120.000
                                <span className="text-orange-400">T</span>
                            </p>
                        </div>
                        <button
                            onClick={loginHandler}
                            className="w-full font-bold rounded-md py-2 transition-all ease-in-out transition-color delay-150 bg-orange-600 hover:bg-orange-700"
                        >
                            اضافه به سبد خرید
                        </button>
                    </div>
                ))}
            </div>
            {/* Cards Detail fragment will be opened upon click on cards */}
            <CardsDetails
                isOpen={isOpen}
                name={"name"}
                rank={"rank"}
                priceUsd={"priceUsd"}
                volumeUsd24Hr={"volumeUsd24Hr"}
                marketCapUsd={"marketCapUsd"}
                changePercent24Hr={"changePercent24Hr"}
                closeModel={() => setIsOpen(false)}
            />
            {/* Login/signup fragment will be be open upon click on add to cart if the user is not logged in already. */}
            <Forms
                formsIsOpen={formsIsOpen}
                formsCloseModel={() => setFormsIsOpen(false)}
            />
        </div>
    );
};

export default Cards;
