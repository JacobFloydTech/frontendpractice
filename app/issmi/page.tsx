"use client";



import Navbar from "./navbar";
import Grid from "./grid";
import BuySellSection from "./buySellSection";
import CarPhotoSection from "./carPhotoSection";
import Auction from "./auction";
import WhatWeDo from "./whatWeDo";
import Footer from "./footer";
import { StayInTheLoop } from "./whatWeDo";


export default function Home() {

    return (
        <div className="h-auto w-auto overflow-x-hidden">

            <Grid />
            <BuySellSection />
            <CarPhotoSection />
            <Auction />
            <WhatWeDo />
            <StayInTheLoop />


        </div>
    )
}