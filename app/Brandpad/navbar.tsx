"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import DiscoverButton from "./discoverButton";

export default function Navbar() {
    let [currentHover, setCurrentHover] = useState("");

    let discoverButtons: string[] = ["Features", "Benefits", "Templates", "Examples", " Pricing", "Brand Management"]

    useEffect(() => {
        let el = document.getElementById('discoverAccessMenu');
        let parent = document.getElementById('hoverDiscover');
        let data = parent?.getBoundingClientRect();
        gsap.set(el, { x: data?.x })
    }, [currentHover, setCurrentHover])



    return (
        <div className="flex flex-col sticky top-0 w-full bg-white bg-opacity-10 backdrop-blur">
            <div className="w-full h-1/12 flex flex-row">
                <button className="p-2 w-auto h-auto">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0303 6.02345C10.509 6.02345 9.10123 6.47483 7.89026 7.21828C7.50047 3.17862 4.13245 0 0 0V3.91448C2.2403 3.91448 4.06433 5.74276 4.06433 7.98828V14.0117C4.06433 18.4155 7.64049 22 12.0341 22C16.4276 22 20.0038 18.4155 20.0038 14.0117C20.0038 9.60793 16.4238 6.02345 12.0303 6.02345ZM12.0303 18.0855C9.78997 18.0855 7.96594 16.2572 7.96594 14.0117C7.96594 11.7662 9.78997 9.93793 12.0303 9.93793C14.2706 9.93793 16.0946 11.7662 16.0946 14.0117C16.0946 16.2572 14.2706 18.0855 12.0303 18.0855Z" fill="black"></path>
                    </svg>
                </button>
                <div className="flex flex-row h-auto w-3/5 ml-auto px-2 text-lg mr-4">

                    <button onMouseLeave={() => { setCurrentHover("") }} onMouseOver={() => { setCurrentHover("discover") }} id='hoverDiscover' className={"mx-4 " + (currentHover == 'discover' ? "" : " underline underline-offset-2 ")}>Discover</button>
                    <button onMouseLeave={() => { setCurrentHover("") }} onMouseOver={() => { setCurrentHover("access") }} className={"mx-4" + (currentHover == 'access' ? "" : " underline underline-offset-2")}>Get Free Access</button>
                    <button onMouseLeave={() => { setCurrentHover("") }} onMouseOver={() => { setCurrentHover("login") }} className={"ml-auto" + (currentHover == 'login' ? "" : " underline underline-offset-2")}>Log in</button>
                </div>
            </div>
            {currentHover == 'discover' &&
                <div id='discoverAccessMenu' className="w-3/12  flex flex-col items-start">
                    {discoverButtons.map((e: string) => {
                        return (
                            <DiscoverButton val={e} />
                        )
                    })}
                </div>
            }

        </div>
    )
}