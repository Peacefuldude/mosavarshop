import { cardsProps } from "@/Types/Types";
import { useState } from "react";
import axios from "axios";
import { sliceFunc } from "@/Utils/slice-utils";
import { sliceAll } from "@/Utils/slice-utils";
import Image from "next/image";
import CardsSearchPhone from "./CardsSearchPhone";

import React, { useEffect } from "react";
import CardsAllPhone from "./CardsAllPhone";

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

    useEffect(() => {
        axios
            .get(`${BASE_URL}/${coinForCard}`, axiosConfig)
            .then((response) => {
                setName(response.data.data.name);
                setRank(response.data.data.rank);
                setPriceUsd(sliceFunc(response.data.data.priceUsd));
                setVolumeUsd24Hr(sliceFunc(response.data.data.volumeUsd24Hr));
                setMarketCapUsd(sliceFunc(response.data.data.marketCapUsd));
                setChangePercent24Hr(
                    sliceFunc(response.data.data.changePercent24Hr)
                );
                // console.log(response.data.data);
            })
            .catch((errors) => {
                console.log(errors);
            });
    }, [submitForCard]);

    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-between items-start border-b-[1px] pb-4 border-orange-400">
                <div className="flex flex-row justify-start items-start text-gray-200">
                    <p className="card-titles__left">#</p>
                    <p className="card-titles__left">Name</p>
                </div>
                <div className="flex flex-row justify-end items-start flex-1 text-gray-200">
                    <p className="card-titles__right">Price</p>
                    <p className="card-titles__right max-lg:hidden">
                        24H Volume
                    </p>
                    <p className="card-titles__right max-lg:hidden">
                        Market Cap
                    </p>
                    <p className="card-titles__right max-sm:hidden">
                        24H Change
                    </p>
                    <p className="card-titles__star max-md:hidden">Star</p>
                </div>
            </div>
            {Loading ? (
                <div className="w-full flex justify-center items-center mt-6">
                    <h4>gathering latest data...</h4>
                </div>
            ) : undefined}
            {coinForCard ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer w-full flex flex-row justify-between items-start border-b-[1px] pb-4 mt-6 border-orange-400"
                >
                    <div className="flex flex-row justify-start items-start text-gray-200">
                        <p className="card-titles__left">{rank}</p>
                        <p className="card-titles__left">{name}</p>
                    </div>
                    <div className="flex flex-row justify-end items-start flex-1 text-gray-200">
                        <p className="card-titles__right">{priceUsd}</p>
                        <p className="card-titles__right max-lg:hidden">
                            {volumeUsd24Hr}
                        </p>
                        <p className="card-titles__right max-lg:hidden">
                            {marketCapUsd}
                        </p>
                        <p className="card-titles__right max-sm:hidden">
                            {changePercent24Hr}
                        </p>
                        <p className="card-titles__star max-md:hidden">Star</p>
                    </div>
                </div>
            ) : (
                <div>
                    {allData?.map((item, index) => (
                        <div
                            onClick={() => setIsAllOpen(true)}
                            key={index}
                            className="cursor-pointer w-full flex flex-row justify-between items-start border-b-[1px] pb-4 mt-6 border-orange-400"
                        >
                            <div className="flex flex-row justify-start items-start text-gray-200">
                                <p className="card-titles__left">{item.rank}</p>
                                <p className="card-titles__left">{item.name}</p>
                            </div>
                            <div className="flex flex-row justify-end items-start flex-1 text-gray-200">
                                <p className="card-titles__right">
                                    {sliceFunc(item.priceUsd)}
                                </p>
                                <p className="card-titles__right max-lg:hidden">
                                    {sliceFunc(item.volumeUsd24Hr)}
                                </p>
                                <p className="card-titles__right max-lg:hidden">
                                    {sliceFunc(item.marketCapUsd)}
                                </p>
                                <p className="card-titles__right max-sm:hidden">
                                    {sliceFunc(item.changePercent24Hr)}
                                </p>
                                <p className="card-titles__star max-md:hidden">
                                    Star
                                </p>
                            </div>
                            {/* <CardsAllPhone
                                isAllOpen={isAllOpen}
                                name={allData[index].name}
                                rank={allData[index].rank}
                                priceUsd={allData[index].priceUsd}
                                volumeUsd24Hr={allData[index].volumeUsd24Hr}
                                marketCapUsd={allData[index].marketCapUsd}
                                changePercent24Hr={
                                    allData[index].changePercent24Hr
                                }
                                closeAllModel={() => setIsAllOpen(false)}
                            /> */}
                        </div>
                    ))}
                </div>
            )}
            <CardsSearchPhone
                isOpen={isOpen}
                name={name}
                rank={rank}
                priceUsd={priceUsd}
                volumeUsd24Hr={volumeUsd24Hr}
                marketCapUsd={marketCapUsd}
                changePercent24Hr={changePercent24Hr}
                closeModel={() => setIsOpen(false)}
            />
        </div>
    );
};

export default Cards;
