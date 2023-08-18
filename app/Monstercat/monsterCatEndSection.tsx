"use client";

import { useState, useEffect } from "react";

export default function MonsterCatEndSection() {

    let [hoverButton, setHoverButton] = useState(false);

    let [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(document.body.clientWidth)
        window.addEventListener('resize', () => {
            setWidth(document.body.clientWidth)
        })
    }, [])


    return (
        <div className="w-3/4 mx-auto flex flex-col my-8 ">
            <div className="h-1 w-full bg-white rounded-2xl my-4"></div>
            <div className={"grid grid-cols-3 text-white" + (width < 500 ? " text-lg" : " text-xl")}>
                <div className="flex flex-col items-start my-2 ">
                    <button className="py-1">About Monstercat</button>
                    <button className="py-1">Contact Us</button>
                    <button className="py-1">Careers</button>
                    <button className="py-1">News</button>
                    <button className="py-1">Press</button>
                </div>
                <div className="flex flex-col items-start ">
                    <button className="py-1">Terms of Service</button>
                    <button className="py-1">Privacy Policy</button>
                </div>
                <div>
                    <p className={"py-1" + (width < 500 ? " text-sm" : " text-md")}>Monstercat News</p>
                    <p className={"py-1" + (width < 500 ? " text-sm" : " text-md")}>Don't miss a thing, stay up to date<br></br>with the latest news from us</p>
                    <div className="mt-2 flex flex-col">
                        <div className="flex flex-row">
                            <input className="text-white bg-black border-0 w-full outline-none text-xl py-2" placeholder="Email"></input>
                            <button className="float-right ml-auto" onMouseOver={() => { setHoverButton(true) }} onMouseLeave={() => { setHoverButton(false) }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ background: (hoverButton ? "rgb(225,225,225,1)" : ""), fill: (hoverButton ? "rgb(0,0,0,1)" : "rgb(225,225,225,1)"), transform: "msFilter:" }}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg></button>
                        </div>
                        <div className="h-[1px] bg-gray-400 w-full rounded-3xl"></div>
                    </div>

                </div>
            </div>
            <div className="h-1 w-full bg-white rounded-2xl my-4"></div>
        </div>
    )
}