"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circle from "./Circle";
gsap.registerPlugin(ScrollTrigger);


export default function Portfolio() {
  const ref = useRef<any>();
  useEffect(() => { 
    setGsapScaleAnimation();
    setTextAnimation();
    animateText();
  }, [])
  const setGsapScaleAnimation = () => { 
    if (!ref.current) { return }
    const children = Array.from(ref.current.children ?? []) as HTMLElement[];
    children.forEach((e, i) => { 
      gsap.fromTo(e, {scale: 0.8},  {
        scale: 1, scrollTrigger: { 
          trigger: e,
          start: "-150% 30%",
          end: '-50% 5%',
      }})
    })
  }
  
  const setTextAnimation = () => { 
    if (!ref.current) { return; }
    const children = Array.from(ref.current.children) as HTMLElement[];
    children.forEach((e,i) => { 
      setTimeout(() => {
        e.classList.add('animate')
      }, i*400+200);
    })
  }
  const scrollInto = () => {
    const parent = document.getElementById('websiteContainer');
    if (!parent) return;
    parent.scrollIntoView({ behavior: "smooth" });
    Array.from(parent.children).forEach((e) => { 
      e.classList.add('animate')
    })

  }
  const animateText  =() => { 
    const el = document.getElementById('helloWorld')
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map((e) => e.toLowerCase())
    const originalString = el?.textContent;
    if (!el || !originalString || originalString != 'Hello World') { return }
    let interval = 0;
    const generate = setInterval(() => { 
      if (interval >= originalString.length) { 
        clearInterval(generate);
      }
      let s = originalString
        .split("")
        .splice(Math.floor(interval))
        .map((e, i) =>  e == " " ? e : letters[Math.floor(Math.random() * letters.length)])
        .join("");
      s = originalString.split("").splice(0, Math.floor(interval)).join("") + s;
      el.textContent = s;
      interval += 0.1;
    }, 50)





  }
  
  return (
    <div className="z-50 w-full flex flex-col pt-24 justify-center items-center">
      <div id='profileImageContainer' className=" h-28 w-28 md:w-32 md:h-32 relative backdrop-blur-xl">
     <img
        className="w-full h-full mb-12 profilePicture absolute z-50 rounded-full shadow-2xl"
        src="/picture.jpeg" />
        <Circle/>
        </div>
      <div ref={ ref} className="flex items-center pt-8 space-y-6 text-center justify-center flex-col">
        <p  onMouseOver={() => animateText()} id='helloWorld' className="p-2 bg-[rgba(137,137,137,0.1)] backdrop-blur-[1.5px] p-x4 rounded-3xl xl:text-8xl text-4xl md:text-5xl helloWorld introText font-bold text-white ">Hello World</p>
        <p className="p-2 bg-[rgba(137,137,137,0.1)] backdrop-blur-[1.5px] p-x4 rounded-3xl xl:text-4xl text-xl md:text-2xl introText font-bold text-white">I'm Jacob</p>
        <p className="p-2 bg-[rgba(137,137,137,0.1)] backdrop-blur-[1.5px] p-x4 rounded-3xl xl:text-4xl text-xl md:text-2xl introText font-bold text-white">
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
    <svg viewBox="0 0 200 200" width="100" className="bg-black rounded-full buttonBackdrop" height="100" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" x2="100" y1="25" y2="150" stroke="white" strokeWidth={4} />
      <line x1="50" x2="100" y1="100" y2="150" stroke="white" strokeWidth={4} />
      <line x1="150" x2="100" y1="100" y2="150" stroke="white" strokeWidth={4} />
    </svg>
  );
}
