'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger);

export default function Skills() { 

    const mouseBackendListener = (mouse: MouseEvent) => {
        const el = document.getElementById('backend');
        
        if (!el) { return; }
        const { left, top} = el.getBoundingClientRect();
        const { clientX, clientY } = mouse;
        const offsetX = clientX - left 
        const offsetY = clientY - top 
        el.style.setProperty('--backendX', `${offsetX}px`);
        el.style.setProperty('--backendY', `${offsetY}px`);

    }

    const mouseFrontendListener = (mouse: MouseEvent) => {
        const el = document.getElementById('frontend');
        
        if (!el) { return; }
        const { left, top} = el.getBoundingClientRect();
        const { clientX, clientY } = mouse;
        const offsetX = clientX - left 
        const offsetY = clientY - top 
        el.style.setProperty('--frontendX', `${offsetX}px`);
        el.style.setProperty('--frontendY', `${offsetY}px`);

    }

    useEffect(() => { 
        ['backend', 'frontend'].map(e => document.getElementById(e)).forEach((e) => { 
            if (!e) { return }
            gsap.fromTo(e, { 
                opacity: 0,
                ease: 'sine'
            }, {
                opacity: 1, scrollTrigger: { 
                    trigger: e,
                    scrub: true,
                    start: "-30% 50%",
                    end: '10% 50%'
            }})
        })
    })

    return ( 
        <div className="grid md:grid-cols-2 grid-cols-1  items-center justify-center gap-4 w-full 2xl:w-2/3 py-24 mx-auto text-white">
            <div id='backend' onMouseEnter={() => document.addEventListener('mousemove', mouseBackendListener)} onMouseLeave={() => document.removeEventListener('mousemove', mouseBackendListener)} className="text-center  border-2 border-white backendSkillsContainer overflow-visible  p-4 rounded-2xl  mx-auto relative w-[90%] md:w-3/4 lg:w-1/2 xl:w-2/3">   
                <GrainFilter/>
                <h1 className="font-bold text-3xl pb-2">Backend skills</h1>
                <ul className="bg-inherit mx-auto text-left w-2/3 p-0 md:pl-8 xl:pl-14  flex flex-col space-y-4 text-sm md:text-lg xl:text-[21px]">
                    <li className="flex items-center space-x-2">
                        <img className="w-8 aspect-square" src="/profileLogos/firebaseLogo.png" />
                        <p className=" mix-blend-difference font-semibold ">Firebase</p>
                    </li>
                    <li className="flex items-center  space-x-2">
                        <img className="w-8 aspect-square" src="/profileLogos/supabaselogo.png" />
                        <p className="mix-blend-difference font-semibold ">Supabase</p></li>
                    <li className="flex items-center  space-x-2">
                        <img className="w-8 aspect-square" src="/profileLogos/postgresLogo.png"/>
                        <p className="mix-blend-difference font-semibold ">MySQL/Postgres</p>
                    </li>
                    <li  className="flex items-center  space-x-2">
                        <img className="w-8 aspect-square" src="/profileLogos/honoLogo.png"/>
                        <p className="mix-blend-difference font-semibold ">Express & Hono</p>
                    </li>
                    <li className="flex items-center  space-x-2">
                        <img className="w-8 aspect-square object-contain" src="/profileLogos/awsLogo.png"/>
                        <p className="mix-blend-difference font-semibold ">AWS - Lambda, S3, & EC2 </p>
                    </li>
                    <li className="flex items-center  space-x-2">
                        <AuthLogo/>
                        <p className="mix-blend-difference font-semibold ">Authentication</p></li>
                    <li className="flex items-center  space-x-2">
              <img className="w-8 aspect-square object-contain" src="/profileLogos/mongoDBLogo.png"/>
                        <p className="mix-blend-difference font-semibold ">MongoDB</p></li>
                    </ul>
    
            </div>
            <div id="frontend" onMouseEnter={() => document.addEventListener('mousemove', mouseFrontendListener
            )} onMouseLeave={() => document.removeEventListener('mousemove', mouseFrontendListener)} className="text-center frontendSkillsContainer mx-auto  w-[90%] md:w-3/4 lg:w-1/2 xl:w-2/3 border-2 p-4 h-full rounded-2xl flex flex-col 2xl:w-2/3 relative">
                <h1 className="font-bold text-3xl">Frontend skills</h1>
                <GrainFilter/>
                <ul className=" w-2/3 mx-auto md:pl-8 xl:pl-14 flex flex-col space-y-2 text-xl justify-around h-full">
                    <li className="flex space-x-2 text-center items-center">
                        <ReactLogo />
                        <p className="mix-blend-difference font-semibold" >React</p>
                    </li>
                    <li className="flex space-x-2 text-center items-center">
                        <NextJSLogo />
                        <p className="mix-blend-difference font-semibold" >Next JS</p>
                    </li>
                    <li className="flex space-x-2 text-center items-center">
                        <img className="w-8 aspect-square" src="/profileLogos/svelteLogo.png" />
                        <p className="mix-blend-difference font-semibold" >Svelte/SvelteKit</p>
                    </li>
                    <li className="flex space-x-2 text-center items-center">
                        <img className="w-8 aspect-square" src="/profileLogos/solidLogo.png" />
                        <p className="mix-blend-difference font-semibold" >Solid JS</p>
                    </li>
                     <li className="flex space-x-2 text-center items-center">
                        <img className="w-8 aspect-square object-contain" src="/profileLogos/tailwindLogo.png" />
                        <p className="mix-blend-difference font-semibold" >Tailwind CSS</p>
                    </li>
                    <li className="flex space-x-2 text-center items-center">
                        <img className="w-8 aspect-square object-contain" src="/profileLogos/cssLogo.png"/>
                        <p className="mix-blend-difference font-semibold" >CSS/Sass</p>
                    </li>
                    <li className="flex space-x-2 text-center items-center">
                        <GSAPLogo />
                        <p className="mix-blend-difference font-semibold" >GSAP</p>
                    </li>
                    <li className="flex space-x-2 text-center items-center">
                        <img className='w-8 aspect-square object-contain' src="/profileLogos/threejsLogo.png" />
                        <p className="mix-blend-difference font-semibold" >Three JS</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export function GrainFilter() { 
    return ( 
        <svg className="w-full h-full absolute top-0 left-0 -z-50">
            <defs>
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency={1}/>
                </filter>
            </defs>
            <rect x='0' y='0' height='100%' opacity={0.2} width='100%' filter="url(#noiseFilter)"/>
        </svg>
    )
}

function AuthLogo() { 
    return (
        <svg fill="#000000" height="40" width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 330 330">
<g id="XMLID_509_">
	<path id="XMLID_510_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85
		S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15
		s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25
		C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"/>
</g>
</svg>
    )
}

function ReactLogo() { 
    return ( <svg width="34px" height="34px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle cx="0" cy="0" r="2" fill="#139eca"></circle><g stroke="#139eca" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>)
}

function NextJSLogo() { 
    return ( 

<svg height="32px" viewBox=".5 -.2 1023 1024.1" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"/><path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"/></svg>
    )
}

function GSAPLogo() { 
    return ( 

<svg height="32" viewBox="-2.138 -2.29 314.9 359.304"  xmlns="http://www.w3.org/2000/svg"><path d="m48.173 155.568c-10.389 4.887-37.886 26.886-43.182 33.404-5.5 6.518-7.129-3.666-1.426-20.572 4.48-13.647 15.888-32.183 35.034-48.07 11.202-9.166 35.849-22.405 50.921-30.146 3.056-1.63 42.571-18.332 77.809-26.683 3.056-.815-3.666 5.092-4.685 8.351-5.296 15.48-111.01 81.882-111.01 81.882zm148.894 186.78c1.833 10.999.204 11.814-11.202 13.24-11.407 1.426-19.758-2.852-22.813-5.703-3.056-2.853-3.666-9.166-.611-14.869 1.834-3.667 3.667-4.889 4.686-9.37 1.018-4.277 1.833-5.296 2.647-6.925.814-1.427 1.019-2.853 1.222-12.833.204-9.98 0-28.72 1.019-36.663 1.019-8.147 36.257 3.666 36.257 3.666s-8.352 20.776-10.592 25.868c-2.241 5.093-2.037 14.869-2.037 16.906s-.814 6.11-1.426 6.314c-.611.203 2.037 5.499.814 8.555-.815 2.852 1.833 10.185 2.036 11.814zm13.444-311.437c-1.223-7.74 0-23.018 1.629-25.461 5.093-6.926 31.979-7.74 37.683.407 2.444 3.666 2.24 12.221 1.833 17.721-.407 5.499-1.833 17.313-2.037 21.184-.203 2.852-29.738 7.332-36.256-.408-1.834-2.036-2.852-13.443-2.852-13.443zm59.884 291.679c12.425 8.963 21.998 10.592 28.312 13.851 6.314 3.26 4.685 9.574-5.907 11.407-8.555 1.629-21.998-1.63-30.96-1.63s-28.924 1.019-34.22-2.647c-6.11-4.277-3.463-12.222-3.463-12.222 1.63-4.48 5.703-14.462 4.481-22.609s-2.852-12.628-5.907-20.165c-3.055-7.536-5.295-26.071-2.443-27.09s2.036 0 5.703.814c3.666.814 7.74 2.037 15.684 2.037s16.702-1.223 19.758-1.833c3.055-.611 5.499-1.223 4.48 5.092-1.018 6.314-4.073 18.128-4.277 27.294-.203 9.166-.203 19.758.408 21.591.61 1.833 5.092 3.87 8.351 6.11z" fill="#010101"/><path d="m226.806 51.28c-22.405 19.351-65.791 24.646-130.155 49.496-16.499 6.314-60.495 25.257-71.087 45.015 35.645-20.572 48.885 7.74 51.736 36.867 2.647 27.294 16.295 41.553 51.329 40.737 36.053-.814 47.052 20.165 57.032 44.812 19.35-94.308 50.311-112.639 70.271-128.73 42.368-34.424-9.776-95.123-29.126-88.197z" fill="#8ac640"/><path d="m226.806 51.28c-53.773 18.739-106.936 23.424-169.467 61.921-14.869 9.166-46.237 29.941-52.348 69.661 22.812-25.258 75.567-57.032 140.136-77.197 32.59-10.185 56.422-16.906 85.345-28.109-2.036-13.037-2.036-18.129-3.666-26.276z" fill="#8ac640"/><path d="m295.448 162.9s-3.87 13.24-11.61 17.518c0 0-5.703 2.037-17.109-4.277-3.259-1.833-5.703-8.147-5.5-10.185.204-4.889 3.259-7.129 3.259-7.129s3.26-5.5 7.129-5.296c3.871.203 10.389.814 12.426-1.019 1.832-2.037 11.813 3.666 11.405 10.388zm-83.104-128.119s-.814 10.389-2.24 16.906c-.204 1.223-6.314 1.833-10.796 3.667 8.555 24.442 60.088 24.238 66.81 12.221-3.259-2.24-9.777-5.703-12.832-6.925-3.056-1.223-2.852-1.019-3.056-6.722-.203-5.704-.611-16.295-1.019-19.147-.407-2.852-31.979-2.852-36.867 0z" fill="#010101"/><path d="m214.381 34.781s0 5.907-.611 11.61c-.203 2.648-.407 4.277-.814 6.314-.204 1.223 6.925 6.11 8.962 16.906 9.777 21.794 32.387 10.999 41.756.611-3.259-2.241-8.555-5.296-14.665-7.74-3.056-1.223-1.63-3.87-1.833-9.573-.204-5.703-1.019-14.055-1.426-17.11-.409-3.055-26.48-3.87-31.369-1.018z" fill="#f0efef"/><g fill="#010101"><path d="m212.344 34.781s-.204 3.667-.814 7.944c2.647 2.647 6.11 6.314 8.759 8.555 1.833 1.63 6.313 1.426 10.388 1.426 3.666 0 6.925.407 8.351-.407 3.26-1.63 7.944-5.703 10.592-8.759-.203-3.666-.407-7.129-.61-8.759-.206-2.852-31.778-2.852-36.666 0z"/><path d="m230.88 50.261c-2.445 0-5.297-.203-7.537-.611-1.019-.203-2.037-.814-2.852-1.222-1.426-1.019-2.852-2.24-4.48-3.463-3.26-2.444-3.463-3.87-3.463-4.48 1.426-12.833-.408-23.628-.408-23.628s-1.426-5.5 6.314-6.926 12.425-1.629 12.425-1.629 4.889 0 12.425 1.629c7.74 1.426 6.314 6.926 6.314 6.926s-1.833 10.795-.407 23.628c0 .61-.203 2.036-3.463 4.48-2.852 2.037-5.092 4.277-7.332 4.685-2.241.408-5.093.611-7.536.611z"/><path d="m230.88 3.006c-13.443 0-16.092 3.666-19.962 7.74-.814 1.018-.204 7.129 1.223 20.165h1.833s-1.223-3.667-1.019-7.944 1.019-4.073.407-5.092c-.814-1.223-2.444-3.26 1.223-5.296 3.666-2.037 9.369 1.629 16.295 1.833 6.925-.204 12.832-3.87 16.498-1.833 3.666 2.036 2.037 4.073 1.223 5.296-.815 1.222.203.814.407 5.092.203 4.277-1.019 7.944-1.019 7.944h1.833c1.222-13.036 2.037-18.739 1.426-19.758-3.463-4.481-6.925-7.944-20.368-8.147zm64.568 160.505s-3.87 12.425-11.406 16.702c-1.63-.814-1.426-2.036-2.852-3.87-.408-.61-1.834-1.019-2.444-1.629-.611-.611-.407-1.63-1.426-2.444-.815-.815-1.426-.204-2.241-.815-.814-.814-1.019-1.833-1.629-2.443-.408-.408-2.037-.611-2.444-1.019-1.019-1.019-9.98-2.852-9.573-4.889.814-3.056 2.444-5.296 2.444-5.296s3.87-5.703 7.739-5.5c3.87.204 7.537 1.019 9.574-.814 2.241-2.038 14.87 5.499 14.258 12.017z"/><path d="m268.969 73.482s12.832-3.056 21.591 5.296c8.759 8.555 8.147 19.146 5.5 25.664 2.24 2.648 6.314 9.98 3.259 18.739 13.443 11.406 7.536 28.924-4.481 40.534 0 0-2.852-10.592-14.258-11.203.407-4.073-10.592-7.333-5.5-17.925-7.74-1.833-7.536-7.129-8.758-13.646-1.019-6.519 2.647-47.459 2.647-47.459z"/></g><path d="m264.284 79.185s14.869-7.536 23.628 1.019c8.758 8.555 6.313 17.924 3.666 24.442 2.24 2.647 7.536 10.185 4.277 19.146-.611 2.037-5.092 2.037-8.352 7.333 8.147-4.686 13.24-3.463 15.073 2.443 2.852 9.166-3.463 20.165-8.962 26.276 0-.204-.204-.408-.204-.611-.814 3.056-1.833 8.962-7.943 15.48-3.056 3.259-5.5 2.852-8.963 2.037-4.073-1.019-5.499-2.853-11.202-5.907-3.259-1.833-1.426-4.074-1.426-5.907 0-.407.407-1.019 1.019-1.833.407-1.019 1.629-2.647 3.462-4.481 0 0 2.648-3.666 6.519-3.463 3.87.204 7.943-.61 8.962-1.629 0-7.129-8.147-7.333-5.296-19.554.204-.611 1.223-1.63 4.481-2.037-4.889-1.019-7.129-1.223-10.592-4.481-2.444-2.24-4.277-5.092-4.889-8.758-1.221-6.314-3.258-39.515-3.258-39.515z" fill="#f0efef"/><path d="m221.306 66.353c-1.222-1.63-7.536-9.777-19.554-13.036-3.463-1.019-5.703 1.833-9.165 3.87-1.019-.611-5.5-2.648-7.944-1.223s-4.073 2.852-6.518 3.87c-1.223-.611-4.481-.611-7.129.407-2.648.815-6.722 2.648-10.592 7.944-2.444 8.759 43.181 2.24 43.181 2.24z" fill="#010101"/><path d="m221.714 66.353c-6.519-2.241-5.5-9.777-19.962-10.999-2.852-.204-4.685 2.036-6.722 3.462 1.019 1.019 2.037 2.648 2.648 4.277-1.833-2.036-5.092-4.685-8.352-5.296-3.055-.61-5.092 1.63-8.351 3.26.61.61 1.222 1.629 2.036 2.852-2.852-1.833-4.888-2.444-8.758-1.019-2.648.814-7.74 3.055-11.61 8.555-2.444 8.759 41.145-1.019 41.145-1.019z" fill="#8ac640"/><path d="m260.007 69.612s0-2.241-.204-4.277c0-.407-1.629-1.426-1.629-1.833l-.407-.408s3.259-1.833 5.703-.814c2.647.814 4.073 4.277 4.073 4.277 4.685-1.629 5.092.204 7.333 2.648 4.889-1.019 5.499.814 8.555 5.296 0 0-3.666-.611-10.795.61-6.926 1.018-12.629-5.703-12.629-5.499z" fill="#010101"/><path d="m259.192 68.593s1.222-1.019.814-1.223c2.24-1.222 5.296-2.647 6.722 1.223 4.685-1.63 5.296.611 7.536 3.056 5.703-2.648 6.11.61 6.518 2.036-1.833 0-4.48.204-8.147.611-6.925 1.019-13.647-5.907-13.443-5.703z" fill="#8ac640"/><path d="m189.939 63.501s11.61 4.073 21.387 3.462c9.777-.814 26.479-1.629 35.441 3.667 0 0 9.166-3.26 17.721-1.019 8.556 2.24 24.239 16.906 19.555 32.386-.408 1.019-3.056 2.648-6.111 3.667 0 0 1.63 6.925-1.222 12.628-2.852 5.5-9.166 16.092-9.37 30.757-.203 2.444-.61 7.536-1.018 9.98-15.888-.61-40.33-6.518-64.365-6.11.203-2.647.407-4.277.611-6.925h.61c-1.222-6.722-1.629-10.185-2.852-15.277-7.74-4.888-15.888-10.591-22.812-21.387-6.722-10.796 12.425-45.829 12.425-45.829zm78.623 109.991s12.629 45.219-2.24 64.162c0 0 2.24 8.758-2.852 18.128-.815 4.073-1.834 7.74-2.444 11.813-2.648 16.906-7.13 24.035-8.352 51.125l-12.222-.203s-1.426-19.554-5.703-29.942c-2.443-5.906-12.018-13.851-11.609-21.794.407-6.111 1.629-11.203 12.018-19.351.814-11.813-11-23.017-9.166-67.013z" fill="#010101"/><path d="m264.896 171.658c3.259 20.776 10.795 51.533-2.852 66.605a30.712 30.712 0 0 1 .203 11.61c-.407 2.444-1.222 5.092-2.24 7.943-2.037 4.889-2.852 12.018-3.463 16.295-2.648 16.906-2.648 17.722-3.87 44.812l-12.222-.204s-1.426-19.554-5.703-29.941c-2.443-5.907-7.536-10.999-7.943-18.943-.407-6.11 3.87-18.331 14.055-17.924-.611-24.646-12.018-19.758-15.073-71.087zm-74.957-108.157s4.481 1.426 9.369 1.833c4.889.407 10.185 0 14.869-.204 9.777-.814 23.628-1.833 32.794 3.463 0 0 5.092-1.63 10.592-1.223 2.444.204 4.889 2.241 7.74 3.056 8.962 2.24 17.517 17.109 13.646 30.553-.407 1.019-3.259 0-6.518 1.019.61 2.852 1.019 9.37-2.241 16.295-3.462 6.926-7.943 15.888-7.129 32.998-21.387-1.019-30.96-2.444-52.144-3.463-1.833-7.537-3.056-15.073-3.259-18.943 2.852-1.426 4.48-2.647 6.722-5.092-6.11 1.019-8.555.611-12.222-1.426-3.666-2.037-10.184-8.555-13.443-12.832-.407-.408-2.647 6.313-7.739 6.518-1.834-2.648 5.906-10.185 4.48-13.036-5.091-10.389 4.483-39.516 4.483-39.516z" fill="#f0efef"/><path d="m266.524 154.752s.407 7.333.407 9.166c0 2.037 1.63 8.147 1.833 10.999-2.24 3.87-12.017 12.629-29.738 15.888-17.517 3.666-40.737-23.831-40.737-23.831.611-2.648 2.648-10.389 4.074-14.462.204-.407.611-1.426.611-1.833 1.834-2.648 63.55 4.073 63.55 4.073z" fill="#010101"/><path d="m262.044 155.364c0 5.092.814 8.759 1.426 12.018 1.018 5.907 2.647 9.777 2.647 13.647 0 11.813-15.48 9.776-28.517 10.184-17.517 3.667-32.386-23.831-32.386-23.831 1.222-4.685 2.037-9.98 3.87-14.462.203-2.444.611-5.499.814-6.925 24.85 0 42.367 1.426 52.552 2.443.408 2.241.001 6.111-.406 6.926z" fill="#f0efef"/><path d="m242.489 181.639s-10.795-24.035-43.182-16.905c-7.739 21.794-18.128 46.848-11.406 73.938-6.722 9.166-14.462 14.259-14.462 31.164 0 16.906.815 19.758.815 19.758l23.831 1.223s7.74-9.98 10.795-20.776c.815-3.056 1.63-8.555 1.019-14.869.814-1.222 4.277-4.073 4.685-9.573 0 0 11.61-6.11 18.332-20.979 6.315-13.446 4.685-25.056 9.573-42.981z" fill="#010101"/><path d="m242.489 181.639c-.61-2.24-8.758-24.238-38.904-17.721-17.72 47.256-11.202 66.81-8.555 75.364-12.018 15.276-17.517 18.535-15.072 49.496h15.888c7.332-11.61 8.962-15.888 9.369-31.164 0-.611-2.24 1.222-3.87 3.259 1.223-6.314 4.685-7.536 7.333-11.406 1.222-1.63 2.24-4.074 2.24-7.333 14.258-9.573 19.554-21.591 22.609-34.016 2.445-8.554 5.296-22.609 8.962-26.479z" fill="#f0efef"/><g fill="#010101"><path d="m192.179 148.846s5.5.203 10.389 1.833c4.685 1.629 4.685 2.647 6.518 4.685s6.314 5.092 5.5 8.147c-.408 1.63-1.426 2.037-2.852 3.463-.611.611-5.093 5.499-6.111 6.11-.611.407-1.426 1.019-2.037 1.426l-3.055 2.037c-2.037 1.019-3.463 1.63-5.703 1.426 0 0-5.092-.204-8.352-3.666 0 0-.407-1.63.408-2.444 0 0-4.278-3.667-5.5-6.111-1.223-2.443-1.223-5.906-.407-7.739.407-1.835 8.35-6.927 11.202-9.167zm5.093 198.187-.611 5.093s-1.833 2.24-15.48 2.037c-13.851-.204-17.517-4.481-18.739-6.722l-.814-5.296s2.648-3.87 3.259-3.87c4.481.407 19.758 6.518 30.35 8.147 1.016 0 1.219.407 2.035.611zm29.534-10.388c0 2.24-.204 2.24-.204 4.481 2.444 1.833 8.556 2.852 20.165 2.647 16.906-.407 32.59 5.093 51.736 1.833l.204-3.666-1.833-.203-67.828-5.5z"/><path d="m241.675 343.774h5.092c11-.407 21.388 2.037 32.59 2.648 5.907-.204 13.24-1.63 12.629-5.907l-57.847-4.889c-3.463 3.87-.816 7.129 7.536 8.148zm-66.402-85.752c1.833 1.222 14.258 8.555 34.423 7.536-.408 3.87-.204 11.407-9.166 24.646-4.481 6.518-8.352 17.925-9.166 32.387.204 3.259 2.037 6.11-.407 10.388.814 2.647 4.073 7.943 5.703 11.202 1.629 3.26 2.444 6.926-8.352 7.13-10.999.203-28.72-1.019-26.275-9.573 1.223-4.481 4.685-9.166 5.093-11 .407-1.833.407-7.332 3.869-10.999 3.056-10.184 2.037-19.961 1.427-29.127-1.019-9.574-1.223-24.85 2.851-32.59zm18.943-166.005c14.462-19.351 2.24-34.83-20.979-30.146-9.37 1.833-18.739 8.352-19.351 20.165-3.055.407-9.98.814-13.443 13.443-2.647 9.777-4.073 11.61-8.759 16.498-3.055 3.463.204 10.592 2.444 15.685 7.537 17.517 30.757 19.146 46.441 32.386 5.296-1.426 10.795-7.332 12.425-11.202-13.24-15.685-10.389-21.795-15.685-29.942 5.704-2.038 18.74-9.981 16.907-26.887z"/></g><path d="m191.364 90.795c.814-1.223 2.24-3.87 2.852-4.889.204-.204 2.444 3.666 2.648 3.463 5.499-8.963 6.925-21.999.61-23.221-1.426-.204-4.073-.814-6.314-1.63-4.073-1.426-7.739-1.426-14.258-.203-8.962 1.629-17.924 8.147-17.924 17.517 0 .611 6.313 2.444 8.147 9.981-3.056-4.278-8.352-8.963-14.666-4.889-6.722 4.277-3.259 14.054-12.221 24.238-3.056 3.463-2.648 7.537.61 15.684 5.296 12.833 30.35 19.758 43.997 31.979 3.259-1.426 5.499-4.685 7.129-7.129-9.166-9.573-12.833-18.536-15.48-25.054-3.259-7.536-6.926-11.813-14.055-17.518 3.667 1.426 6.519 2.852 8.147 4.074 1.833 1.222 4.481 1.426 6.926.611 8.76-3.053 13.445-15.275 13.852-23.014z" fill="#f0efef"/><path d="m279.968 94.054c-.611 7.74-6.314 3.87-9.369 2.444-6.111-2.648-12.222-4.481-19.351-4.481s-16.295.611-24.238 2.648c-10.999 3.055-14.259 2.852-19.147.407-4.888-2.648-13.442-9.166-13.442-9.166s-.204 2.037 1.833 4.685c2.647 3.259 8.555 7.333 16.498 9.98 3.87 1.223 6.926.407 10.389-.407 18.128-4.481 37.274-5.296 53.365 4.481.815.407 3.667-.815 4.889-2.648 1.628-2.647-1.427-7.943-1.427-7.943z" fill="#010101"/><path d="m187.291 171.658c1.629 1.019 3.666 1.63 5.906 3.463 0 0-1.833 0-2.647-.814-1.019-.611-3.056-2.444-3.259-2.649z" fill="#0a1825"/><path d="m246.156 10.135c-.611-1.833-5.093-5.093-15.48-5.093-11.203 0-14.462 3.463-14.665 5.296 0 .611-.815 7.13-1.019 9.777 0 0 0 3.259.203 8.147.204 3.259 1.019 5.092 1.426 9.37.407 4.48 1.63 7.332 3.87 10.999 1.019.61 1.833 1.222 2.852 1.426 4.074.814 11.203 1.018 15.073 0 2.24-.611 5.092-4.481 5.703-7.944.814-4.277 1.629-7.333 1.833-9.98.407-2.647.611-8.555.814-10.185.612-4.48-.407-11.406-.61-11.813z" fill="#f0efef"/><path d="m224.769 261.892s10.796 4.685 37.479.611c0 0-7.536 37.886-4.073 56.828 0 0 3.462 4.889 29.127 14.258 0 0 11.406 2.852 10.999 8.556 0 0 .407 1.222-13.443.814s-26.887-2.852-36.053-2.852-18.943.407-20.572-2.24c-1.833-2.444.407-8.759 3.055-12.426 2.853-3.869 2.037-6.722 1.834-13.646-.613-18.128-14.464-36.867-8.353-49.903z" fill="#010101"/><path d="m222.528 265.355c-1.426 2.037.203 9.776 2.24 17.313 2.037 7.536 6.519 12.018 7.537 24.442 1.018 12.221 1.222 13.851-2.241 20.979s-4.481 13.647 7.536 13.851 18.536-.204 30.757 1.63c12.222 1.833 16.499 2.444 23.221 1.426s8.147-3.26 5.296-5.296c-2.852-2.037-14.666-4.277-19.758-8.352-4.889-3.666-18.739-9.777-18.942-11.406-.611-5.5-.815-25.461.203-31.979 1.019-6.519 2.444-15.888 2.852-18.332s2.444-4.889-1.019-4.074c-3.462.814-16.498 2.648-26.275 2.037-9.777-.61-10.795-2.851-11.407-2.239z" fill="#8ac640"/><path d="m229.454 328.294c3.462 1.629 8.555 2.852 12.425 2.852 0 0-1.427 6.722.814 10.795 2.24 4.074-16.295 1.63-16.295 1.63l-.814-14.462zm53.977 17.517c3.259-1.019 5.5-4.685 2.852-8.147-2.852-3.463-5.296-4.074-1.63-4.277 3.667-.204 17.11 7.943 17.11 7.943l-6.926 6.314zm-61.514-72.513c4.685 1.63 11.814 2.037 17.925 1.833 6.11-.203 15.276-1.019 21.184-3.055 5.906-2.037 3.462 2.24 3.462 2.24l-3.259 3.056s-7.74 3.055-20.368 2.852c-14.869-.204-19.351-1.833-19.351-1.833zm.407 10.185c4.686 1.63 11.814 2.037 17.925 1.833 6.11-.203 14.258-.203 20.165-2.444 2.444-.814 1.019 2.648 1.019 2.648l-1.019 1.833s-7.944 2.852-20.369 2.647c-14.869-.203-17.517-1.426-17.517-1.426z" fill="#010101" opacity=".3"/><path d="m224.769 261.892s17.721 6.314 37.683 2.037c0 0-7.74 36.46-4.277 55.199 0 0 3.462 4.888 29.127 14.258 0 0 11.406 2.852 10.999 8.555 0 0 .407 1.223-13.443.814-13.851-.407-26.887-2.852-36.053-2.852s-18.943.408-20.572-2.24c-1.833-2.444.407-8.759 3.055-12.425 2.853-3.87 2.037-6.722 1.834-13.647-.613-17.924-14.464-36.663-8.353-49.699z" fill="none"/><path d="m224.769 261.892s17.721 6.11 37.683 1.833c0 0-7.74 36.664-4.277 55.403 0 0 3.462 4.888 29.127 14.258 0 0 11.406 2.852 10.999 8.555 0 0 .407 1.223-13.443.814-13.851-.407-27.091-4.277-36.053-2.852-9.573 1.63-18.943 1.019-20.572-2.24-1.426-2.647.407-8.759 3.055-12.425 2.853-3.87 2.037-6.722 1.834-13.647-.613-17.924-14.464-36.663-8.353-49.699z" fill="none"/><path d="m208.881 140.699c0 1.426 15.888 9.369 24.646 10.999 8.759 1.629 27.091 0 29.942-.611l-.408 2.852s-21.794 3.259-38.496-1.222c-16.703-4.481-14.869-5.5-14.869-5.5z" fill="#010101"/><path d="m174.865 314.443c2.444 1.223 11.203 3.463 16.906 2.241.814-.204 0-14.055 2.241-20.369 3.259-8.759 8.555-15.888 10.998-31.367-8.555-.815-18.331-3.056-23.424-4.686-6.517 19.962-4.276 37.071-6.721 54.181zm13.648 12.833c1.426.407 2.444 2.036 2.852 1.019.814-1.834-1.426-5.296-1.63-7.74v-.204c-1.833-1.629-14.258-1.833-13.443-1.019-1.426 2.648-3.666 2.241-4.48 7.537-.407 2.647 2.852.407 5.906.203-5.499 3.666-11.813 8.352-12.832 12.425-1.222 5.703.815 7.333 6.926 10.389 5.296 1.222 11.61 1.426 16.498 1.222 5.5-1.019 6.519-3.666 4.889-7.333-2.446-5.5-4.075-12.629-4.686-16.499z" fill="#f0efef"/><path d="m190.753 62.686c6.722 3.87 16.092 2.852 19.554 2.648.815 0 8.963-1.426 9.37-1.223.814.204.814.815.814.815s-3.055 1.629-9.98 2.036c-6.518.407-14.258 0-18.535-2.036-5.093-2.24-1.223-2.24-1.223-2.24zm69.254 3.87c1.222.814 9.166 3.87 12.629 7.536 3.055 3.26 1.426 3.056.814 2.241-.814-1.019-7.129-5.296-9.573-6.314s-5.5-2.852-5.5-3.259 1.63-.204 1.63-.204z" fill="#010101"/><path d="m189.734 151.086c5.907-.407 12.018 1.019 15.888 5.092 2.037 2.037 5.296 4.277 4.889 6.314 0 .611-1.223 2.241-2.24 3.463-.611.814-2.444 2.647-3.056 3.259-.814.611-3.666 2.852-4.277 3.259-.611.408-1.426 1.427-2.037 1.63-2.036 1.019-4.277.204-6.314-.814-2.036-1.019.408-1.223-1.833-2.852-5.499-3.87-8.555-6.519-6.314-14.055.203-1.426 2.443-3.056 5.294-5.296z" fill="#f0efef"/><path d="m137.795 104.442c-18.332 7.333-64.977 30.554-78.216 37.683 10.999 6.925 16.091 23.627 17.721 40.533.203 1.63.407 3.056.611 4.685.203 1.426.407 2.444.61 3.056 0 .204 0 .611.204.814 12.018-32.793 54.995-67.42 56.625-70.068.814-1.222-1.019-6.518 1.833-11.609 3.667-6.52 10.797-9.372.612-5.094zm43.589 153.784c9.369-18.739 9.573-36.664 9.369-57.644 0-8.759 6.314-21.184 3.056-17.721-12.222 13.646-42.978 39.312-65.18 40.737 31.164-1.018 43.385 14.666 52.755 34.628z" fill="#010101" opacity=".4"/><path d="m41.654 159.437c11.61-8.351 71.698-40.329 86.16-44.811 14.461-4.685 9.98-10.185 9.98-10.185s-58.662 25.257-93.696 47.052" fill="#010101"/><path d="m212.751 100.572c-4.685-1.833-8.351 3.667-7.129 8.963 1.223 5.296 12.222 11.202 11.61 30.553-.407 15.888-3.87 22.405-3.87 22.405l-7.74-9.776s-1.222-21.999-3.87-25.258c-2.647-3.259-10.999-9.166-14.258-12.221-3.259-3.056 3.666-7.129 3.259-12.833-.407-5.499 3.463-16.498 3.463-16.498zm28.313 86.77c-.407 15.276 3.056 37.886 4.481 48.682 1.426 10.795 3.259 11.61 0 16.499-3.259 4.685-7.536 12.425-7.536 12.425l-14.055-1.223s11.203-14.258 11.813-16.906c.611-2.647-5.703-22.812-5.703-22.812zm-27.09-142.58c2.852 6.313 6.314 9.165 11.813 10.999 3.259 1.222 16.091 2.852 21.184-2.852 2.24-2.648.814-9.777.814-9.777l-11.61 9.369-15.684-2.851-1.833-4.685z" fill="#010101" opacity=".4"/><path d="m215.195 58.816c5.296 3.463 18.536 6.722 22.202 7.333 3.666.814 9.573-3.87 12.425-5.092 3.056-1.426 8.352-2.241 14.462 3.259.611.611-1.426 3.259-1.426 3.259-.204-.204-1.426-.204-3.056-1.019-1.629-.814-3.055-1.426-5.499-1.222-10.185 1.222-11.814 4.685-20.776 2.647s-11.203-3.666-19.961-3.259" fill="#8ac640" stroke="#010101" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.586"/><path d="m213.362 59.427c6.722 2.852 19.758 5.907 23.424 6.722s9.573-2.852 12.425-4.685c5.093-3.259 11.61-.611 14.666 2.852 2.036 2.24 2.852 3.666 2.852 4.277 0 .814-2.444 0-2.444 0-1.426-.611-3.056-.814-4.277-1.63-1.63-.814-3.26-2.036-5.703-1.833-10.185 1.223-12.222 4.685-20.98 2.648s-10.999-3.87-20.368-3.26" fill="#8ac640"/><path d="m181.791 249.67c-.407-.407.407-.814 0-.814-2.647 0-6.314-2.037-8.352-4.889-8.758-12.628-21.591-20.979-44.811-20.368-34.831.814-48.682-13.443-51.329-40.737-1.426-14.869-5.5-29.331-13.851-37.479l-4.889 3.056c9.369 8.147 12.425 21.387 14.462 39.515 3.259 27.294 25.257 39.923 50.922 40.33 26.683.407 36.256 5.907 46.236 19.351 3.259 4.277 6.926 5.703 9.777 6.314z" fill="#010101"/><path d="m276.302 118.7c.611 3.055 2.24 8.962 5.499 11.813 1.427 1.426 1.63 1.833.408 1.833-1.223 0-10.185-.407-10.185-.407l-2.444-4.277z" fill="#010101" opacity=".4"/></svg>
    )
}