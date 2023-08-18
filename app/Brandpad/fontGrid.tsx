"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function FontGrid() {

    useEffect(() => {
        let animated = false;
        window.addEventListener('wheel', (e) => {

            let el = document.getElementById('textField')?.getBoundingClientRect().top - 200
            if (window.scrollY >= el) {
                console.log("animating");
                gsap.fromTo("#contentText", { opacity: 0 }, { opacity: 1, duration: 2 })
                animated = true;
            }


        })
    }, [])


    return (
        <div id='textField' className="grid grid-cols-4 w-full h-auto bg-black text-white mx-4 my-4">
            <p>Brandad Graphik</p>
            <p>Regular</p>
            <p>256px</p>
            <p>Download Font</p>
            <div id='contentText' className="col-span-4"><input className="bg-black w-full border-red-500 border-2 outline-0 text-[200px] overflow-x-scroll py-2 text-white" spellCheck={false} value="abcdefghijklmnopqrstuvwxyz"></input></div>
            <p>Brandad Graphik</p>
            <p>Light</p>
            <p>256px</p>
            <p>Download Font</p>
            <div className="col-span-4 textFields"><input className="bg-black w-full outline-0 text-[200px] overflow-x-scroll py-2 opacity-0" spellCheck={false} value="abcdefghijklmnopqrstuvwxyz"></input></div>
        </div>
    )
}