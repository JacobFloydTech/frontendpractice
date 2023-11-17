'use client'

import { redirect } from "next/navigation";
import { SuperCarData } from "./data"

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Home({params: { supercar}}: {params: {supercar: string}}) { 
    const firstImage = useRef<any>();
    const description = useRef<any>();

    useEffect(() => { 
        if (!firstImage.current || !description.current || !description.current.children) { return}
        gsap.fromTo(firstImage.current, { opacity: 0,}, { opacity: 1, duration: 1, ease: 'power4.inOut'});
        Array.from(description.current.children).forEach((e: any) => { 
            gsap.fromTo(e, {opacity: 0, translateX: '+=30'}, { opacity: 1, translateX: '-=30', scrollTrigger: { 
                trigger: e,
                scrub: false,
                start: 'top 70%',
                end: 'top 50%',
            }})
        })
    },[])
    const result = SuperCarData.filter((e) => e.src == supercar)[0];
    if (!result) { return redirect('/9ff/supercars')}
    return ( 
        <div className="md:w-3/4 mx-auto flex flex-col space-y-4 mt-32 mb-4 h-auto">
            <div className="aspect-video max-h-48 md:max-h-70 2xl:max-h-[550px]">
            <img ref={firstImage} className=" w-full h-full opacity-0 object-cover" src={result.firstImage}></img>
            </div>
            <div className="w-full h-auto py-4  flex flex-col items-center justify-center bg-white">
                <p className="bg-[#C7C1A1] p-2 z-30 text-xl">9FF</p>
                <p className="border-[#C7C1A1] p-4 border-2 -translate-y-4  text-2xl w-4/5 md:w-2/3 text-center font-bold">{result.shortName}</p>
            </div>
            <div className="grid md:grid-cols-2 p-8 bg-white  md:p-12 md:pl-14 rounded-sm">
                <div className="flex flex-col row-start-2 md:row-start-auto">
                    <p className="text-4xl font-bold">{result.name}</p>
                    <div className="h-[4px] bg-black w-[40px] my-4"></div>
                    <p className="text-lg italic mb-4 md:mb-12">{result.tag}</p>
                    {result.vehicle && 
                    <>
                        <p className="font-bold my-4 text-2xl italic">Vehicle</p>
                        <p className="md:mb-12 mb-4 md:text-lg">{result.vehicle}</p>
                    </>
                    }   
                    {result.vehicleUpgrades.map((e, i) => { 
                        return <p key={i} className="my-2 text-lg">+ {e}</p>
                    })}
     
                </div>
            <div ref={description} className="flex flex-col row-start-1 md:row-start-auto">
                    {result.description.map((e, i) => { 
                        return <p key={i} className="pb-8 md:text-[17px] 2xl:text-lg text-sm">{e}</p>
                    })}
                </div>
            <div>               
                     <p className="font-bold my-4 text-2xl italic">Engine</p>
                      {result.engineUpgrades.map((e, i) => { 
                        return <p key={i} className="my-2 text-lg">+ {e}</p>
                    })}
                     <p className="font-bold my-4 text-2xl italic">Chassis</p>
                    {result.chassisUpgrades.map((e, i) => { 
                        return <p key={i} className="my-2 text-lg">+ {e}</p>
                    })}
            </div>
            <div>               
                     <p className="font-bold my-4 text-2xl italic">Transmission</p>
                      {result.transmissionUpgrades.map((e, i) => { 
                        return <p key={i} className="my-2 text-lg">+ {e}</p>
                    })}
                     <p className="font-bold my-4 text-2xl italic">Brake/Wheels</p>
                    {result.wheelUpgrades.map((e, i) => { 
                        return <p key={i} className="my-2 text-lg">+ {e}</p>
                    })}
                    {result.performanceTimes && 
                    <>
                        <p className="font-bold md:mt-24 py-4 text-2xl italic">Performance</p>
                        {result.performanceTimes.map((e, i) => { 
                            return <p key={i} className="text-lg my-2">{e}</p>
                        })}
                    </>
                }
            </div>
            </div>
            <div className="md:w-full h-32 sm:h-64 md:h-96 xl:h-[400px] 2xl:h-[600px] overflow-hidden relative">
                <img className="h-full w-full object-cover object-center absolute top-0 left-0 " src={result.secondImage}></img>
            </div>
       
        </div>
    )
}