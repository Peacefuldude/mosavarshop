"use client";

import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { searchCoinProps } from "@/Types/Types";
import { useState, Fragment } from "react";
import { coins } from "@/Utils/coin-utils";

const SearchCoin = ({ coin, setCoin }: searchCoinProps) => {
    const [query, setQuery] = useState("");
    const filteredCoins =
        query === ""
            ? coins
            : coins.filter((item) =>
                  item
                      .toLowerCase()
                      .replace(/\s+/, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <div className="search-manufacturer">
            <Combobox value={coin} onChange={setCoin}>
                <div className="relative w-full">
                    <Combobox.Input
                        className="search-manufacturer__input"
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="مثلا بنویس بتمن"
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {filteredCoins.length === 0 && query !== "" ? (
                                <Combobox.Option
                                    value={query}
                                    className="search-manufacturer__option"
                                >
                                    سرچ شما: "{query}"
                                </Combobox.Option>
                            ) : (
                                filteredCoins.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) =>
                                            `search-manufacturer__option ${
                                                active
                                                    ? "bg-primary-blue text-white"
                                                    : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {item}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchCoin;
