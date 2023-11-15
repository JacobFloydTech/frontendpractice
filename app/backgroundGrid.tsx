"use client";

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';


type MousePosition = { 
    x: number;
    y: number
}

export default function BackgroundGrid() {

    useEffect(() => {
        let x = 0;
        let y =0;

        if (document.body.clientWidth >= 600) { 
            document.body.addEventListener('mousemove', ({clientX, clientY}) => {
                x = clientX;
                y = clientY;
            })
        }
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

        const rectSize = 32;//pixels;
        const gridRows = svg.clientWidth / rectSize;
        const gridCols = svg.clientHeight / rectSize;
        let originPoint = [Math.floor(gridRows * 0.5), Math.floor(gridCols * 0.5)];
        function getPercent(originPoint: Array<number>, i: number, j: number) { 
            let totalDisance = Math.abs(originPoint[0] - j) + Math.abs(originPoint[1] - i);
            return totalDisance / (originPoint[0] * originPoint[1]) * 100;
        }
        function animate() { 
 
            for (var i = 0; i < gridCols; i++) {
                for (var j = 0; j < gridRows; j++) {
                    let percent = getPercent(originPoint, i, j)
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.id = `${i}, ${j}`;
                    gsap.set(rect, { opacity: 0, x: j * rectSize, y: i * rectSize, height: rectSize, width: rectSize, fill: `rgb(${getColorCode(0, percent)}, ${getColorCode(1, percent)}, ${getColorCode(2, percent)})`, border: 'black' })
                    svg?.appendChild(rect);
                    gsap.to(rect, { opacity: 1 - percent / 12, duration:  Math.sqrt(percent), delay: Math.sqrt(percent) })
                    gsap.fromTo(rect, { scale: 0.8 }, {
                        scale: 1.2, duration: percent / 2, delay:percent/6, onComplete: () => {
                            gsap.to(rect, { scale: 1, duration:percent/6,  })
                        }
                    })
                }
    
            }
        }
        function getOriginFromMouse() { 
            return [Math.floor(x/rectSize), Math.floor(y/rectSize)];
        }
   
        function update() { 
            for (var i =0; i < gridCols; i++) { 
                for (var j = 0; j < gridRows; j++) { 
                    let percent = document.body.clientWidth >= 600 ? getPercent(getOriginFromMouse(), i, j) : getPercent(originPoint, i, j)
                    const rect = document.getElementById(`${i}, ${j}`);
                    gsap.to(rect, { scale: 0.99, duration: Math.sqrt(percent)/8, delay:  Math.sqrt(percent)/8, onComplete: () => { 
                        gsap.to(rect, { scale: 1.1, duration: Math.sqrt(percent)/8, delay:  Math.sqrt(percent)/8, onComplete: () => { 
                            gsap.to(rect, { scale: 1, duration: Math.sqrt(percent)/8, delay: Math.sqrt(percent)/8, })
                    }})
                }})
                }
            }
        }
        animate();
        setInterval(() => {
            update()
        },5000)

    }, [])


    return (
        <svg className='w-screen h-screen absolute top-0 left-0' id='svg'>
            <rect fill='#000000' width='100%' height='100%'></rect>
        </svg>
    )
}