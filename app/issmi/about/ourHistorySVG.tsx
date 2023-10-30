"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

type linePoints = {
    y1: number;
    y2: number
}

export default function OurHistorySVG() {
    const ref = useRef<any>();
    const [points, setPoints] = useState<Array<number>>([]);


    useEffect(() => {
        let elements = ['2017', "mobile2019", '2019', '2020', '2021', "mobile2021", '2022'].map((id: string) => {
            return document.getElementById(id);
        }).filter((e) => { return e !== null }) as HTMLElement[];

        getLocationPoints(elements);
        addAnimations(elements)
        window.addEventListener('resize', () => getLocationPoints(elements))

    }, [])
    function addAnimations(elements: HTMLElement[]) {
        elements.forEach((e) => {

            gsap.fromTo(e, { opacity: 0, translateY: '+=30' }, {
                opacity: 1, duration: 3, translateY: '-=30', scrollTrigger: {
                    trigger: e,
                    scrub: true,
                    start: 'top 70%',
                    end: 'top -5%'
                }
            })
        })
    }
    function getLocationPoints(elements: HTMLElement[]) {
        const parent = document.getElementById('historyGridContainer');
        if (!parent) { return; }
        setPoints([]);

        const height = parent.clientHeight;
        elements.forEach((e: HTMLElement) => {
            console.log(e.getBoundingClientRect());
            const relativeheight = e.offsetTop + 40
            const percentage = relativeheight / height * 100;

            setPoints((points) => { return [...points, percentage] })
        })
    }



    return (
        <svg id='circleContainer' height='100%' width='100%' >
            <line x1='50%' x2='50%' y1='2.5%' y2='98%' stroke='#4C665E' strokeWidth={4} />
            <line x1='50%' x2='25%' y1='98%' y2='95%' stroke='#4C665E' strokeWidth={4} />
            <line x1='50%' x2='75%' y1='98%' y2='95%' stroke='#4C665E' strokeWidth={4} />
            {points?.map((p, i) => {
                return (

                    <circle className="circle" cx='50%' cy={`${p}%`} r='12' stroke-width={4} fill='#183029' stroke='#4C665E' />
                )
            })}
        </svg>
    )
}