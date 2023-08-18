"use client";

import MonsterCatStreamingGrid from "./monsterCatStreamingGrid";
import MonsterCatTrackList from "./monsterCatTrackList";

export default function MonstercatStreaming() {
    return (
        <div id='stream' className="flex flex-col w-3/4 mx-auto pt-36 text-white z-50">
            <div className="text-3xl">STREAM IT YOUR WAY </div>
            <MonsterCatStreamingGrid />
            <div className="text-3xl mt-24">Track List</div>
            <MonsterCatTrackList />
        </div>
    )
}