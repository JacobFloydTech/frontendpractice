"use client";

import { useEffect, useRef } from "react";
import { Logo } from "./footer";


export default function Navbar() {
    const ref = useRef<any>();

    return (
        <div ref={ref} className="bg-white fixed h-auto z-50 w-full justify-between px-4 top-0 left-0 flex-col md:flex-row items-center flex  overflow-hidden mb-4">
            <div className="w-auto h-auto items-center justify-center">
                <Logo width={80} height={80} />
            </div>
            <div className="w-auto h-auto text-sm  px-2 space-x-7">
                <button>Auctions</button>
                <button>Sell</button>
                <button>Private Sales</button>
                <button>About</button>
                <button>Support</button>
                <button className="border-black p-2 rounded-full border-2 hover:border-white hover:bg-black hover:text-white">Sign in</button>

            </div>
        </div>
    )
}


