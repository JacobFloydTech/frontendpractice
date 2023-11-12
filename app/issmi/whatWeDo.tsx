"use client";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
    const ref = useRef<any>();
    useEffect(() => {
        gsap.fromTo(ref.current, { opacity: 0, translateX: '-=40' }, {
            opacity: 1, translateX: 0, scrollTrigger: {
                trigger: ref.current,
                start: 'top 70%',
                end: 'top 30%',
                scrub: true,
            }
        })
    }, [])
    return (
        <div>
            <div className="flex w-full  md:flex-row h-screen flex-col-reverse ">
                <div className="md:w-1/2 md:h-full h-1/2 w-full flex items-center justify-center">
                    <div className="flex flex-col w-2/3">
                        <p className="md:text-4xl text-base sm:mt-8">We love what we do</p>
                        <p ref={ref} className="md:text-lg text-xs md:my-8 my-2 md:leading-9">We're passionate about the motoring world. We pride ourselves on delivering an exceptional client experience, building trust with our community, and promoting transparency with every transaction. With a team boasting over 100 years of combined experience in the collector car space, we are uniquely equipped to help collectors navigate the sometimes opaque world of car collecting. We're here to help you make informed decisions and enjoy the thrill of the drive.</p>
                    </div>
                </div>
                <video className="md:w-1/2 md:h-full h-1/2 w-full object-cover my-8" loop autoPlay muted id='video'>
                    <source src="cars/issimi.mp4" type="video/mp4"></source>
                </video>
            </div>

        </div>
    )
}

export function StayInTheLoop() {
    const ref = useRef<any>();
    useEffect(() => {
        gsap.fromTo(ref.current, { opacity: 0, translateY: '-=20' }, {
            opacity: 1, translateY: 0, scrollTrigger: {
                trigger: ref.current,
                scrub: true,
                start: 'top 50%',
                end: 'top 40%'
            }
        })
    }, [])
    return (
        <div className="w-full h-full flex flex-col md:mt-24 mt-8 items-center my-4 bg-gray-200 p-4">
            <p ref={ref} className="text-5xl mb-8 w-2/3 mx-auto text-center">Stay in the loop</p>
            <div className="flex flex-col md:flex-row h-auto w-full  items-center justify-center     ">
                <div className="2xl:w-1/3 md:w-1/2 h-full w-full flex relative    ">
                    <JoinCommunityText />
                    <GreenSVG />
                    <HorizontalGreenSVG />
                </div>
                <div className="2xl:w-1/3 md:w-1/2 h-full w-full relative flex">
                    <NewsletterText />
                    <WhiteSVG />
                    <HorizontalWhiteSVG />
                </div>
            </div>

        </div>
    )
}

function NewsletterText() {
    const ref = useRef<any>();
    useEffect(() => {
        Array.from(ref.current.childNodes).forEach((e: any) => {
            gsap.fromTo(e, { opacity: 0, translateX: '+=50' }, {
                opacity: 1, translateX: 0, scrollTrigger: {
                    trigger: e, scrub: true, start: 'top 80%', end: 'top 60%'
                }
            })
        })
    })
    return (
        <div ref={ref} className=" w-2/3 h-2/3 md:px-8 left-1/2 transform -translate-x-1/2 md:left-[10%] md:translate-x-0 absolute md:top-[10%] -top-[4%] z-20 max-w-[220px]  md:max-w-none">
            <p className="xl:text-2xl md:text-xl sm:text-sm font-semibold text-[#4C8A63]">Join our Newsletter</p>
            <p className="xl:text-xl text-sm md:text-lg md:leading-8">Join our mailing list to receive priority access on the latest auctions, exclusive content, and special events.</p>
            <button className=" font-semibold flex items-center md:py-14">
                <p>Join our newsletter</p>
                <ButtonSVG color1="#4C8A63" color2='white' />
            </button>
        </div>
    )
}

function JoinCommunityText() {
    const ref = useRef<any>();
    useEffect(() => {
        Array.from(ref.current.childNodes).forEach((e: any) => {
            gsap.fromTo(e, { opacity: 0, translateX: '-=50' }, {
                opacity: 1, translateX: 0, scrollTrigger: {
                    trigger: e, scrub: true, start: 'top 80%', end: 'top 60%',
                }
            })
        })
    })
    return (
        <div ref={ref} className=" md:w-2/3 w-4/5 max-w-[220px] md:max-w-none left-1/2 -translate-x-1/2 md:left-full md:-translate-x-full  pl-4 absolute md:top-[10%] top-[4%] z-20 text-white ">
            <p className="xl:text-2xl md:text-xl sm:text-sm font-semibold">Join Our Community</p>
            <p className=" md:leading-8 md:text-base text-sm md:my-2">Join our community of enthusiasts and collectors. Get connected with our team and sign up for updates for your specific vehicle preferences</p>
            <button className="xl:py-8 py-0 text-xl font-semibold  flex items-center  pl-2">
                <p className="md:text-lg text-sm">Create an Account</p>
                <ButtonSVG color1="white" color2='#4C8A63' />
            </button>
        </div>
    )
}



function GreenSVG() {
    return (
        <svg className="md:hidden rounded-xl overflow-hidden mx-auto" width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#183029', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3A825B', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <polygon fill="url(#grad1)" points="0 0 200 0 200 200 0 130"></polygon>
        </svg>
    )
}
function WhiteSVG() {
    return (
        <svg className="md:hidden overflow-hidden  -translate-y-1/3  rounded-xl mx-auto" width={300} height={300} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="white" points="0 200 200 200 200 70 0 0"></polygon>
        </svg>
    )
}

function HorizontalGreenSVG() {
    return (
        <svg className="md:block hidden rounded-xl  float-right ml-auto translate-x-[10%] w-4/5 h-3/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#183029', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3A825B', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <polygon fill="url(#myGradient)" points="0 0 200 0 150 200 0 200 " />
        </svg>
    )
}

function HorizontalWhiteSVG() {
    return (

        <svg className="md:block hidden rounded-xl -translate-x-[10%] w-4/5 h-3/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="white" points="200 0 200 200 0 200 50 0" />
        </svg>

    )
}

export function ButtonSVG({ color1, color2 }: { color1: string, color2: string, }) {
    const [hover, setHover] = useState(false);

    const ref = useRef<any>();


    return (
        <svg onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} ref={ref} width="70" height="70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="70" className="-z-10" fill={hover ? color1 : color2} stroke={!hover ? color1 : color2} strokeOpacity={4} />
            <line x1="50" y1="100" x2="150" y2="100" stroke={!hover ? color1 : color2} strokeWidth={3} />
            <line x1="150" y1="100" x2="115" y2="120" stroke={!hover ? color1 : color2} strokeWidth={3} ></line>
            <line x1="150" y1="100" x2="115" y2="80" stroke={!hover ? color1 : color2} strokeWidth={3} ></line>
        </svg>
    )
}