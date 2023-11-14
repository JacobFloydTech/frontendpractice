'use client';
import type { Car } from "@/types";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
export default function CarComponent({ car }: { car: Car }) {
    const router = useRouter();
    let [hover, setHover] = useState(false);
    let overlay = useRef<any>();
    let parent = useRef<any>();
    function animate() {
        if (hover) {        
         
      
            gsap.to(parent.current, { 
                backgroundSize: '100%', duration: 0.45,
            })
            gsap.to(overlay.current, {
                opacity: 0, duration: 0.45, onComplete: () => {
                    setHover(false);
                }, 
            }, )
        } else { 
            gsap.to(parent.current, { 
                backgroundSize: '102%', duration: 0.45,
            onComplete: () => { setHover(true)}})
        }
 
    }
    return (
        <div ref={parent} onMouseOver={() => {setHover(true); animate()  }} onMouseLeave={() => { setHover(false); animate() }} className="border-2 relative w-full cursor-pointer" onClick={() => { router.push(`/9ff/supercars/${car.redirect}`) }} style={{ background: `url('${car.src}')`, backgroundSize: '100%', backgroundPosition: 'center center' }} >

            {hover &&
                <div ref={overlay} className="w-full h-full bg-opacity-60 bg-black bg-blend-multiply animateCarTitle flex justify-center items-center flex-col text-white absolute">

                    <p className="text-2xl pt-20 opacity-60">{car.subtitle}</p>
                </div>
            }
            <div className="w-full h-full absolute flex justify-center items-center text-white text-3xl">
                <p>{car.name}</p>
            </div>
        </div>
    )
}