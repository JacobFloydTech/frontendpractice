"use client"

import { BaseSyntheticEvent, useEffect, useRef, useState } from "react"
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function SellingProcess() {
    const ref = useRef<any>();
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        document.getElementById('sellingProccess')?.addEventListener('scrollend', (e) => { console.log(e); })
    }, [])

    function animate(place: number) {
        const height = ref.current.children[0].clientHeight;
        gsap.to(document.getElementById('sellingProccess'), { scrollTo: height * place, duration: 2, ease: 'power4.out' })
    }

    function handleScroll() {
        const el = document.getElementById('sellingProccess')
        const scrollTop = el?.scrollTop
        const height = ref.current.children[0].clientHeight;
        if (!scrollTop) { return }



        if (scrollTop >= height * 4) {
            setCurrentSlide(5)
        } else if (scrollTop >= height * 3) {
            setCurrentSlide(4)
        } else if (scrollTop >= height * 2) {
            setCurrentSlide(3)
        } else if (scrollTop >= height) {
            setCurrentSlide(2)
        } else {
            setCurrentSlide(1)
        }
    }

    function scrollLock() {
        const el = document.getElementById('sellingProccess')
        const scrollTop = el?.scrollTop
        const height = ref.current.children[0].clientHeight;
        if (!scrollTop) { return }


        if (scrollTop <= height) {
            gsap.to(el, { scrollTo: 0 })
        } else if (scrollTop <= height * 2) {
            gsap.to(el, { scrollTo: height })
        } else if (scrollTop <= height * 3) {
            gsap.to(el, { scrollTo: height * 2 })
        } else if (scrollTop < height * 4) {
            gsap.to(el, { scrollTo: height * 4 })
        } else {
            gsap.to(el, { scrollTo: height * 5 })
        }

    }
    return (
        <div className="flex flex-col bg-gray-200 items-center justify-center py-12 sellingProccess">
            <p className="text-4xl">Our Selling Process</p>
            <div className="w-full md:w-2/3 px-4 md:grid-cols-sellingProccess grid row-start-2 md:row-start-auto sellingProccess">
                <div className="flex md:flex-col ">

                    {[1, 2, 3, 4, 5].map((e, i) => {
                        return (
                            <button className={"rounded-full drop-shadow-xl shadow-lg w-12 h-12 m-2 " + (currentSlide == e ? " bg-green-800 text-white" : " bg-white text-black")} key={i} onClick={() => { animate(e - 1); setCurrentSlide(e) }}>{e}</button>
                        )
                    })}
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center row-start-1 md:row-start-auto sellingProccess" >
                    <div onScroll={() => handleScroll()} id='sellingProccess' onMouseLeave={() => { scrollLock() }} className="overflow-y-auto sellingProccess" style={{ scrollbarWidth: 'none' }}>
                        <div ref={ref} className="grid grid-cols-2 h-72 ">
                            <p className="h-72 text-[28px] sellingTagLine">Submit to sell</p>
                            <p className="h-72 text-sm md:text-lg  sellingDescriptionParagraph"> Follow submission of your extraordinary machine, we'll provide a detailed value range, allowing you to set the best asking price and net the most</p>
                            <p className="h-72 text-[28px] sellingTagLine">Consign & Collect</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> After you've set an asking price & sign our consignment agreement, we'll take it from there, arranging vehicle pick up and prep</p>
                            <p className="h-72 text-[28px] sellingTagLine">Detail & Describe</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> The process is entirely hands-free from this point – we’ll arrange pick-up and preparation, including detailing, photography, inspection, and description. Your car will go live on our site with a comprehensive listing sharing your vehicle in the best possible light.</p>
                            <p className="h-72 text-[28px] sellingTagLine">Review & Reply</p>
                            <p className="h-72 text-sm md:text-lg sellingDescriptionParagraph"> Once your listing goes live, it will be highlighted to the ISSIMI community and a broader global audience. As an "Open Auction", potential buyers will offer starting bids at or below your asking price for you to accept or reject.</p>
                            <p className="h-72 text-[28px] sellingTagLine">Boost your Hammer Profile</p>
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
        <div className="grid grid-cols-3 w-3/4 mx-auto ">
            <div className="flex flex-col text-left">
                <p className="text-6xl my-4">Sell with us </p>
                <p className="text-lg my-4">Submit your car, speak with a specialist</p>
            </div>
            <div className="grid grid-cols-2 ml-12 bg-white p-4 text-lg col-span-2 gap-4">
                <div className="flex flex-col">
                    <p className="text-3xl">Make<span className="text-red-500">*</span></p>
                    <select className="bg-white p-2 border-gray-200 border-2 rounded-xl h-12 " >
                        <option value="none" selected disabled hidden>Select Make</option>
                        {['Mercedes', 'BMW', 'Volvo', 'Mazda', 'Ferrari', 'Audi'].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Model<span className="text-red-500">*</span></p>
                    <select className="bg-white p-2 border-gray-200 border-2 rounded-xl h-12 ">
                        <option value="none" selected disabled hidden>Select a Model</option>
                        {['Mercedes', 'BMW', 'Volvo', 'Mazda', 'Ferrari', 'Audi'].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Year <span className="text-red-500"> *</span></p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" placeholder="Input year" type="number"></input>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Location<span className="text-red-500"> *</span></p>
                    <select className="bg-white p-2 border-gray-200 border-2 rounded-xl h-12 ">
                        <option value="none" selected disabled hidden>Select Country</option>
                        {["New Zealand", "Australia", "USA", "England", "France", "Japan", "China", "Canada", "India"].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-3xl">Mileage <span className="text-red-500"> *</span></p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" placeholder="Input Mileage" type="number"></input>
                </div>
                <div className="flex flex-col justify-center mt-8">

                    <select className="bg-white p-2 border-gray-200 border-2 rounded-xl h-12 ">

                        {["Miles", "Kilometers"].map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col col-span-2">
                    <p>Vehicle Description</p>
                    <textarea className="border-gray-200 border-2 rounded-xl h-40"></textarea>
                </div>
                <div className="flex flex-col">
                    <p>Desired Vehicle Price USD</p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" type="number"></input>
                </div>
                <div className="flex flex-col">
                    <p>Vehicle Identification Number</p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" ></input>
                </div>
                <div className="flex flex-col">
                    <p>First Name</p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" ></input>
                </div>
                <div className="flex flex-col">
                    <p>Last Name</p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" ></input>
                </div>
                <div className="flex flex-col">
                    <p>Email</p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" ></input>
                </div>
                <div className="flex flex-col">
                    <p>Phone Number</p>
                    <input className="border-gray-200 border-2 rounded-xl h-12" ></input>
                </div>
                <div className="col-span-2 flex justify-end">
                    <button className="w-1/4 border-black border-2 rounded-full"> Submit Vehicle</button>
                </div>

            </div>
        </div>
    )
}