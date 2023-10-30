"use client"

import type { TeamMember } from "@/types";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Person({ member }: { member: TeamMember }) {
    const ref = useRef<any>();
    useEffect(() => {
        gsap.fromTo(ref.current, { opacity: 0, }, {
            opacity: 1, scrollTrigger: {
                trigger: ref.current,
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
            }
        })
    })
    return (
        <div ref={ref} className="flex flex-col text-left px-4  space-y-3">
            <div className="w-2/3 mx-auto md:w-full aspect-square  ">
                <img className="h-full w-full object-cover " src={`/issmi/teamMember/${member.src}`} />
            </div>
            <p className="md:text-3xl text-2xl font-bold">{member.name}</p>
            <p className="text-gray-600 text-xl md:text-2xl font-semibold">{member.position}</p>
            <p className="md:text-lg"><span className="font-bold">Current favroite Car:</span> {member.favouriteCar}</p>
            <p className="text-sm md:text-lg pt-4 md:leading-[30px]">{member.description}</p>
        </div>
    )
}