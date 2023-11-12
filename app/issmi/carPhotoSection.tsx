"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Auction from "./auction";
import WhatWeDo from "./whatWeDo";
gsap.registerPlugin(ScrollTrigger);

export default function CarPhotoSection() {

    useEffect(() => {
        const elements = document.getElementsByClassName('auctionIntroText')
        Array.from(elements).forEach((e, i) => {
            gsap.fromTo(e, { opacity: 0, translateX: (i > 0 ? "+=100px" : "-=100px") }, {
                opacity: 1, translateX: 0, scrollTrigger: {
                    trigger: e,
                    start: 'top 70%',
                    end: 'top 50%',
                    scrub: true,
                }
            })
        })
    }, [])
    return (
        <div className="w-full h-full ">
            <img className="w-full h-auto" src="cars/carPhotoSection.jpg"></img>
            <div className="w-full h-auto md:aspect-[6/2.5] aspect-square overflow-hidden relative bg-no-repeat bg-center " style={{ backgroundSize: 'cover', backgroundImage: 'url("cars/carPhotoSection2.jpg")' }}>
                <div className="absolute md:h-0 md:w-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute flex h-full w-full z-20 text-white flex-col md:flex-row">
                    <div className="md:bg-black  md:bg-opacity-50 md:h-full w-full md:w-1/2 h-1/4 justify-center h-2/3 flex relative -translate-y-12 md:translate-y-">
                        <p className="md:text-6xl text-2xl absolute w-full md:w-auto top-1/2 -translate-y-1/2 text-center md:text-left md:top-1/4 md:left-[5%] auctionIntroText">Tradition Meets Innovation </p>
                    </div>
                    <div className="md:bg-black md:bg-opacity-70 md:h-full w-full md:w-1/2 h-1/2 relative">
                        <div className="absolute top-[10%] left-[5%] mx-[10%] md:text-lg text-sm 2xl:text-2xl flex flex-col 2xl:justify-around -translate-y-24 md:translate-y-0 h-2/3">
                            <p className="auctionIntroText">The best way to grow your collection: safe, transparent, and thrilling. Our online auctions provide a seamless way for you to buy and sell from anywhere, while we guarantee to put our hands on every car through a comprehensive inspection and evaluation process to ensure asset quality and accuracy.</p>
                            <p className="text-gray-300 mt-8 auctionIntroText">Buying sight unseen can be risky. Our global team is here to help.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}