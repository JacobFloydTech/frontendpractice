"use client";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

type CarData = {
    title: string,
    price: number,
    src: string,
    animate: boolean,
}
export default function Grid() {

    const cars: CarData[] = [
        { title: '2022 Porsche 911 Gt3 Touring', price: 329000, src: 'cars/porsche911gt3touring.jpg', animate: false },
        { title: '2018 Koenigsegg Agera RS', price: 4750000, src: 'cars/koenigseggagerars.jpg', animate: false },
        { title: '2017 Mercedes Benz G500 4x4 Squared', price: 189000, src: 'cars/g5004x4.jpg', animate: false },
        { title: '2005 Porsche Carrera GT', price: 1495000, src: 'cars/porschecgt.jpg', animate: true },
        { title: '1991 Lamorghini Diablo', price: 250000, src: 'cars/lambodiablo.jpg', animate: true },
        { title: '1969 Chervolet Corvette Coupe L88 4-Speed', price: 660000, src: '/cars/corvettel88.jpg', animate: true },
        { title: '1953 Ferrari 250 Europa Vignale', price: 4800000, src: 'cars/ferrari250.jpg', animate: true },
        { title: '2020 Ford GT Carbon Series', price: 1295000, src: 'cars/fordgtcarbon.jpg', animate: true }
    ]
    const popped = cars.pop();
    useEffect(() => {
        gsap.fromTo('.animate', { opacity: 1 }, {
            opacity: 0, scrollTrigger: {
                trigger: '.textIndicator',
                markers: false,
                scrub: true,
                start: 'top 65%',
                end: 'top 0%',

            }
        })
    }, [])

    return (
        <div id="main" className=" mb-20">
            <div className="fixed text-5xl font-semibold text-black w-full h-1/2 -mt-36 -z-10 animate">
                <p id='title' className="mx-auto w-2/3 text-center mt-2 z-40 ">Buy & Sell the Most Extraordinary Machines in the World</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full mt-[25%] px-4 gap-6 my-5 gridItems">
                {cars.map(({ title, price, src, animate }, index: number) => {
                    return (
                        <CarCell key={index} title={title} price={price} src={src} animate={animate} />
                    )
                })}
                <div className="flex justify-center">
                    <button className="border-black text-xl font-semibold px-4 py-2 rounded-full border-2 h-14 mt-12 hover:border-white hover:bg-black hover:text-white">View Our Auctions Catalog</button>
                </div>
                {popped &&

                    <CarCell title={popped.title} price={popped.price} src={popped.src!} animate={popped.animate} />
                }

            </div>


        </div >

    )
}

export function CarCell({ title, price, src, animate }: { title: string, price: number, src: string, animate: boolean }) {
    const ref = useRef<any>();
    const image = useRef<any>();
    const [hover, setHover] = useState(false);
    useEffect(() => {
        if (!animate) { return; }
        gsap.fromTo(image.current, { translateY: '+=120px' }, {
            translateY: '-=120px', onStart: () => { ref.current.classList.remove('hide') }, scrollTrigger: {
                trigger: ref.current, start: 'top 60%', end: 'top 30%', scrub: true,
            }
        })
        gsap.fromTo(image.current, { opacity: 0 }, {
            opacity: 1, scrollTrigger: {
                trigger: ref.current, start: 'top 60%', end: 'top 40%', scrub: true
            }
        })
    }, [])
    return (
        <div className="relative rounded-2xl overflow-hidden" onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} ref={ref}>
            {hover &&
                <div className="w-full h-full bg-opacity-[40%] bg-gray-600 absolute z-20 bg-blend-multiply text-white pl-4 pt-2">
                    <p className="text-sm font-semibold"> {title}</p>
                    <p className="text-sm"> ${price.toLocaleString()}</p>
                </div>}
            <p className="pl-4 absolute z-20 text-white bottom-4">Accepting starting bids</p>
            <img ref={image} className={"rounded-2xl overflow-hidden" + (animate ? ' hide' : ' topRow')} src={src}></img>
        </div>
    )
}