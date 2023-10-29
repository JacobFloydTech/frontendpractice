import { useEffect } from "react"

import NewHistorySVG from "./ourHistorySVG"
import OurHistoryGrid from "./ourHistoryGrid"
export default function OurHistory() {
    return (
        <div className="flex w-full h-auto flex-col my-12">
            <div className="grid md:grid-cols-2 mx-4 p-4 text-center justify-center items-center">
                <div className="space-y-2 md:p-4 p-2">
                    <p className="text-5xl md:text-7xl">100+ Years</p>
                    <p className="text-3xl">of combined experience</p>
                </div>
                <div className="space-y-8 md:p-12 p-4 flex justify-around flex-col text-left text-lg">
                    <p>We're not just another online auction. We offer a full white-glove service that makes growing your collection easy and enjoyable. With over 100 years of combined luxury automotive experience, we take care of everything from preparing a seller's vehicle for sale to coordinating transportation for the buyer, ensuring every transaction is seamless.</p>
                    <p>On top of transaction management, we also offer global searches for exceptional cars worldwide, operate a full-service workshop for routine maintenance and full restorations, offer allocations for exclusive manufacturers, and host regular events for our ISSIMI community.</p>
                    <p>Our goal is to make every part of the buying and selling experience as smooth and stress-free as possible. At ISSIMI, we believe that growing your collection should be a source of joy and pride, and we do everything we can to make that a reality for our clients.</p>
                </div>
            </div>
            <div className="flex flex-col md:mx-12 2xl:mx-24 bg-[#183029] text-white p-8">
                <p className="my-5 text-6xl ">Our History</p>
                <OurHistoryGrid />

            </div>
        </div>
    )
}



