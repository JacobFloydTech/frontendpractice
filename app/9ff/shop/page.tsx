"use client"

import { useEffect, useRef, useState } from "react";
import ShopNavbar from "./shopNavbar";
import gsap from "gsap";


type MerchData = { 
    image: string;
    name: string;
    price: string;
}


export default function ShopPage() { 
    return ( 
        <div >
            <ShopNavbar/>
            <div className=" absolute top-0 -z-10  w-full h-96 md:h-auto">
                <img className="w-full h-full object-cover" src="/9ff/shop/background.jpg"></img>
            </div>
            <Main/>
            <Footer/>
        </div>
    )
}

function Main() { 
    return ( 
        <div className="flex flex-col w-full  px-4 md:mx-auto md:w-3/4 xl:w-2/3 md:pt-80 pt-52 z-50 space-y-8">
            <div>
                <p className="text-5xl font-bold bg-[#C7C1A1] w-24 text-center mb-2">9FF</p>
                <button className="bg-[#222222] transition duration-300 hover:bg-[#515050] w-56 text-xl text-center text-white p-2 flex items-center">View all products<Arrow/></button>
            </div>
            <CarGrid/>
            <MerchGrid/>
            <NewsLetter/>
      
        </div>
    )   
}


function Arrow() { 
    return ( 
        <svg className="translate-x-4" width={32} viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="50" x2="70" y2="50" strokeWidth={3} stroke="white"></line>
            <line x1='70' y1='50' x2='50' y2='30' strokeWidth={3} stroke='white'></line>
            <line x1='70' y1='50' x2='50' y2='70' strokeWidth={3} stroke='white'></line>
        </svg>
    )
}

