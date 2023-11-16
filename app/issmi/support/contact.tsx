import { Facebook, Instagram, LinkedIn, TikTok, Youtube } from "../about/iconsSvg";

export default function Contact() { 
    return ( 
        <div className="w-full md:w-2/3  h-auto ">
            <div className="grid grid-cols-5 gap-4">
                
                <div className="bg-gray-300 h-auto col-span-3 ">
                    <div className="flex items-center">
                    <p className=" text-gray-700 text-4xl leading-[60px] min-w-[250px] translate-x-16  ">Fill out the form and an ISSIMI team member will connect with you shortly.</p>
                        <div className="rounded-xl bg-white grid grid-cols-2 gap-4 my-6 translate-x-40 text-lg w-full shadow-2xl py-10 text-gray-700 min-w-[600px]">
                            <div className="flex flex-col p-4 space-y-1">
                                <p>First name <span className="text-red-500 text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-4 space-y-1">
                                <p>Last name <span className="text-red-500 text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-4 space-y-1">
                                <p>Email  <span className="text-red-500 text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-4 space-y-1">
                                <p>Phone Number  <span className="text-red-500 text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-4 space-y-1 col-span-2">
                                <p>Subject </p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-4 space-y-1 col-span-2">
                                <p>Tell us what we can help you with  <span className="text-red-500 text-lg">*</span></p>
                                <textarea className="border-gray-300 border-2 p-1 rounded-md h-32 "/>
                            </div>
                            <div className="flex justify-end p-4 col-span-2">
                                <button className="border-black border-2 rounded-full p-2 px-4 hover:bg-black hover:text-white">Submit inquiry</button>
                            </div>
                            <p className="italic col-span-2 text-sm p-2">By submitting this form you agree to our privacy policy.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 h-auto col-span-2"></div>
            </div>
            <div className="text-white flex flex-col justify-center items-center bg-gradient-to-br from-[#28673C] to-[#4C8C6A] my-12 rounded-lg py-8">
             
                    <p className="text-3xl font-bold border-white border-b-2 pt-4 pb-8">Or, call us at +1 (650) 352-4648</p>
                    <p className="text-3xl py-8">Join us on our journey.</p>
                    <div className="flex space-x-8">
                        <Facebook color={'white'} />
                        <Instagram color={'white'} />
                        <Youtube color={'white'} />
                        <TikTok color={'white'} />
                        <LinkedIn color={'white'} />
                    </div>
            </div>
        </div>
    )
}