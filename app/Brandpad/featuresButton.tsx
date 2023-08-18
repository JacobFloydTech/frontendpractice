"use client";

import { useState } from "react";


export default function FeaturesButton() {
    let [hover, setHover] = useState(false);
    return (
        <div className="w-full flex justify-center">
            <button onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"my-40 text-2xl border-2 py-2 px-4 rounded-3xl" + (hover ? " border-white bg-black text-white" : " border-black text-black")}>See all features</button>
        </div>
    )
}