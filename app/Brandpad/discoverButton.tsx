"use client";

import { useState } from "react";


export default function DiscoverButton(props: { val: string }) {
    let [hover, setHover] = useState(false);


    return (
        <button className={"my-1" + (hover ? " " : " underline underline-offset-2")} onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            {props.val}
        </button>
    )
}