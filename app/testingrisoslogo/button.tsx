'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Button({e}: { e: string}) { 
    const ref = useRef<any>();

    useEffect(() => { 
        let inner = (e == 'Product' || e == 'Internal');
        if (inner) { 
            animateInner();
        } else { animateOuter()}
    },[])
    function animateInner() {
        const main = document.getElementById('main')
 
        const el = ref.current;
        const product = e == 'Product';
        console.log("rendering...");
        gsap.fromTo(el, 
            {width: "100%"}, {
            translateX: `${(product ? 1 : -1)*50}`,
            width: "-=25%",
            onUpdate: () => {console.log("Done");},
            scrollTrigger: { 
                trigger: main,
                scrub: true,
                start: "+=100px",
                markers: true,
            }
         })
     }
    function animateOuter() { }
    return (
        <div ref={ref} className={`w-full flex bg-yellow-500 ${e == 'Product' ? "float-left" : "float-right"}`}>
            <a className="text-black text-2xl">{e}</a>

        </div>
    )
}