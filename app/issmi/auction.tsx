"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Auction() {
    const ref = useRef<any>();
    useEffect(() => {
        Array.from(ref.current.childNodes).forEach((e: any) => {
            gsap.fromTo(e, { translateX: "+=50", opacity: 0 }, {
                translateX: 0, opacity: 1, scrollTrigger: {
                    trigger: e, scrub: true, start: 'top 70%', end: 'top 40%',
                }
            })
        })
    }, [])
    return (
        <div ref={ref} className="w-full h-auto my-12 flex flex-col items-center">
            <p className="text-center md:text-6xl text-2xl mb-4">How do our auctions work?</p>
            <img className="2xl:w-2/3" src="/cars/auctions.svg"></img>
        </div>
    )
}