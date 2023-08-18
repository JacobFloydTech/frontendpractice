"use client";

import { useState } from "react"

export default function Header() {
    let [hover, setHover] = useState(false);

    return (
        <div className="w-full h-1/12 bg-black text-white text-center">
            <button onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"p-2" + (hover ? "" : " underline")}>
                Introducing our all-in-one brand management solution
            </button>
        </div>
    )
}