"use client";

import { useEffect } from "react";
import gsap from "gsap";


export default function MonsterCatBackground() {
    useEffect(() => {
        window.addEventListener('resize', () => {

            let width = 1366;
            let currentWidth = document.getElementById('background')?.clientWidth;
            if (!currentWidth) {
                return
            }

        })
    })

    return (

        <div id='background' className="blur-sm min-w-screen min-h-screen" style={{ backgroundSize: "fill", background: 'url("/monstercat/background.jpeg")', backgroundPositionX: 200, transform: "scale(1.33)", backgroundPositionY: -140, backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
            <div className="h-2/3 w-full bottom-0 absolute bg-gradient-to-b from-transparent to-black "></div>
        </div>

    )
}