function CarGrid() { 
    const cars = [992, 991, 997, 996]
    return ( 
        <div className="grid md:grid-cols-4 my-12 bg-gray-100 space-x-[2px] ">
            {cars.map((e) => { 
                return ( 
                    <div className="bg-white flex flex-col items-center justify-center space-y-2 transition duration-100 hover:bg-gray-100  p-4">
                        <p className="font-bold text-3xl"> {e}</p>
                        <p className="text-[#C7C1A1] font-semibold">View all</p>
                        <div className="p-2 w-full h-full">
                            <img className="w-full h-full object-cover transition duration-100 hover:scale-105" src={`/9ff/shop/grid/${e}.jpg`}></img>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}



function MerchGrid() { 

    const data: MerchData[] = [
        {
            image: 'poloshirt',
            name: '9FF Basic Polo Shirt',
            price: '$49.90'
        }, 
        { 
            image: 'mug',
            name: '9FF Coffee Cup',
            price: '$18.90'
        }, {
            image: 'blanket',
            name: '9FF Blanket Large',
            price: 'SOLD OUT'
        }, { 
            image: 'smallblanket', 
            name: '9FF Blanket Small',
            price: '$18.90'
        }
    ]
    return ( 
        <div className="grid md:grid-cols-5 space-y-8 md:space-y-0 space-x-[2px] bg-gray-100 my-12 ">
            <div className="w-full relative h-80">
                <img className="w-full h-full object-cover absolute top-0 left-0 z-20 transition duration-300 " src="/9ff/shop/merchGrid/main.jpg"></img>
                <div className="flex flex-col justify-end h-full absolute w-full top-0 left-0 uppercase z-30 transition duration-300 bg-black bg-opacity-30 hover:bg-opacity-50">
                    <p className="p-1 bg-[#C7C1A1] text-xl font-bold w-5/6 ">Merchandise</p>
                    <p className="p-1 font-bold text-white  mb-12">View all</p>
                </div>
                
            </div>
            {data.map((e) => {
                return <Product data={e}/>
            })}
        </div>
    )
}

function Product({data}: { data: MerchData}) { 
    const [hover, setHover] = useState(false);
    const ref = useRef<any>();

    useEffect(() =>{  
        if (!ref.current) { return}
        if ( hover) { 
            gsap.fromTo(ref.current, { opacity: 0, translateY: 50}, { opacity: 1, translateY: -10, duration: 0.5})
        } else { 
            gsap.to(ref.current, {opacity: 0, translateY: 50, duration: 0.5})
        }
    },[hover])
    return ( 
        <div onMouseOver={() => {setHover(true)}} onMouseLeave={() => { setHover(false)}} className="flex flex-col justify-center items-center space-y-4 px-4  bg-white transition duration-100 hover:bg-gray-100 relative">
            <div className="w-full h-48">
                <img className="w-full h-full object-contain" src={`/9ff/shop/merchGrid/${data.image}.jpg`}></img>
            </div>
            <p className="font-bold">{data.name}</p>
            <p className="text-sm text-gray-700">{data.price}</p>
            <button ref={ref} className="uppercase bg-[#C7C1A1] absolute z-50 p-2 font-bold opacity-0 bottom-1/2  tracking-wider hover:bg-[#9A915A]">opinion</button>
         </div>
    )
}

function NewsLetter() { 
    return ( 
        <div className="flex flex-col bg-white items-center justify-center space-y-8 md:space-y-4 py-12 p-4">
            <p className="uppercase font-bold text-2xl">Subscribe to our newsletter</p>
            <p className="text-gray-500 text-lg">Promotions, new products and special offers. Straight to your inbox</p>
            <div className="flex w-full items-center md:justify-center h-[60px] md:h-[30px] ">
                <input placeholder="Your email address" className="w-2/3 h-full p-4 bg-gray-200 rounded-sm"></input>
                <ArrowButton/>
            </div>
        </div>
    )
}

function ArrowButton() { 
    const [hover, setHover] = useState(false);
    return ( 
        <button onMouseEnter={() => { setHover(true)}} onMouseLeave={() => { setHover(false)}}>
            <svg className="rounded-sm overflow-hidden h-[60px] md:h-[30px]"  viewBox="0 0 75 100" xmlns="http://www.w3.org/2000/svg">
                <rect x='0' y='0' height='100%'width='100%' fill={hover ? "#9A915A" : "#C7C1A1"}/>
                <line x1="25" y1="25" x2="50" y2="50" stroke="black"></line>
                <line x1="25" y1="75" x2="50" y2='50' stroke='black'></line>
            </svg>
        </button>
    )
}

function Footer() {
    let data = ['Search Products', 'Shipment', 'Contact', 'Right of withdrawal', 'General terms & conditions', 'Data Protection',]
    return ( 
        <div className="flex flex-col bg-[#222222] justify-center items-center mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 p-4">
                <div className="flex flex-col space-y-2 text-left my-4">
                    <p className="text-xl font-bold my-2 uppercase text-white">Info</p>
                    {data.map((e) => { 
                        return <button className="text-left py-2 md:py-1 text-gray-400 transition duration-300 hover:text-gray-100 ">{e}</button>
                    })}
                </div>
                <div className="flex flex-col space-y-2 text-left my-4">
                    <p className="text-xl font-bold my-2 uppercase text-white">Follow us</p>
                    {['Instagram', 'Youtube', 'Facebook'].map((e) => { 
                        return <button className="text-left py-2 md:py-1 text-gray-400 transition duration-300 hover:text-gray-100 ">{e}</button>
                    })}
                </div>
                <div className="flex flex-col space-y-2 text-left my-4 col-span-2 md:col-span-1 justify-center md:justify-normal items-center md:items-start">
                    <p className="text-xl font-bold my-2 uppercase text-white">Stay up to date</p>
                    <p className="text-center md:text-left text-gray-400 transition duration-300 hover:text-gray-100 py-4">Promotions, new products and special offers. Straight to your inbox.</p>
                    <div className="flex">
                        <input className="text-white bg-[#1A1A1A] p-2 outline-1 rounded-sm" placeholder="Your email address"></input>
                        <ArrowButton/>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-gray-400 w-full my-4"/>
            <div className="flex justify-between w-2/3 mx-auto mb-8">
                <p className="text-gray-400 text-sm">© 2023, 9FF Online Shop . Powered by Shopify</p>
            </div>
        </div>
    )
}