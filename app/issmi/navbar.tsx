"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "./footer";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        const el = document.getElementById('navbar');
        if (!el) { return }
        gsap.set(el, { maxWidth: el.clientWidth })

    }, [])
    return (
        <div className="fixed h-auto w-full z-50">


            <div id='navbar' className="bg-gray-200 fixed h-auto z-50 w-full justify-between px-4 top-0 left-0 flex-row items-center flex  overflow-x-hidden  ">
                <div className="w-auto h-auto items-center justify-center">
                    <Logo width={80} height={80} />
                </div>
                <div className="w-auto h-auto text-sm  px-2 space-x-7 hidden  md:block">
                    {['auctions', 'sell', 'Private Sales', 'about', 'Support'].map((e: string, i: number) => {
                        return (
                            <Button content={e} key={i} />
                        )
                    })}
                    <button className="border-black p-2 rounded-full border-2 hover:border-white hover:bg-black hover:text-white">Sign in</button>
                </div>
                <div className="md:hidden">
                    <HamburgerIcon setMenu={setShowMenu} menu={showMenu} />
                </div>
            </div>
            {showMenu &&
                <MobileMenu />
            }

        </div>



    )
}
function Button({ content }: { content: string }) {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    const ref = useRef<any>();
    useEffect(() => {
        if (hover) {
            gsap.to(ref.current, { width: '100%', duration: 0.4, ease: 'sine.inOut' })
        } else {
            gsap.to(ref.current, { width: 0, duration: 0.4, ease: 'sine.inOut' })
        }
    }, [setHover, hover])
    return (
        <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className="inline-flex flex-col">
            <button onClick={() => { router.push(`/issmi/${content}`) }} className="text-[16px] px-1 capitalize">{content}</button>
            <div ref={ref} className="h-[2px] bg-black w-0 mx-auto"></div>
        </div>
    )
}



function MobileMenu() {
    return (
        <div id='mobileMenu' className="md:hidden w-full py-4 text-2xl h-1/2 z-50 bg-gray-400 px-2 items-center justify-center space-x-7 flex-col flex -mt-4 float-right ml-auto rounded-xl bg-opacity-80 mobileMenu">
            <button className="text-left  w-full px-3 py-2">Auctions</button>
            <button className="text-left  w-full  py-2">Sell</button>
            <button className="text-left  w-full  py-2">Private Sales</button>
            <button className="text-left  w-full  py-2">About</button>
            <button className="text-left  w-full  py-2">Support</button>
            <button className="border-black p-2 rounded-full border-2 hover:border-white hover:bg-black hover:text-white">Sign in</button>
        </div>
    )
}

function HamburgerIcon({ setMenu, menu }: { setMenu: Function, menu: boolean }) {
    function handleClick() {
        if (menu) {
            //Want to fade out elemenet
            gsap.to(document.getElementById('mobileMenu'), {
                translateX: 200, duration: 0.2, onComplete: () => {
                    setMenu((e: boolean) => !e)
                }
            })

        } else {
            setMenu((e: boolean) => !e)
        }
    }
    return (
        <button onClick={() => { handleClick() }} className="w-12 h-12">
            <div className="h-1 w-3/4 rounded-xl bg-gray-400 my-2"></div>
            <div className="h-1 w-3/4 rounded-xl bg-gray-400 my-2"></div>
            <div className="h-1 w-3/4 rounded-xl bg-gray-400 my-2"></div>
        </button>
    )
}