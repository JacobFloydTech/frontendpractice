"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import '/public/globals.css'

export default function ImageSlider({ src, maxCount }: { src: string, maxCount: number }) {
    const ref = useRef<any>();

    useEffect(() => { main() }, [])

    function main() {
        const children: HTMLElement[] = [].slice.call(ref.current.children as HTMLCollection);
        console.log(children);
        if (!children) { return }
        const width = children[0].clientWidth;


        children.forEach((e: any, i) => {
            e.style.width = width;
            console.log(i);
            e.style.marginLeft = `${(i * width)}px`
        })

        animate(children, width);
    }

    function animate(children: Array<HTMLElement>, width: number) {
        setTimeout(() => {
            animate(children, width);
        }, Math.random() * 3000 + 2000);
        children.forEach((e) => {
            const marginLeft = parseInt(e.style.marginLeft);

            if (marginLeft >= document.body.clientWidth) {
                gsap.set(e, { marginLeft: `-${width}px` })
            }
            gsap.to(e, { marginLeft: `+=${width}px`, duration: 2.2, ease: 'power2.inOut' })
        })

    }

    return (
        <div ref={ref} className="w-full h-48  my-12 relative ">
            {Array.from({ length: maxCount }).map((e, i) => {
                return (
                    <div className="h-full aspect-video px-2 absolute top-0" key={i} >
                        <img className="w-full h-full object-cover rounded-xl overflow-hidden" src={`${src}${i}.jpg`}></img>
                    </div>
                )
            })}

        </div>
    )

}