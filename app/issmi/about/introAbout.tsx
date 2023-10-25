"use client"

import { useEffect } from "react"
import { useRef } from "react"
import gsap from "gsap";


export default function IntroHero() {
    const ref = useRef<any>();
    useEffect(() => {
        if (!ref.current) { return; }
        const children = ref.current.children as HTMLElement[];

        Array.from(children).forEach((e, i) => {
            gsap.set(e, { position: 'absolute', top: `${60 * i}px`, left: '50%', translateX: '-50%', width: '100%' })
        })
        animate(children);
    }, [])

    async function animate(children: HTMLElement[]) {
        setTimeout(() => {
            animate(children);
        }, 1500);
        Array.from(children).forEach((e) => {
            const top = parseInt(e.style.top);
            if (top <= 48 * -4) {
                gsap.set(e, { top: '60px' })
            }
            gsap.to(e, { top: '-=60px', duration: 1, ease: 'power4.inOut' })
        })
    }
    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-4xl font-bold">We make it easy to <span className="text-green-800">buy</span> and <span className="text-green-800">sell</span></p>
            <div ref={ref} className="h-14 my-4 w-full text-4xl font-bold relative text-center overflow-hidden ">
                <p>Exotic Cars</p>
                <p>Extraordinary cars</p>
                <p>Collector cars</p>
                <p>Enthusiast cars</p>
                <p>Hypercars</p>
            </div>
        </div>
    )
}