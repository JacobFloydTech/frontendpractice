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