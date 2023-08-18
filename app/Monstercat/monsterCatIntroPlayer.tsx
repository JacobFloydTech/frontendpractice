"use client";

import { useEffect, useState } from "react";

export default function MonsterCatIntroPlayer() {
    let [hover, setHover] = useState(false);
    let [smallerSize, setSmallerSize] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (document.body.clientWidth < 1000) {
                setSmallerSize(true);
            } else {
                setSmallerSize(false);
            }
        })
    }, [])

    return (
        <div>
            {
                !smallerSize ?
                    <div className="w-3/4 h-4/6 absolute mb-12 flex flex-row top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        < div className="flex w-1/3 mx-4 absolute -rotate-90 bottom-0 h-full text-white italic" > <p className="text-blue-300 ">Instinct </p> <div className="mx-2 h-[1px] mt-3 w-4 bg-white"></div>  Released May 2020</div >
                        <img className="ml-4" src="/monstercat/background.jpeg"></img>
                        <div className="ml-8 w-full">
                            <div className=" h-3/4 justify-center flex flex-col">
                                <p className="text-3xl text-white mt-12">LEVEL DAYS</p>
                                <p className="text-3xl text-white">CONRO</p>
                            </div>
                            <div className="flex flex-row">
                                <button onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"p-2 w-50 text-3xl flex flex-row items-center" + (hover ? ' bg-white text-black' : ' bg-blue-400 text-white')}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: 'msFilter:' }}><path d="M7 6v12l10-6z"></path></svg>Listen Now</button>
                                <button className="p-2 w-50 border-white border-2 ml-2 text-white text-3xl items-center flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: 'msFilter:' }}><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg><p className="ml-2">Share</p></button>
                            </div>
                        </div>
                    </div > :
                    <div className="w-2/5  mt-12 absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img className="mx-auto" src="/monstercat/background.jpeg"></img>
                        <div className=" h-3/4 justify-center flex flex-col">
                            <p className="text-xl text-white mt-2">LEVEL DAYS</p>
                            <p className="text-xl text-white">CONRO</p>
                        </div>
                        <div className="flex flex-col bg-opacity-0 w-auto ">
                            <button onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"p-1 w-3/4 text-md flex flex-row items-center" + (hover ? ' bg-white text-black' : ' bg-blue-400 text-white')}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: 'msFilter:' }}><path d="M7 6v12l10-6z"></path></svg>Listen Now</button>
                            <button className="w-3/4 border-white border-2 text-white text-md items-center flex flex-row p-1 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: 'msFilter:' }}><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg><p className="ml-2">Share</p></button>
                        </div>
                    </div>
            }
        </div >


    )
}