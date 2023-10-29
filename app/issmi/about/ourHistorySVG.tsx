"use client"

import { constants } from "fs";
import { useEffect, useRef, useState } from "react"

type linePoints = {
    y1: number;
    y2: number
}

export default function NewHistorySVG() {
    const ref = useRef<any>();
    const [points, setPoints] = useState<Array<number>>([]);
    const [linePoints, setLinePoints] = useState<Array<linePoints>>([]);


    useEffect(() => {
        const elements = ['2017', '2019', '2020', '2021', '2022'].map((id: string) => {
            return document.getElementById(id);
        })

        getLocationPoints(elements);
        window.addEventListener('resize', () => getLocationPoints(elements))

    }, [])
    function getOffsetPoints() {
        setLinePoints([]);
        let children = document.getElementsByClassName('circle');
        const parent = document.getElementById('historyGridContainer')
        if (!children || !parent) { return; }
        const parentHeight = parent.clientHeight;

        for (var i = 0; i < children.length - 1; i++) {
            let curr = children[i];
            let next = children[i + 1];
            if (!curr || !next) { return; }
            const cy1 = parseInt(curr.getAttribute('cy') as string)
            const cy2 = parseInt(next.getAttribute('cy') as string)
            const { height } = curr.getBoundingClientRect();
            const percentageOffset = ((height / 2) / parentHeight) * 100;
            if (!cy1 || !cy2) { return }
            const newRecord: linePoints = {
                y1: cy1 + percentageOffset,
                y2: cy2 - percentageOffset,
            }
            setLinePoints((points) => { return [...points, newRecord] })
            console.log(newRecord);
        }
    }
    function getLocationPoints(elements: any) {
        const parent = document.getElementById('historyGridContainer')
        if (!parent) { return; }
        setPoints([]);
        const height = parent.clientHeight;
        elements.forEach((e: HTMLElement) => {
            const relativeheight = e.offsetTop + 40
            const percentage = relativeheight / height * 100;
            setPoints((points) => { return [...points, percentage] })
        })


    }


    useEffect(() => { getOffsetPoints(); }, [setPoints, points])

    return (
        <svg id='circleContainer' height='100%' width='100%' >
            {points?.map((p, i) => {
                return (

                    <circle className="circle" cx='50%' cy={`${p}%`} r='20' stroke-width={6} fill='none' stroke='black' />
                )
            })}
            {linePoints?.map((e, i) => {
                return (
                    <line x1='50%' x2='50%' y1={`${e.y1 + (i > 0 ? 0.5 : 0)}%`} y2={`${e.y2 + 0.8}%`} strokeWidth={3} stroke='black' />
                )
            })}

        </svg>
    )
}