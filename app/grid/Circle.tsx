'use client'

import { useEffect } from "react";

export default function Circle() {

    useEffect(() => {
        // Calculate the coordinates of the center of the circle
        const centerX = 200;
        const centerY = 200;

        // Number of points around the circle
        const numPoints = 12;
        const lineLength = 20;

        // Calculate the angle between each point
        const angleIncrement = (2 * Math.PI) / numPoints;

        // Create lines extending outwards from each point on the circle
        const linesGroup = document.getElementById('lines');
        for (let i = 0; i < numPoints; i++) {
            // Calculate the angle for the current point
            const angle = i * angleIncrement;

            // Calculate the coordinates of the point on the circumference of the circle
            const pointX = centerX + 100 * Math.cos(angle);
            const pointY = centerY + 100 * Math.sin(angle);
            const endPointX = pointX + (lineLength + Math.random()*150) * Math.cos(angle);
            const endPointY = pointY + (lineLength + Math.random()*150) * Math.sin(angle);
            // Create a line extending from the center of the circle to the point
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', "" + pointX);
            line.setAttribute('y1', "" + pointY);
            line.setAttribute('x2', "" + endPointX);
            line.setAttribute('y2', "" + endPointY);
            line.setAttribute('stroke-width', '20px')
            if (angle > Math.PI) { 
                line.setAttribute("stroke","blue")
            } else { 
                line.setAttribute("stroke", "green")
            }
            linesGroup?.appendChild(line);
  
    
        }
        let angle = -50;
        const updateAngle = () => {
                document.body.style.setProperty('--angle', `${angle}deg`);
                angle += 0.5;
                requestAnimationFrame(updateAngle);
        };
        updateAngle();
    }, [])
    return ( 
        <svg id='svgLogoBackground' height='100%' width='100%' viewBox="0 0 400 400" className="svgLogoBackground">

  <circle cx="200" cy="200" r="100" fill="transparent" stroke="black" />


  <g id="lines">
  
  </g>
</svg>
    )



}