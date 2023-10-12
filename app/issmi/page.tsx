"use client";



import Navbar from "./navbar";
import Grid from "./grid";
import BuySellSection from "./buySellSection";
import CarPhotoSection from "./carPhotoSection";


export default function Home() {

    return (
        <div className="h-screen w-full ">

            <Navbar />
            <Grid />
            <BuySellSection />
            <CarPhotoSection />

        </div>
    )
}