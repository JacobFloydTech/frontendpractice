"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function BackgroundGrid() {
    useEffect(() => {
        let svg = document.getElementById('svg');
        let middleColor: number[] = [];
        let outerColor: number[] = [];

        middleColor = [100, 102, 255];
        outerColor = [255, 0, 0];


        let diffs = [Math.abs(middleColor[0] - outerColor[0]), Math.abs(middleColor[1] - outerColor[1]), Math.abs(middleColor[2] - outerColor[2])];

        function getColorCode(index: number, percentage: number) {
            return (middleColor[index] > outerColor[index] ? outerColor[index] : middleColor[index]) + (percentage * diffs[index] / 8)
        }
        if (!svg) {
            return;
        }

        const rectSize = 20 //pixels;
        const gridRows = svg.clientWidth / rectSize;
        const gridCols = svg.clientHeight / rectSize;
        let originPoint = [Math.floor(gridRows * 0.5), Math.floor(gridCols * 0.5)];
        for (var i = 0; i < gridCols; i++) {
            for (var j = 0; j < gridRows; j++) {
                let totalDisance = Math.abs(originPoint[0] - j) + Math.abs(originPoint[1] - i);
                let percent = totalDisance / (originPoint[0] * originPoint[1]) * 100;
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                gsap.set(rect, { opacity: 0, x: j * rectSize, y: i * rectSize, height: rectSize, width: rectSize, fill: `rgb(${getColorCode(0, percent)}, ${getColorCode(1, percent)}, ${getColorCode(2, percent)})`, border: 'black' })
                svg.appendChild(rect);
                gsap.to(rect, { opacity: 1 - percent / 12, duration: percent / 2, delay: percent / 6 })
                gsap.fromTo(rect, { scale: 0.8 }, {
                    scale: 1.2, duration: percent / 2, delay: percent / 6, onComplete: () => {
                        gsap.to(rect, { scale: 1, duration: percent / 6 })
                    }
                })
            }

        }
    }, [])


    return (
        <svg className='w-screen h-screen absolute top-0 left-0' id='svg'>
            <rect fill='#000000' width='100%' height='100%'></rect>
        </svg>
    )
}