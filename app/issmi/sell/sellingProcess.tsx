"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap";

export default function SellingProcess() {
    const ref = useRef<any>();
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        document.getElementById('sellingProccess')?.addEventListener('scroll', (e) => { console.log(e); })
    }, [])

    function animate(place: number) {
        const height = ref.current.children[0].clientHeight;
        gsap.to(ref.current, { translateY: `-${height * place}px`, duration: 2, ease: 'power4.out' })
    }
    return (
        <div id='sellingProccess' className="flex flex-col bg-gray-200 items-center justify-center py-12">
            <p className="text-4xl">Our Selling Process</p>
            <div className="w-full md:w-2/3 px-4 md:grid-cols-sellingProccess grid row-start-2 md:row-start-auto ">
                <div className="flex md:flex-col">

                    {[1, 2, 3, 4, 5].map((e, i) => {
                        return (
                            <button className={"rounded-full drop-shadow-xl shadow-lg w-12 h-12 m-2 " + (currentSlide == e ? " bg-green-800 text-white" : " bg-white text-black")} key={i} onClick={() => { animate(e - 1); setCurrentSlide(e) }}>{e}</button>
                        )
                    })}
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center row-start-1 md:row-start-auto">
                    <div className="overflow-hidden">
                        <div ref={ref} className="grid grid-cols-2 h-72  ">
                            <p className="h-72 text-3xl sellingTagLine">Submit to sell</p>
                            <p className="h-72 text-sm md:text-lg  sellingDescriptionParagraph"> Follow submission of your extraordinary machine, we'll provide a detailed value range, allowing you to set the best asking price and net the most</p>
                            <p className="h-72 text-3xl sellingTagLine">Consign & Collect</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> After you've set an asking price & sign our consignment agreement, we'll take it from there, arranging vehicle pick up and prep</p>
                            <p className="h-72 text-3xl sellingTagLine">Detail & Describe</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> The process is entirely hands-free from this point – we’ll arrange pick-up and preparation, including detailing, photography, inspection, and description. Your car will go live on our site with a comprehensive listing sharing your vehicle in the best possible light.</p>
                            <p className="h-72 text-3xl sellingTagLine">Review & Reply</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> Once your listing goes live, it will be highlighted to the ISSIMI community and a broader global audience. As an "Open Auction", potential buyers will offer starting bids at or below your asking price for you to accept or reject.</p>
                            <p className="h-72 text-3xl sellingTagLine">Boost your Hammer Profile</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> Should you choose to accept a starting bid offer, the offer will then become the starting price for a 72-hour, no-reserve auction open to everyone to ensure you get the highest possible hammer price for your listing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SellForm() {
    return (
        <div className="grid grid-cols-3 w-2/3 mx-auto ">
            <div className="flex flex-col justify-center">
                <p>Sell with us </p>
                <p>Submit your car, speak with a specialist</p>
            </div>
            <div className="grid grid-cols-2 bg-white p-4 text-lg col-span-2 gap-4">
                <div className="flex flex-col">
                    <p className="text-3xl">Make<span className="text-red-500">*</span></p>
                    <select >
                        <option value="none" selected disabled hidden>Select Make</option>
                        {['Mercedes', 'BMW', 'Volvo', 'Mazda', 'Ferrari', 'Audi'].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Model<span className="text-red-500">*</span></p>
                    <select >
                        <option value="none" selected disabled hidden>Select a Model</option>
                        {['Mercedes', 'BMW', 'Volvo', 'Mazda', 'Ferrari', 'Audi'].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Year <span className="text-red-500"> *</span></p>
                    <input placeholder="Input year" type="number"></input>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Location<span className="text-red-500"> *</span></p>
                    <select >
                        <option value="none" selected disabled hidden>Select Country</option>
                        {["New Zealand", "Australia", "USA", "England", "France", "Japan", "China", "Canada", "India"].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Mileage <span className="text-red-500"> *</span></p>
                    <input placeholder="Input Mileage" type="number"></input>
                </div>
                <div className="flex flex-col justify-center">

                    <select >

                        {["Miles", "Kilometers"].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}