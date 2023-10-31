"use client";

import { useEffect, useState } from "react";

export default function SellingStats() {
    let [salesNumber, setSalesNumber] = useState(0);
    useEffect(() => {
        animate(salesNumber, 165);
    }, [])

    function animate(salesNumber: number, limit: number) {
        if (salesNumber >= limit) {
            return;
        }

        setSalesNumber(salesNumber += 1);
        setTimeout(() => {
            animate(salesNumber += 1, limit)
        }, 100);
    }
    return (
        <div className="md:grid-cols-3 space-y-12 md:space-y-0 grid bg-gray-200 text-center py-12">
            <div>
                <p className="text-4xl">${salesNumber} Million</p>
                <p className="text-lg">in sales to date</p>
            </div>
            <div>
                <p className="text-4xl">6+ million</p>
                <p className="text-lg">eyeballs on your listing</p>
            </div>
            <div>
                <p className="text-4xl">100+ years</p>
                <p className="text-lg">of industry leading experience</p>
            </div>
        </div>
    )
}