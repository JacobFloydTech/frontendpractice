"use client";


import { useEffect, useState } from "react"
import gsap from "gsap";

type car = {
    id: string,
    aspectRatio: number,
    originalYOffset: number,
    originalYHeight: number
}

export default function CardGrid() {

    let sections: car[] = [{ id: 'e30', aspectRatio: 0.408, originalYOffset: 50, originalYHeight: 186 }, { id: 'rs7', aspectRatio: 0.5, originalYHeight: 500, originalYOffset: 10 },
    { id: 'merc', aspectRatio: 0.5, originalYOffset: 10, originalYHeight: 455 }]

    useEffect(() => {


        window.addEventListener('resize', () => {
            sections.forEach((e) => { setSize(e) })
        })
        function setSize({ id, aspectRatio, originalYOffset, originalYHeight }: car): void {

            let image = document.getElementById(id);
            let widthPercent = image?.clientWidth
            if (!widthPercent) {
                return
            }
            widthPercent = widthPercent / document.body.clientWidth;



            let newWidth = document.body.clientWidth * widthPercent;

            gsap.set(`#svg${id}`, { height: newWidth * aspectRatio, width: newWidth, backgroundPositionX: `-${newWidth / 2}px`, backgroundPositionY: `-${(50 / 186) * (newWidth * aspectRatio)}px` });
            gsap.set(image, { height: newWidth * aspectRatio, width: newWidth, backgroundPositionY: `-${(originalYOffset / originalYHeight) * (newWidth * aspectRatio)}px` })

        }
        sections.forEach((e) => { setSize(e); animate(e.id) })


    }, [])

    function animate(id: string) {

        Array.from(document.getElementsByClassName(`path${id}`)).forEach((element) => {
            gsap.fromTo(element, { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 30 })
        })

    }


    function onHover(id: string): void {
        animate(id);
        gsap.to(`#${id}`, { opacity: 0.8, duration: 2 })
    }

    function onLeave(id: string): void {
        gsap.to(`#${id}`, { opacity: 0, duration: 2 })
    }



    return (
        <div className="grid grid-cols-1 min-h-screen grid-rows-3 bg-black">
            <div onMouseOver={() => { onHover("e30"); }} onMouseLeave={() => { onLeave("e30") }} className="h-1/3 overflow-hidden relative">

                <div id='e30' style={{ background: "url('/cars/e30.jpg')", backgroundSize: 'cover', backgroundPositionY: '-50px' }} className="opacity-0 left-1/2 top-1/2 translate -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-video absolute"></div>
                <svg id='svge30' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 451 185" width="455" height="186" xmlns="http://www.w3.org/2000/svg">
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

                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} filter="url(#blurFilter)" cx="152" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} filter="url(#blurFilter)" cx="118" cy="98" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} filter="url(#blurFilter)" cx="343" cy="98" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} filter="url(#blurFilter)" cx="310" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} cx="152" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} cx="118" cy="99" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} cx="343" cy="99" r="15" fill="none" stroke-width="2" stroke="lightblue"></circle>
                    <circle className="pathe30" strokeDasharray={1000} strokeDashoffset={1000} cx="310" cy="99" r="16" fill="none" stroke-width="2" stroke="lightblue"></circle>
                </svg>
            </div>
            <div onMouseOver={() => { onHover("rs7"); }} onMouseLeave={() => { onLeave("rs7") }} className="h-1/3 relative overflow-hidden">

                <div id='rs7' style={{ background: "url('/cars/rs7.jpg')", backgroundSize: 'cover', backgroundPositionY: '-50px' }} className="opacity-0 left-1/2 top-1/2 translate -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-video absolute"></div>
                <svg id='svgrs7' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 451 185" width="451" height="185" xmlns="http://www.w3.org/2000/svg">
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
                    <path className="pathrs7" strokeDasharray={1000} strokeDashoffset={1000} fill='none' stroke='lightblue' strokeWidth={1.5} d="M 145 108 l 17 3 l -7 5 l -35 -6 l -2 -6 l 5 1 l 1 3 l 15 2.5 Z"></path>
                    <path className="pathrs7" strokeDasharray={1000} strokeDashoffset={1000} filter="url(#blurFilter)" fill='none' stroke='lightblue' strokeWidth={3} d="M 145 108 l 17 3 l -7 5 l -35 -6 l -2 -6 l 5 1 l 1 3 l 15 2.5 Z"></path>
                    <path className="pathrs7" strokeDasharray={1000} strokeDashoffset={1000} fill="none" stroke="lightblue" strokeWidth={1.5} d="M 285 110 l 15 -1.5 l 7 3 l 17 -2 l 0.5 -4 l 5 0.5 l -1 6 -35 4 Z"></path>
                    <path className="pathrs7" strokeDasharray={1000} strokeDashoffset={1000} filter="url(#blurFilter)" fill="none" stroke="lightblue" strokeWidth={3} d="M 285 110 l 15 -1.5 l 7 3 l 17 -2 l 0.5 -4 l 5 0.5 l -1 6 -35 4 Z"></path>
                </svg>
            </div>
            <div onMouseOver={() => { onHover("merc"); }} onMouseLeave={() => { onLeave("merc") }} className="h-1/3 border-black border-2 relative overflow-hidden">

                <div id='merc' style={{ background: "url('/cars/merc.jpg')", backgroundSize: 'cover' }} className="opacity-0 left-1/2 top-1/2 translate -translate-x-1/2 -translate-y-1/2 w-1/3 absolute"></div>
                <svg id='svgmerc' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 451 185" width="455" height="186" xmlns="http://www.w3.org/2000/svg">
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

                    <path strokeDasharray={1000} strokeDashoffset={1000} className="pathmerc" fill="none" stroke="lightblue" strokeWidth={2} d="M 94 135 c 0 0 29 -1 -26 -32"></path>
                    <path strokeDasharray={1000} strokeDashoffset={1000} className="pathmerc" filter="url(#blurFilter)" fill="none" stroke="lightblue" strokeWidth={2} d="M 94 135 c 0 0 29 -1 -26 -32"></path>
                    <path strokeDasharray={1000} strokeDashoffset={1000} className="pathmerc" fill='none' stroke="lightblue" strokeWidth={2} d="M 356 135 c 0 0 -29 -1 29 -32"></path>
                    <path strokeDasharray={1000} strokeDashoffset={1000} className="pathmerc" fill='none' filter="url(#blurFilter)" stroke="lightblue" strokeWidth={2} d="M 356 135 c 0 0 -29 -1 29 -32"></path>
                </svg>
            </div>
        </div >


    )
}