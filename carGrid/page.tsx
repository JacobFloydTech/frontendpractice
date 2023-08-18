"use client";


import { useEffect, useState } from "react"
import gsap from "gsap";
export default function CardGrid() {
    let [hover, setHover] = useState(false);

    useEffect(() => {
        let svg = document.getElementById('svg');
        let image = document.getElementById('image');
        let heightPercent = document.getElementById('svg')?.clientHeight
        let widthPercent = document.getElementById('svg')?.clientWidth;
        if (!heightPercent || !widthPercent) {
            return
        }
        heightPercent = heightPercent / document.body.clientHeight;
        widthPercent = widthPercent / document.body.clientWidth;

        window.addEventListener('resize', () => {
            setSize()
        })
        function setSize() {

            if (!heightPercent || !widthPercent) {
                return
            }

            console.log("setting size");
            let newHeight = document.body.clientHeight * heightPercent;
            let newWidth = document.body.clientWidth * widthPercent

            gsap.set(svg, { height: newHeight, width: newWidth, backgroundPositionY: `-${(50 / 186) * newHeight}px` });
            gsap.set(image, { height: newHeight, width: newWidth, backgroundPositionY: `-${(50 / 186) * newHeight}px` })

        }
        setSize()
    }, [])

    useEffect(() => {
        if (!hover) {
            gsap.fromTo("#image", { opacity: 1, scale: 1, duration: 0.3 }, { opacity: 0, scale: 0.7 },)
        } else { gsap.fromTo("#image", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.3 }) }

    }, [hover])


    return (
        <div className="grid grid-cols-1 min-h-screen grid-rows-3 bg-black">
            <div className="h-1/3 overflow-hidden relative">

                <div id='image' style={{ background: "url('/cars/e30.jpg')", backgroundSize: 'cover', backgroundPositionY: '-50px' }} className="opacity-0  left-1/2 translate -translate-x-1/2 w-1/3 h-full absolute">
                </div>
                <svg id='svg' onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className="absolute left-1/2 transform -translate-x-1/2" viewBox="0 0 451 185" width="455" height="186" xmlns="http://www.w3.org/2000/svg">
                    <defs>

                        <filter id="blurFilter" filterUnits="userSpaceOnUse"
                            x="-50%" y="-50%" width="200%" height="200%">

                            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur5" />
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur10" />
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur20" />
                            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur30" />
                            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur50" />

                            <feMerge result="blur-merged">
                                <feMergeNode in="blur10" />
                                <feMergeNode in="blur20" />
                                <feMergeNode in="blur30" />
                                <feMergeNode in="blur50" />
                            </feMerge>
                        </filter>
                    </defs>

                    <circle filter="url(#blurFilter)" cx="152" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle filter="url(#blurFilter)" cx="118" cy="98" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle filter="url(#blurFilter)" cx="343" cy="98" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle filter="url(#blurFilter)" cx="310" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle cx="152" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle cx="118" cy="99" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle cx="343" cy="99" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle cx="310" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                </svg>
            </div>
            <div className="h-1/3 border-black border-2">Row 2</div>
            <div className="h-1/3 border-black border-2">Row 3</div>
        </div>


    )
}