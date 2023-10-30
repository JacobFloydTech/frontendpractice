"use client"

import { Listing } from "@/types";
import { useEffect, useState } from "react"
import { listingData } from "./listing";

export default function AuctionPage() {

    const [list, setList] = useState<Array<Listing>>(listingData);

    function searchList(value: string) {


        const arr = value?.trim().split(" ");
        if (arr[0] == "") { return setList(listingData) }
        const newList = listingData.filter((l) => {
            return arr?.some((word) => l.make.some((tag) => tag.startsWith(word.toLowerCase()))) || arr?.some((word) => word == l.year)

        })
        setList(newList);
    }

    return (
        <div className="w-full h-auto mt-36">
            <input onChange={(e) => { e.preventDefault(); searchList(e.target.value) }}></input>
            <div className="grid grid-cols-3 mx-6 gap-4">
                {list.map((l, i) => {
                    return <Listing listing={l} key={i} />
                })}
            </div>
        </div>
    )
}

function Listing({ listing }: { listing: Listing }) {
    return (
        <div className="text-left inline-flex flex-col space-y-4 justify-between">
            <div className="h-24 md:h-64 2xl:h-96 w-full">
                <img className="w-full h-full object-cover rounded-xl" src={`/issmi/listings/${listing.src}`}></img>
            </div>
            <p className="font-bold text-xl">{listing.title}</p>
            <p className="text-gray-800 leading-relaxed text-lg mr-8">{listing.description}</p>

            <p className="w-[45%] text-center text-white bg-green-800 py-2  rounded-2xl ">Seller asking ${listing.asking}</p>

        </div>
    )
}