"use client"

import { useEffect, useRef, useState } from "react"

export default function NewHistorySVG() {
    const ref = useRef<any>();
    const [points, setPoints] = useState<Array<number>>([]);

    useEffect(() => {
        const elements = ['2017', '2019', '2020', '2021', '2022'].map((id: string) => {
            return document.getElementById(id);
        })

        getLocationPoints(elements);
        window.addEventListener('resize', () => getLocationPoints(elements))
    }, [])

    function getLocationPoints(elements: any) {
        const parent = document.getElementById('historyGridContainer')
        if (!parent) { return; }
        setPoints([]);
        const height = parent.clientHeight;
        elements.forEach((e: HTMLElement) => {
            const relativeheight = e.offsetTop + 40;
            const percentage = relativeheight / height * 100;
            setPoints((points) => { return [...points, percentage] })

        })
    }
    return (
        <svg ref={ref} height='100%' width='100%' >
            {points?.map((p) => {
                return (
                    <circle cx='50%' cy={`${p}%`} r='20' stroke-width={3} fill='none' stroke='black' />
                )
            })}
        </svg>
    )
}