"use client"

import { constants } from "fs";
import { relative } from "path";
import { useEffect, useRef, useState } from "react"

type linePoints = {
    y1: number;
    y2: number
}

export default function OurHistorySVG() {
    const ref = useRef<any>();
    const [points, setPoints] = useState<Array<number>>([]);


    useEffect(() => {
        const elements = ['2017', "mobile2019", '2019', '2020', '2021', "mobile2021", '2022'].map((id: string) => {
            return document.getElementById(id);
        })
        console.log(elements);
        getLocationPoints(elements);
        window.addEventListener('resize', () => getLocationPoints(elements))

    }, [])

    function getLocationPoints(elements: any) {
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
        console.log(points);




    }



    return (
        <svg id='circleContainer' height='100%' width='100%' >
            <line x1='50%' x2='50%' y1='2%' y2='98%' stroke='white' strokeWidth={4} />
            <line x1='50%' x2='25%' y1='98%' y2='95%' stroke='white' strokeWidth={4} />
            <line x1='50%' x2='75%' y1='98%' y2='95%' stroke='white' strokeWidth={4} />
            {points?.map((p, i) => {
                return (

                    <circle className="circle" cx='50%' cy={`${p}%`} r='12' stroke-width={4} fill='#183029' stroke='white' />
                )
            })}


        </svg>
    )
}