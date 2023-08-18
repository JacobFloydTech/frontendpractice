"use client";

import { useState } from "react";
import MonsterCatTrack from "./monsterCatTrack";

type songData = {
    title: string,
    artist: string,
    length: number,
}
export default function MonsterCatTrackList() {

    let [currentSong, setCurrentSong] = useState(0);
    let songs: songData[] = [
        { title: "The Small Things", artist: "Conro", length: 215 },
        { title: "Without your Love", artist: "Conro", length: 189 },
        { title: "Therapy", artist: "Conro", length: 186 },
        { title: " Fighters", artist: "Conro", length: 226 },
        { title: " Way up", artist: "Conro & Nevve", length: 212 },
        { title: "Waiting", artist: "Conro", length: 187 },
        { title: "Dreaming", artist: "Conro", length: 177 },
        { title: "Tattoo", artist: "Conro", length: 209 },
        { title: "Out for the Night", artist: "Conro", length: 185 },
        { title: "Overdue", artist: "Conro", length: 168 },
        { title: "Say it", artist: "Conro", length: 184 },
        { title: "Here to stay", artist: "Conro", length: 164 }
    ]

    return (
        <div>
            {songs.map(({ title, artist, length }: songData, index: number) => {
                return <MonsterCatTrack title={title} artist={artist} length={length} index={index + 1} currentSong={currentSong} setCurrentSong={setCurrentSong} />
            })}
        </div>
    )
}