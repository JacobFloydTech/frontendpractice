"use client";

import { useEffect, useState } from "react";
import MonsterCatArrow from "./monsterCatArrow";
import gsap from "gsap";
export default function MonsterCatSidebarExtended() {
    let [width, setWidth] = useState(0);

    let [music, setMusic] = useState(false);
    let [about, setAbout] = useState(false);
    let [events, setEvents] = useState(false);
    let [programming, setProgramming] = useState(false);

    function hideSidebar() {
        gsap.to("#extendedSidebar", {
            width: 0,
            right: -40,
            duration: 0.4,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(document.body.clientWidth);
        })
    }, [])
    return (
        <div id='extendedSidebar' className="border-black border-2 w-0 h-full bg-black fixed top-0 -right-40 pl-5 overflow-hidden">
            <div className="flex flex-row">
                <button className="flex flex-row items-center">
                    <img className="w-1/4" src={'/monstercat/monstercatlogo.jpeg'}></img>
                    <p className="text-white text-2xl">monstercat</p>
                </button>
                <button onClick={() => { hideSidebar() }} className="ml-4">
                    <svg width="25" height="25" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50" y1="150" x2="150" y2="50" stroke='white' stroke-width="10"></line>
                        <line x1="50" y1="50" x2="150" y2="150" stroke='white' stroke-width="10"></line>
                    </svg>
                </button>
            </div>
            <div className=" h-1/2 overflow-y-scroll flex flex-col text-white text-2xl items-start">
                <button className="my-2" onClick={() => { setMusic(music => !music) }}>
                    <div className="flex flex-row items-center">
                        <p className="mr-2">Music</p>
                        <MonsterCatArrow state={music} />
                    </div>
                </button>
                {music &&
                    <div className="flex flex-col text-white text-2xl items-start pl-4">
                        <button>Our Music</button>
                        <button>Instinct</button>
                        <button>Uncaged</button>
                        <button>Silk</button>
                    </div>
                }
                <button className="my-2">Artists</button>
                <button onClick={() => { setAbout(about => !about) }} className="my-2">
                    <div className="flex flex-row items-center">
                        <p className="mr-2">About</p>
                        <MonsterCatArrow state={about} />
                    </div>
                </button>
                {about &&
                    <div className="flex flex-col text-white text-2xl items-start pl-4">
                        <button>About Monstercat</button>
                        <button>Diversity and inclusion</button>
                        <button>Code of ethics</button>
                        <button>Environmental</button>
                        <button>Contact Us</button>
                    </div>
                }
                <button className="my-2">News</button>
                <button onClick={() => { setEvents(events => !events) }} className="my-2">
                    <div className="flex flex-row items-center">
                        <p className="mr-2">Events</p>
                        <MonsterCatArrow state={events} />
                    </div>
                </button>
                {events &&
                    <div className="flex flex-col text-white text-2xl items-start pl-4">
                        <button>Monstercat Events Experience</button>
                        <button>Upcoming Events</button>
                    </div>
                }
                <button onClick={() => { setProgramming(programming => !programming) }} className="my-2">
                    <div className="flex flex-row items-center">
                        <p className="mr-2">Programming</p>
                        <MonsterCatArrow state={programming} />
                    </div>
                </button>
                {programming &&
                    <div className="flex flex-col text-white text-2xl items-start pl-4">
                        <button>MonstercatTV</button>
                        <button>CALL OF THE WILD</button>
                        <button>SILK Showcase</button>
                        <button>Upcoming Shows</button>
                    </div>
                }
                <button className="my-2">Gold</button>
                <button className="my-2">Partners</button>
                <button className="my-2">Press</button>
                <button className="my-2">Player</button>
                <button className="my-2">Shop</button>
                <button className="my-2">Lost Civilization</button>
            </div>
            {width > 600 &&

                <div className="flex flex-row w-3/4 mt-4">
                    <button className="w-full py-1">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225)", transform: 'msFilter:' }}><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                        </svg>
                    </button>
                    <button className="w-full py-1">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225)", transform: 'msFilter:' }}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                    </button>
                    <button className="w-full py-1">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225)", transform: 'msFilter:' }} ><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                    </button>
                    <button className="w-full py-1">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225)", transform: 'msFilter:' }}><path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z"></path></svg>
                    </button>
                    <button className="w-full py-1">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225)", transform: 'msFilter:' }}><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
                    </button>
                    <button className="w-full py-1">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: "rgb(225,225,225)", transform: 'msFilter:' }}><path d="M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z"></path><path d="M17.678 3H4.947A1.952 1.952 0 0 0 3 4.957v12.844c0 1.083.874 1.957 1.947 1.957H15.72l-.505-1.759 1.217 1.131 1.149 1.064L19.625 22V4.957A1.952 1.952 0 0 0 17.678 3zM14.01 15.407s-.342-.408-.626-.771c1.244-.352 1.719-1.13 1.719-1.13-.39.256-.76.438-1.093.562a6.679 6.679 0 0 1-3.838.398 7.944 7.944 0 0 1-1.396-.41 5.402 5.402 0 0 1-.693-.321c-.029-.021-.057-.029-.085-.048a.117.117 0 0 1-.039-.03c-.171-.094-.266-.16-.266-.16s.456.76 1.663 1.121c-.285.36-.637.789-.637.789-2.099-.067-2.896-1.444-2.896-1.444 0-3.059 1.368-5.538 1.368-5.538 1.368-1.027 2.669-.998 2.669-.998l.095.114c-1.71.495-2.499 1.245-2.499 1.245s.21-.114.561-.275c1.016-.446 1.823-.57 2.156-.599.057-.009.105-.019.162-.019a7.756 7.756 0 0 1 4.778.893s-.751-.712-2.366-1.206l.133-.152s1.302-.029 2.669.998c0 0 1.368 2.479 1.368 5.538 0-.001-.807 1.376-2.907 1.443z"></path></svg>
                    </button>
                </div>
            }
            {width < 1000 ?
                <div className="flex flex-row mt-4 text-white text-md items-center">
                    <button className="border-white border-2 p-2 mr-4">Sign in</button>
                    <p className="mr-2">Or</p>
                    <button>Sign up</button>
                </div> :

                <div className="flex flex-row mt-4 text-white text-xl items-center">
                    <button className="border-white border-2 py-2 px-1 mr-4">Sign in</button>
                    <p className="mr-2">Or</p>
                    <button>Sign up</button>
                </div>}
        </div>
    )
}