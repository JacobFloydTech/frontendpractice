"use client";

import { useEffect, useState } from "react";

import gsap from "gsap";

export default function BookDemo() {
    let [hover, setHover] = useState(false);

    useEffect(() => {
        if (hover) {

            gsap.fromTo("#demoButton", { x: 0 }, {
                x: -10, duration: 0.2, onComplete: () => {
                    gsap.fromTo("#demoButton", { x: -10 }, {
                        x: 10, duration: 0.2, repeat: 3, yoyo: true, onComplete: () => {
                            gsap.to("#demoButton", { x: 0, duration: 0.2 })
                        }
                    })
                }
            })


        }
    }, [hover, setHover])
    return (
        <div className="w-full flex bg-black justify-center items-center">
            <button id='demoButton' onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"py-2 px-4 text-2xl rounded-3xl border-2 my-28" + (hover ? " text-black bg-white border-black" : " text-white bg-black border-white")}>Book a demo</button>
        </div>
    )
}