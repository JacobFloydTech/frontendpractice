"use client";

import { useEffect, useState } from "react";

export default function MonsterCatMusicVideo() {
    let [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(document.body.clientWidth);
        window.addEventListener('resize', () => {
            setWidth(document.body.clientWidth);
        })
    }, [])
    return (
        <div className="flex flex-col mx-auto h-full w-3/4">
            <p className="text-white text-3xl my-4">MUSIC VIDEO</p>
            <iframe className={width < 1000 ? " mx-auto" : ""} width={width < 1000 ? "70%" : "100%"} height={width < 1000 ? "70%" : "100%"} src="https://www.youtube.com/embed/7nObtWENgxA" title="Conro - Therapy [Monstercat Lyric Video]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}