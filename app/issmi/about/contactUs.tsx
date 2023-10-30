"use client"

import { Email, Facebook, Instagram, LinkedIn, TikTok, Youtube } from "./iconsSvg"

export default function ContactUs() {
    return (
        <div className="flex w-full md:w-1/2 px-6 flex-col space-y-6 my-6 mx-auto ">
            <p className="md:text-5xl text-3xl">Contact</p>
            <div className="flex flex-col text-left space-y-6 font-bold">
                <p className="text-xl">We're based in </p>
                <p className="text-2xl">San Carlos, California</p>
                <p className="text-3xl">Verona, Italy</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col text-left text-xl ">
                    <p className="font-bold" >Get in touch</p>
                    <div className="flex space-x-2 items-center mt-2 text-gray-800">
                        <Email />
                        <p>hello@issimi.com</p>
                    </div>
                </div>
                <div className="flex flex-col text-left text-lg space-y-2">
                    <p className="font-bold">Follow our Journey</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-gray-800 ">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-2">
                                <Instagram />
                                <p>@issmioffical</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Facebook />
                                <p>@issmioffical</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <LinkedIn />
                                <p>ISSIMI</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-2">
                                <Youtube />
                                <p>@ISSIMIOffical</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <TikTok />
                                <p>@ISSIMIOffical</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}