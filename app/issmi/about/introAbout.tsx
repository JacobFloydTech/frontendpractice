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
        <div className="p-12 flex justify-center items-center flex-col rounded-md  w-full md:w-2/3 bg-gray-50">
            <p className="text-4xl font-bold">We make it easy to <span className="text-green-800">buy</span> and <span className="text-green-800">sell</span></p>
            <div ref={ref} className="h-12 md:h-14 my-4 w-full text-3xl md:text-4xl font-bold relative text-center overflow-hidden ">
                <p>Exotic Cars</p>
                <p>Extraordinary cars</p>
                <p>Collector cars</p>
                <p>Enthusiast cars</p>
                <p>Hypercars</p>
            </div>
            <p className="text-2xl">We believe in building trust and transparency<br></br>  between collectors, and we're committed to <br></br>simplifying the process.</p>
            <button className="border-green-600 border-2 bg-green-600 text-white p-4 mt-12 rounded-full font-bold text-2xl hover:bg-transparent hover:text-black">Create an account</button>
        </div>
    )
}
