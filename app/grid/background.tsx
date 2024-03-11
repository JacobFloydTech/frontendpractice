'use client'
import { useEffect } from "react";

export default function Background() {
    useEffect(() => { 
        let angle = 0;
        const updateAngle = () => {
                document.body.style.setProperty('--angle', `${angle}deg`);
                angle += 0.5;
                requestAnimationFrame(updateAngle);
        };
        updateAngle();
        

    },[])
    return (
        <div >
            <div className=" w-full absolute background h-full -z-20" />
            <div className="w-full  h-screen fixed fadeBackground z-50"/>
            <div className="customGrid w-screen h-full p-0 m-0 mx-auto">
                {Array.from({ length: 600 }).map((_, index) => {
                      const col = index % 24;
    const row = Math.floor(index / 24);
           
                    return <div key={index} className="square text-white text-2xl" style={{animationDelay: `${(col*row/2)/20}s`}}></div>
                }
                )}
            </div>
        </div>

    );
}