'use client'
import { useEffect, useRef } from "react";

export default function Background() {
    useEffect(() => { 
        setUpGrid();
        let angle = 0;
        const updateAngle = () => {
                document.body.style.setProperty('--rotateLogoBackground', `${angle}deg`);
                angle += 0.5;
                requestAnimationFrame(updateAngle);
        };
        updateAngle();
        
 
    }, [])
    const setUpGrid = () => { 
        const el = document.getElementById('customGrid');
        let {amount, rowCount} = calculateRowCount();
        if (!el) { return; }

   
        for (var x = 0; x < 300; x++) { 
            const squareElemeent = document.createElement('div');
            squareElemeent.classList.add('square');
            const row = x % rowCount;
            const col = Math.floor(x / rowCount);
            const delay = Math.sqrt(row *col/2)/3;
            squareElemeent.style.animationDelay = `${delay}s`;
            el.appendChild(squareElemeent);
        }
    }

    const calculateRowCount = () => { 
        const height = document.body.clientHeight;
        const width = document.body.clientWidth;
        const gridItemWidth = 75;
        const rowCount = Math.floor(height / gridItemWidth);
        const itemsPerRow = Math.floor(width / gridItemWidth);
        const amount = rowCount * itemsPerRow;
        return { amount, rowCount };
    }

    return (
        <div id='backgroundContainer'>
            <div className=" w-full absolute background h-full -z-20" />
            <div className="fadeBackground z-50"/>
            <div id='customGrid' className="customGrid overflow-hidden w-screen  p-0 m-0 mx-auto"/>
        
            
        </div>

    );
}