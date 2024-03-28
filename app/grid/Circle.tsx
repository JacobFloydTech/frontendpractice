'use client'

import { useEffect } from "react";
import gsap from "gsap";


const centerX = 200;
const centerY = 200;
const numPoints = 12;
var lineLength = 20;
const angleIncrement = (2 * Math.PI) / numPoints;
        

export default function Circle() {

    useEffect(() => {
        setCircle();
        updateLines();
        let angle = -50;
        const updateAngle = () => {
                document.body.style.setProperty('--angle', `${angle}deg`);
                angle += 0.5;
                requestAnimationFrame(updateAngle);
        };
        updateAngle();
    }, [])

    const updateLines = () => {

        const parent = document.getElementById('lines');
        const children = Array.from(parent?.children ?? []) as SVGLineElement[];
        children.forEach((line) => { 
            const endPointX = parseFloat(line.getAttribute('x2') ?? '');
            const endPointY = parseFloat(line.getAttribute('y2') ?? '');
            const angle = parseFloat(line.getAttribute('angle') ?? '0');
            var lineLength = getDistance(endPointX, endPointY, line);
            const lengthIncrease = {value: 50}
            gsap.to(lengthIncrease, { 
                value: 150,
                onUpdate: () => { 
                    const pointX = centerX + 50 * Math.cos(angle);
                    const pointY = centerY + 50 * Math.sin(angle);
                    const newLength = lineLength + lengthIncrease.value;
                    const newX = pointX + newLength * Math.cos(angle);
                    const newY = pointY + newLength * Math.sin(angle);
                    line.setAttribute('x2', `${newX}`);
                    line.setAttribute('y2', `${newY}`)
                },
                delay: Math.random() * 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                yoyoEase: 'none'
            })
    
        })
    }



    const getDistance = (endPointX: number, endPOintY: number, line: SVGLineElement) => { 
        const startX = parseFloat(line.getAttribute('x2') ?? '');
        const startY = parseFloat(line.getAttribute('y2') ?? '');
        const xCalculation = (endPointX - startX) ** 2;
        const yCalculation = (endPOintY - startY) ** 2;
        return Math.sqrt(xCalculation+yCalculation)
    }

    const setCircle = () => { 

        const linesGroup = document.getElementById('lines');
        for (let i = 0; i < numPoints; i++) {
            const angle = i * angleIncrement;
            const pointX = centerX + 50 * Math.cos(angle);
            const pointY = centerY + 50 * Math.sin(angle);
            const endPointX = pointX + (lineLength + Math.random()*10) * Math.cos(angle);
            const endPointY = pointY + (lineLength + Math.random()*10) * Math.sin(angle);
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', "" + pointX);
            line.setAttribute('y1', "" + pointY);
            line.setAttribute('x2', "" + endPointX);
            line.setAttribute('y2', "" + endPointY);
            line.setAttribute('stroke-width', '20px')
            line.setAttribute('angle', `${angle}`)
            line.setAttribute('endPointX', `${endPointX}`);
            line.setAttribute('endPointY', `${endPointY}`)
            line.id = `${i}`

            if (angle > Math.PI) { 
                line.setAttribute("stroke","blue")
            } else { 
                line.setAttribute("stroke", "green")
            }
            linesGroup?.appendChild(line);
        }
    }
    return ( 
        <svg id='svgLogoBackground' height='100%' width='100%' viewBox="0 0 400 400" className="svgLogoBackground">

  <circle cx="200" cy="200" r="100" fill="transparent" stroke="black" />


  <g id="lines">
  
  </g>
</svg>
    )



}