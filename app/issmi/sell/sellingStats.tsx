"use client";

import { useEffect, useRef, useState } from "react";

export default function SellingStats() {
    let [salesNumber, setSalesNumber] = useState(0);
    let [years, setYears] = useState(0);
    let observing = false;
    const ref = useRef<any>();
    useEffect(() => {

        main();
        let observer = new IntersectionObserver((entries, opts) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    observing = true;
                    main();
                } else {

                    observing = false;
                }
            })
        });
        observer.observe(ref.current)


    }, [])

    function main() {
        setSalesNumber(0);
        setYears(0);
        animate(salesNumber, 165, 0, setSalesNumber);
        animate(years, 100, 0, setYears);
    }

    function animate(number: number, limit: number, iterations: number, setterFunction: Function) {
        if (number >= limit || !observing) {
            return;
        }

        setterFunction(number += 1);
        setTimeout(() => {
            animate(number += 1, limit, iterations += 1, setterFunction)
        }, iterations * 2);
    }
    return (
        <div ref={ref} className="md:grid-cols-3 space-y-12 md:space-y-0 grid bg-gray-200 text-center py-12">
            <div >
                <p className=" text-5xl">${salesNumber} Million</p>
                <p className=" text-xl">in sales to date</p>
            </div>
            <div>
                <p className="text-5xl">6+ million</p>
                <p className="text-xl">eyeballs on your listing</p>
            </div>
            <div>
                <p className="text-5xl">{years}+ years</p>
                <p className="text-xl">of industry leading experience</p>
            </div>
        </div>
    )
}