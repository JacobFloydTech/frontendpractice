"use client";

import { useState } from "react";

export default function MonsterCatTrack(props: { title: string, artist: string, length: number, index: number, currentSong: number, setCurrentSong: Function, }) {
    let [time, setTime] = useState(convertSecondsToMinutes());

    function convertSecondsToMinutes() {
        const minutes = Math.floor(props.length / 60);
        let seconds = props.length - minutes * 60;
        return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    }

    function handleClick() {
        let audio = document.getElementById(props.title) as HTMLAudioElement
        audio.paused ? audio.play() : audio.pause();
        props.currentSong == props.index ? props.setCurrentSong(0) : props.setCurrentSong(props.index)

    }

    return (
        <div className="my-2 w-11/12 flex flex-row text-white ">
            <p className="text-2xl px-1 flex items-center ">{props.index}</p>
            <button onClick={() => { handleClick() }} className={props.index >= 10 ? "ml-2 mr-2" : "ml-6 mr-2"}>
                {props.index != props.currentSong ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: "msFilter;" }}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m9 17 8-5-8-5z"></path></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: "msFilter;" }}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 9h2v6h-2zM9 9h2v6H9z"></path></svg>}
            </button>
            <div className="flex flex-col text-white font-semibold">
                <p className="text-xl">{props.title}</p>
                <p className="text-md -pt-1 pb-1">{props.artist}</p>
            </div>
            <div className="flex-row flex space-x-4 items-center float-right ml-auto">
                <p className="text-2xl">{time}</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225,1)", transform: "msFilter;" }}><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg>
                </button>
            </div>
            <audio id={`${props.title}`} src={`${props.title}.mp3`}></audio>
        </div>
    )
}