"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap";

export default function SellingProcess() {
    const ref = useRef<any>();
    const [currentSlide, setCurrentSlide] = useState(1);

    function animate(place: number) {
        const height = ref.current.children[0].clientHeight;
        gsap.to(ref.current, { translateY: `-${height * place}px`, duration: 2, ease: 'power4.out' })
    }
    return (
        <div className="flex flex-col bg-gray-200 items-center justify-center py-12">
            <p className="text-4xl">Our Selling Process</p>
            <div className="w-2/3 grid-cols-sellingProccess grid mx-auto ">
                <div className="flex flex-col">

                    {[1, 2, 3, 4, 5].map((e, i) => {
                        return (
                            <button className={"rounded-full shadow-2xl w-12 h-12 m-2 " + (currentSlide == e ? " bg-green-800 text-white" : " bg-white text-black")} key={i} onClick={() => { animate(e - 1); setCurrentSlide(e) }}>{e}</button>
                        )
                    })}
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="overflow-hidden">
                        <div ref={ref} className="grid grid-cols-2 h-72  ">
                            <p className="h-72 text-3xl sellingTagLine">Submit to sell</p>
                            <p className="h-72   sellingDescriptionParagraph"> Follow submission of your extraordinary machine, we'll provide a detailed value range, allowing you to set the best asking price and net the most</p>
                            <p className="h-72 text-3xl sellingTagLine">Consign & Collect</p>
                            <p className="h-72  sellingDescriptionParagraph"> After you've set an asking price & sign our consignment agreement, we'll take it from there, arranging vehicle pick up and prep</p>
                            <p className="h-72 text-3xl sellingTagLine">Detail & Describe</p>
                            <p className="h-72  sellingDescriptionParagraph"> The process is entirely hands-free from this point – we’ll arrange pick-up and preparation, including detailing, photography, inspection, and description. Your car will go live on our site with a comprehensive listing sharing your vehicle in the best possible light.</p>
                            <p className="h-72 text-3xl sellingTagLine">Review & Reply</p>
                            <p className="h-72  sellingDescriptionParagraph"> Once your listing goes live, it will be highlighted to the ISSIMI community and a broader global audience. As an "Open Auction", potential buyers will offer starting bids at or below your asking price for you to accept or reject.</p>
                            <p className="h-72 text-3xl sellingTagLine">Boost your Hammer Profile</p>
                            <p className="h-72  sellingDescriptionParagraph"> Should you choose to accept a starting bid offer, the offer will then become the starting price for a 72-hour, no-reserve auction open to everyone to ensure you get the highest possible hammer price for your listing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}