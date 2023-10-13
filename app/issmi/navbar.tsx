"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./footer";


export default function Navbar() {
    const ref = useRef<any>();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="fixed h-auto w-full z-50">
            <div ref={ref} className="bg-white fixed h-auto z-50 w-full justify-between px-4 top-0 left-0 flex-row items-center flex  overflow-x-hidden ">
                <div className="w-auto h-auto items-center justify-center">
                    <Logo width={80} height={80} />
                </div>
                <div className="w-auto h-auto text-sm  px-2 space-x-7 hidden md:block">
                    <button>Auctions</button>
                    <button>Sell</button>
                    <button>Private Sales</button>
                    <button>About</button>
                    <button>Support</button>
                    <button className="border-black p-2 rounded-full border-2 hover:border-white hover:bg-black hover:text-white">Sign in</button>
                </div>
                <div className="md:hidden">
                    <HamburgerIcon setMenu={setShowMenu} />
                </div>

            </div>
            {
                showMenu && <div className="md:hidden w-2/5 py-4 text-2xl h-1/2 z-50 bg-gray-400 px-2 items-center justify-center space-x-7 flex-col flex -mt-4 float-right ml-auto rounded-xl bg-opacity-80">
                    <button className="text-left  w-full px-3 py-2">Auctions</button>
                    <button className="text-left  w-full  py-2">Sell</button>
                    <button className="text-left  w-full  py-2">Private Sales</button>
                    <button className="text-left  w-full  py-2">About</button>
                    <button className="text-left  w-full  py-2">Support</button>
                    <button className="border-black p-2 rounded-full border-2 hover:border-white hover:bg-black hover:text-white">Sign in</button>
                </div>
            }
        </div>

    )
}

function HamburgerIcon({ setMenu }: { setMenu: Function }) {
    return (
        <button onClick={() => { setMenu((e: boolean) => !e) }} className="w-12 h-12">
            <div className="h-1 w-3/4 rounded-xl bg-gray-400 my-2"></div>
            <div className="h-1 w-3/4 rounded-xl bg-gray-400 my-2"></div>
            <div className="h-1 w-3/4 rounded-xl bg-gray-400 my-2"></div>
        </button>
    )
}