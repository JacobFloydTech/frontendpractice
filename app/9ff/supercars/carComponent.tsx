'use client';
import type { Car } from "@/types";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
export default function CarComponent({ car }: { car: Car }) {
    const router = useRouter();
    let [hover, setHover] = useState(false);
    let ref = useRef<any>();
    function animateOut() {
        gsap.to(ref.current, {
            opacity: 0, duration: 0.45, onComplete: () => {
                setHover(false);
            }
        })
    }
    return (
        <div onMouseOver={() => { setHover(true) }} onMouseLeave={() => { animateOut() }} className="border-2 relative w-full cursor-pointer" onClick={() => { router.push(`/9ff/supercars/${car.redirect}`) }} style={{ background: `url('${car.src}')`, backgroundSize: 'cover', backgroundPosition: 'center center' }} >

            {hover &&
                <div ref={ref} className="w-full h-full bg-opacity-60 bg-black bg-blend-multiply animateCarTitle flex justify-center items-center flex-col text-white absolute">

                    <p className="text-2xl pt-20">{car.subtitle}</p>
                </div>
            }
            <div className="w-full h-full absolute flex justify-center items-center text-white text-3xl">
                <p>{car.name}</p>
            </div>
        </div>
    )
}