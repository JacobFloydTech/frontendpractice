"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function FontGrid() {

    useEffect(() => {
        gsap.fromTo(document.getElementById('contentText'), { opacity: 0 }, {
            opacity: 1, duration: 2, scrollTrigger: {
                trigger: document.getElementById('contentText'),
                start: 'top 50%',
                end: 'top 10%',
                markers: true,
                scrub: true,
            }
        })
    }, [])


    return (
        <div id='textField' className="grid grid-cols-4 w-full h-auto bg-black text-white mx-4 my-4 ">
            <p>Brandad Graphik</p>
            <p>Regular</p>
            <p>256px</p>
            <p>Download Font</p>
            <div id='contentText' className="col-span-4"><input className="bg-black w-full outline-0  text-[200px] overflow-x-scroll py-2 text-white" spellCheck={false} value="abcdefghijklmnopqrstuvwxyz" readOnly></input></div>
            <p>Brandad Graphik</p>
            <p>Light</p>
            <p>256px</p>
            <p>Download Font</p>
            <div className="col-span-4 textFields"><input className="bg-black w-full outline-0 text-[200px] overflow-x-scroll py-2 opacity-0" spellCheck={false} value="abcdefghijklmnopqrstuvwxyz" readOnly></input></div>
        </div>
    )
}