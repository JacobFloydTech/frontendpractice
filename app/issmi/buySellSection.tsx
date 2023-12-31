"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonSVG } from "./whatWeDo";
gsap.registerPlugin(ScrollTrigger);



export default function BuySellSection() {

    useEffect(() => {
        const el1 = document.getElementById('buyText');
        const el2 = document.getElementById('sellText');
        const width = document.body.clientWidth;

        if (!el1 || !el2) { return }
        gsap.fromTo(el1, { opacity: 0, translateX: '-=100' }, {
            opacity: 1, translateX: 0, scrollTrigger: {
                trigger: el1,
                scrub: true,
                start: `top ${width <= 640 ? 80 : 50}%`,
                end: 'top 30%'
            }
        })
        gsap.fromTo(el2, { opacity: 0, translateX: '+=100' }, {
            opacity: 1, translateX: 0, scrollTrigger: {
                trigger: el2,
                scrub: true,
                start: `top ${width <= 640 ? 80 : 50}%`,
                end: 'top 30%'
            }
        })
    })
    return (
        <div className="flex w-full h-1/2 flex-col md:flex-row ">
            <div className="md:w-1/2 md:h-full h-1/2 w-full bg-[#30573E] py-20 ">
                <div className="flex items-center justify-center text-white h-full w-full">
                    <div className="flex flex-col md:w-1/2 w-2/3 h-1/2 space-y-4 ">
                        <p className="md:text-7xl text-lg ">Buy</p>
                        <p id='buyText' className="md:text-xl text-base md:my-10">Browse unique cars from the best collections around the world</p>
                        <button>
                            <ButtonSVG color1="white" color2='#30573E' />
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 md:h-full h-1/2 w-full bg-[#4C8A63] py-20">
                <div className="flex items-center justify-center text-white h-full w-full ">
                    <div className="flex flex-col md:w-1/2 w-2/3 space-y-4">
                        <p className="md:text-7xl text-lg">Sell</p>
                        <p id='sellText' className="md:text-xl text-base md:my-10">Discover why top collectors choose us as their trusted partner.</p>
                        <button>
                            <ButtonSVG color1="white" color2='#4C8A63' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}