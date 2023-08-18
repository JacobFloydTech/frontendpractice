"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function MonsterCatLogo() {
    let el = useRef<any>();
    let [smaller, setSmaller] = useState(false);
    useEffect(() => {
        let percent = 30 / document.body.clientWidth;

        window.addEventListener('resize', () => {
            gsap.set(el.current, { marginLeft: percent * document.body.clientWidth })
            if (document.body.clientWidth < 1000) {
                setSmaller(true);
            } else {
                setSmaller(false);
            }
        })
    }, [])
    return (
        <div>
            <div ref={el} className={"w-[50px] ml-[30px] fixed top-0 left-0 z-50" + (smaller ? " null" : " mt-4")}>
                <div className="w-full h-[50px]">
                    <button>
                        <img src={'/monstercat/monstercatlogo.jpeg'} className="w-[50px]"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}