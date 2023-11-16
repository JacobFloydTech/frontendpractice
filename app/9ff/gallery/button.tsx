'use client'
import { useState } from "react"

export default function InstagramSection() { 
    const [buttonHover, setButtonHover] = useState(false);
   
    return ( 
        <div className="flex flex-col justify-center items-center w-full wd:w-2/3 xl:w-1/2 text-center mx-4 space-y-4">
            <button className="md:pt-12 pt-6 md:pb-4" onMouseEnter={() =>{ setButtonHover(true)}} onMouseLeave={() => { setButtonHover(false)}}>
                <img className="h-12 md:h-32 lg:h-full" src={buttonHover ? "/9ff/gallery/instagramhover.png" : '/9ff/gallery/instagram.png'}/>
            </button>
            <a className="text-black uppercase hover:text-gray-600 font-bold  md:text-xl xl:text-4xl">More pictures on the 9ff instagram channel</a>
            <p className="py-2 text-gray-500 md:text-lg">Daily pictures of our car projects and insights into our production hall are shown on the 9FF Instagram channel.</p>
        </div>
    )
}