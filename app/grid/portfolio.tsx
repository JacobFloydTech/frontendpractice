"use client";

import { useEffect, useRef } from "react";

export default function Portfolio() {
  const ref = useRef<any>();
  useEffect(() => { 
    if (!ref.current) { return; }
    const children = Array.from(ref.current.children) as HTMLElement[];
    children.forEach((e,i) => { 
      setTimeout(() => {
        e.classList.add('animate')
      }, i*800+200);
    })
  },[])
  const scrollInto = () => {
    const parent = document.getElementById('websiteContainer');
    if (!parent) return;
    parent.scrollIntoView({ behavior: "smooth" });
    Array.from(parent.children).forEach((e) => { 
      e.classList.add('animate')
    })
    
  }
  
  return (
    <div className="z-50 w-full flex flex-col pt-24 justify-center items-center">
      <img
        className="w-32 h-32 mb-12 profilePicture  rounded-full shadow-2xl"
        src="/picture.jpeg" />
      <div ref={ ref} className="flex items-center space-y-4 flex-col">
        <p className="text-8xl helloWorld introText font-bold text-white ">Hello World</p>
        <p className="text-4xl introText font-bold text-white">I'm Jacob</p>
        <p className="text-4xl introText font-bold text-white">
          A CS Student interested in Web Development and AI
        </p>
    </div>
      <button onClickCapture={() => scrollInto()} className="py-12">
            <ExploreMoreButton/>
        </button>
    </div>
  );
}

function ExploreMoreButton() {
  return (
    <svg viewBox="0 0 200 200" width="100" className="bg-black rounded-full" style={{ filter: "drop-shadow(0px 0px 20px rgba(255,255,255,0.6))" }} height="100" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" x2="100" y1="25" y2="150" stroke="white" strokeWidth={4} />
      <line x1="50" x2="100" y1="100" y2="150" stroke="white" strokeWidth={4} />
      <line x1="150" x2="100" y1="100" y2="150" stroke="white" strokeWidth={4} />
    </svg>
  );
}
