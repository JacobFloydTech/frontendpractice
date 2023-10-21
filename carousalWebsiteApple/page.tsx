"use client";

import { useState } from "react";
import Background from "./background";
import Navbar from "./navbar";
import Description from "./description";


export default function ApplePage() {

    let [index, setIndex] = useState(0);
    return (
        <div>
            <Navbar setIndex={setIndex} />
            <Background setIndex={setIndex} index={index} />
            <Description index={index} />
        </div>
    )
}

function TVA() {
    return (

        <svg width="600" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF6508" d="m 0 0 l 0 150 l 100 -150 m 0 0 l 0 300 l 100 0 l 0 -300 m 0 0 l 100 300 70 -150 l -100 -200"></path>
            <path fill="#B83D00" d='m 370 151 l -50 -100 l 20 -50 l 100 0' ></path>
            <path fill="#B83D00" d='m 380 150 l 70 100 l -20 50 l -120 0'></path>
            <path fill='#FF6508' d='m 380 150 l 100 150 l 100 0 l -130 -300'></path>
        </svg>
    )
}