"use client"

import { Listing } from "@/types";
import { useEffect, useState } from "react"
import { listingData, privateListingData } from "./listing";
import { ButtonSVG } from "../whatWeDo";

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
        <div className="w-full h-auto mt-36 flex px-6  flex-col">
            <div className="w-2/3 mb-6 h-16 rounded-3xl flex items-center bg-white px-2">
                <SearchIcon />
                <input className="w-full h-full overflow-hidden rounded-3xl mx-2 outline-none" placeholder="Search by model, make, or year" onChange={(e) => { e.preventDefault(); searchList(e.target.value) }}></input>
            </div>
            <div className="grid grid-cols-3 gap-y-8 gap-x-4 ">
                {list.map((l, i) => {
                    return <Listing privateSale={false} listing={l} key={i} />
                })}
            </div>
            <PrivateSales />
            <PrivateSalesAd />
        </div>
    )
}

function Listing({ listing, privateSale }: { listing: Listing, privateSale: boolean }) {
    return (
        <div className="text-left inline-flex flex-col space-y-4  ">

            <div className="h-24 md:h-64 2xl:h-96 w-full">
                <img className="w-full h-full object-cover rounded-xl" src={`/issmi/listings/${listing.src}`}></img>
            </div>

            <p className="font-bold text-xl">{listing.title}</p>
            <p className="text-gray-800 leading-relaxed text-lg mr-8">{listing.description}</p>

            <div className="flex  w-full h-full flex-col justify-end">
                <p className={"text-center text-white py-2   rounded-2xl" + (privateSale ? " w-[30%] bg-[#A98000]" : "  w-[45%] bg-green-800")}>{privateSale ? "Private Sale" : `Seller asking £${listing.asking}`}</p>
            </div>
        </div>
    )
}

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function PrivateSales() {
    return (
        <div className="flex mt-24 flex-col w-full h-auto">
            <p className="text-3xl tracking-wide">Access our private listings by joining our <span className="underline text-[#A98000]">VIP Program</span></p>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4 my-6">
                {privateListingData.map((l, i) => {
                    return <Listing privateSale={true} listing={l} key={i} />
                })}
            </div>
        </div>
    )
}

function PrivateSalesAd() {
    return (
        <div className="flex border-[1px] bg-white  border-[#A98000] w-[80%] mx-auto flex-col items-center justify-center py-12">
            <p className="text-xl font-bold">Want to see all of our exclusive listings? Access these listings by joining Private Sales.</p>
            <ButtonSVG color1="#A98000" color2='white' />
        </div>
    )
}