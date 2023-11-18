"use client";


import gsap from "gsap";
import { useRef } from "react";

export default function ContactPage() {
    const el = useRef<any>();


    async function hover() {
        gsap.to(el.current, {
            background: "#DEDEDE",
            color: 'black',
            duration: 1,
            ease: 'power4.inOut',
            onComplete: () => {
                gsap.to(el.current, {
                    background: "black",
                    color: "white",
                    duration: 3,
                    ease: 'power4.inOut',
                })
            }
        })
    }
    return (
        <div className="w-full md:w-3/4 2xl:w-2/3 h-full flex flex-col mx-auto">
            <img className="aspect-[2/1] object-cover fixed top-0 w-full md:w-3/4 2xl:w-2/3 -z-10 mx-auto" src="/9ff/contact/header.jpg" />
            <div className="flex flex-col justify-center bg-[#C7C1A1]  w-full h-full space-y-8 mt-[470px]">
                <div className="flex flex-col justify-center items-center text-center w-full uppercase z-50 bg-white  py-4">
                    <p className="bg-[#C7C1A1] p-2 px-4 z-50">Contact</p>
                    <p className="border-[#C7C1A1] border-2 w-full md:w-2/3 xl:w-1/2 mx-auto p-4 -translate-y-4">We are here for you</p>
                </div>
                <div className="grid md:grid-cols-[10fr_1fr_10fr] md:grid bg-white p-4"   >
                    <div className="md:text-right md:p-0 flex flex-col space-y-8 md:py-8">
                        <div>
                            <p className="font-bold text-3xl ">Address</p>
                            <p>9FF engineering GmBh <br /> Rüdigerstr. 3 <br /> 44319 Dortmund <br /> Germany</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl ">Email</p>
                            <div className="flex flex-col text-sm ">
                                <div>
                                    <p>Serice requests</p>
                                    <a className="text-blue-700 underline cursor-pointer">service@9ff.com</a>
                                </div>
                                <div>
                                    <p>General Inqueries</p>
                                    <a className="text-blue-700 underline cursor-pointer">info@9ff.com</a>
                                </div>
                                <div>
                                    <p>Press Inqueries</p>
                                    <a className="text-blue-700 underline cursor-pointer">press@9ff.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:block mx-auto h-[90%] my-auto w-[1px] bg-gray-800"></div>
                    <div className="text-left py-4 flex flex-col space-y-4 md:py-8" >
                        <div>
                            <p className="font-bold text-3xl ">Bussiness Hours</p>
                            <div className="py-2">
                                <p>Monday to Thursday 8:00am-5:00pm</p>
                                <p>Fridays 8:00am - 3:00pm</p>
                                <p>Saturday closed by appointment</p>
                                <p>Closed on Sunday</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-3xl ">Phone</p>
                            <p>+49 (0) 231/9678-911</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex my-4 flex-col justify-center items-center">
                    <p className=" font-bold text-3xl">Contact</p>
                    <div className="grid grid-cols-2 md:w-2/3 2xl:w-1/2 p-4 mx-auto gap-8 my-8">
                        <div className="flex flex-col justify-center space-y-1 text-sm">
                            <p>Surname</p>
                            <input className="p-1 outline-none border-gray-400 rounded-sm border-2" />
                        </div>
                        <div className="flex flex-col justify-center space-y-1 text-sm">
                            <p>Email</p>
                            <input className="p-1 outline-none border-gray-400 rounded-sm border-2" />
                        </div>
                        <div className="flex flex-col justify-center space-y-1 text-sm col-span-2">
                            <p>News</p>
                            <textarea className="p-1 outline-none border-gray-400 rounded-sm border-2 h-24 md:h-32 2xl:h-44" />
                        </div>
                        <div className="flex col-span-2 items-center justify-center">
                            <button ref={el} onMouseEnter={() => { hover() }} className="bg-black p-4 px-8 md:p-2 md:px-4 text-xl md:text-base text-white border-[#C7C1A1] border-4 rounded-sm">Submit</button>
                        </div>
                    </div>

                </div>
                <div ><iframe width="100%" className="h-72 md:h-96 lg:h-[400px]" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R%C3%BCdigerstra%C3%9Fe%203,%2044319%20Dortmund,%20Deutschland+(My%20B%20%209FF%20Unternehmensgruppeusiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>
                <div className="w-full h-72 md:h-96 lg:h-[400px]" style={{ background: "url('/9ff/contact/footer.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}></div>

            </div>
        </div>
    )
}