
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ShopNavbar() { 
    const [hover, setHover] = useState<number>(0);

    return (
        <div className="fixed w-full z-50">
            <div className="flex flex-col items-center justify-center   bg-[#222222]">
                <div className="flex justify-between w-2/3 ">
                    <img className="h-20" src="/9ff/shop/shopLogo.png"></img>
                    <div className="flex items-center justify-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 50 40"  >
                            <path fill="white" d="M20.745,32.62c2.883,0,5.606-1.022,7.773-2.881L39.052,40.3c0.195,0.196,0.452,0.294,0.708,0.294  c0.255,0,0.511-0.097,0.706-0.292c0.391-0.39,0.392-1.023,0.002-1.414L29.925,28.319c3.947-4.714,3.717-11.773-0.705-16.205  c-2.264-2.27-5.274-3.52-8.476-3.52s-6.212,1.25-8.476,3.52c-4.671,4.683-4.671,12.304,0,16.987  C14.533,31.37,17.543,32.62,20.745,32.62z M13.685,13.526c1.886-1.891,4.393-2.932,7.06-2.932s5.174,1.041,7.06,2.932  c3.895,3.905,3.895,10.258,0,14.163c-1.886,1.891-4.393,2.932-7.06,2.932s-5.174-1.041-7.06-2.932  C9.791,23.784,9.791,17.431,13.685,13.526z"/>
                        </svg>
                        <svg viewBox="0 0 32 32" width={32} height={32} fill="white">
                            <path d="M14.568 25.629c-1.222 0-2.111.889-2.111 2.111 0 1.111 1 2.111 2.111 2.111 1.222 0 2.111-.889 2.111-2.111s-.889-2.111-2.111-2.111zm10.22 0c-1.222 0-2.111.889-2.111 2.111 0 1.111 1 2.111 2.111 2.111 1.222 0 2.111-.889 2.111-2.111s-.889-2.111-2.111-2.111zm2.555-3.777H12.457L7.347 7.078c-.222-.333-.555-.667-1-.667H1.792c-.667 0-1.111.444-1.111 1s.444 1 1.111 1h3.777l5.11 14.885c.111.444.555.666 1 .666h15.663c.555 0 1.111-.444 1.111-1 0-.666-.555-1.111-1.111-1.111zm2.333-11.442l-18.44-1.555h-.111c-.555 0-.777.333-.667.889l3.222 9.22c.222.555.889 1 1.444 1h13.441c.555 0 1.111-.444 1.222-1l.778-7.443c.111-.555-.333-1.111-.889-1.111zm-2 7.443H15.568l-2.333-6.776 15.108 1.222-.666 5.554z"></path>
                        </svg>
                    </div>
                </div>
                <div className="w-full h-[1px] mt-4 bg-gray-300 bg-opacity-40"/>
                <div onMouseLeave={() =>{ setHover(0)}} className="flex w-2/3 justify-between text-white h-12 items-center" >
                    <div   className="flex uppercase font-bold text-white h-full ">
                        <div id='sportsCarLabel' onMouseEnter={() => { setHover(1)}} className={"flex justify-center items-center space-x-4 h-12 rounded-sm p-4" + (hover == 1 ? " bg-gray-900": "")}>
                            <p>Sports cars</p>
                            <Arrow/>
                        </div>
                        <div id='merchandiseLabel' onMouseEnter={() => { setHover(2)}}  className={"flex justify-center items-center space-x-4 h-12 p-4 rounded-sm" + (hover == 2 ? " bg-gray-900": "")}>
                            <p>Merchandise</p>
                            <Arrow/>
                        </div>
                    </div>
                    <p className="text-sm text-gray-200">Account</p>
                </div>
            </div>
            <DropDowns hover={hover}/>
        </div>
    )
}

function DropDowns({hover}: { hover:  number}) { 
    const sportsCarsItems = [964, 993, 996, 997, 991, 992]  
    const merchandiseItems = ['Clothing', 'Accessories']
    const sportsCar = useRef<any>();
    const merchandise = useRef<any>();

    useEffect(() => { 
        const sportsCarEl = document.getElementById('sportsCarLabel');
        const merchandiseEl = document.getElementById('merchandiseLabel')
        if (!sportsCarEl || !merchandiseEl || !sportsCar.current || !merchandise.current) { return};
        sportsCar.current.style.width  = `${sportsCarEl.clientWidth}px`;
        merchandise.current.style.width  = `${merchandiseEl.clientWidth}px`;
 
    },[])
    useEffect(() => { 
        console.log(hover);
         if (hover == 1) { 
            gsap.set(sportsCar.current, { opacity: 1, duration: 0.3})
            gsap.to(merchandise.current, { opacity: 0, duration: 0.3})
        } else if ( hover == 2) { 
            gsap.set(merchandise.current, { opacity: 1, duration: 0.3})
            gsap.to(sportsCar.current, { opacity: 0, duration: 0.3})
        } else {
            gsap.to(merchandise.current, { opacity: 0, duration: 0.3})
            gsap.to(sportsCar.current, { opacity: 0, duration: 0.3})
        }
    },[hover])
    return ( 
        <div className="flex w-2/3 mx-auto -translate-y-2">
                <div ref={sportsCar} className={"flex flex-col opacity-0 text-black p-2 text-center "}>
                    {sportsCarsItems.map((e,i) => { return <p key={i} className="text-lg p-2 px-6 bg-white">{e}</p>})}
                </div>
       
                <div ref={merchandise} className={"flex flex-col opacity-0  text-black p-2 text-center "}>
                    {merchandiseItems.map((e,i) => { return <p key={i} className="text-lg p-2 px-6 bg-white">{e}</p>})}
                </div>
       
        </div>
    )
}



function Arrow() { 
    return (
        <span> 
            <svg viewBox="0 0 100 100" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="50" y2="100" stroke="white" stroke-width="3"></line>
                <line x1="50" y1="100" x2="100" y2="0" stroke="white" stroke-width="3"></line>
            </svg>
        </span>
    )
}