import { Facebook, Instagram, LinkedIn, TikTok, Youtube } from "../about/iconsSvg";

export default function Contact() { 
    return ( 
        <div className="w-full md:w-3/4 xl:w-2/3  h-auto ">
            <div className="grid md:grid-cols-5 md:gap-4 px-2">
                <div className="bg-gray-300 h-auto md:col-span-3 ">
                    <div className="flex flex-col md:flex-row items-center">
                    <p className=" text-gray-700 text-4xl leading-[60px] h-auto  min-w-[150px] xl:min-w-[200px] 2xl:min-w-[250px] md:translate-x-16 px-4  ">Fill out the form and an ISSIMI team member will connect with you shortly.</p>
                        <div className="rounded-xl bg-white grid grid-cols-2 gap-2 md:gap-4 my-6 md:translate-x-40 md:text-lg w-full px-2 md:px-4 shadow-2xl py-10 text-gray-700 min-w-[150px] md:min-w-[400px] xl:min-w-[500px]  2xl:min-w-[600px]">
                            <div className="flex flex-col p-2 md:p-4 space-y-1">
                                <p>First name <span className="text-red-500 md:text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-2 md:p-4 space-y-1">
                                <p>Last name <span className="text-red-500 md:text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-2 md:p-4 space-y-1">
                                <p>Email  <span className="text-red-500 md:text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-2 md:p-4 space-y-1">
                                <p>Phone Number  <span className="text-red-500 md:text-lg">*</span></p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-2 md:p-4 space-y-1 col-span-2">
                                <p>Subject </p>
                                <input className="border-gray-300 border-2 p-1 rounded-md "/>
                            </div>
                            <div className="flex flex-col p-2 md:p-4 space-y-1 col-span-2">
                                <p>Tell us what we can help you with  <span className="text-red-500 md:text-lg">*</span></p>
                                <textarea className="border-gray-300 border-2 p-1 rounded-md h-32 "/>
                            </div>
                            <div className="flex justify-end p-2 md:p-4 col-span-2">
                                <button className="border-black border-2 rounded-full p-2 px-4 hover:bg-black hover:text-white">Submit inquiry</button>
                            </div>
                            <p className="italic col-span-2 text-sm p-2">By submitting this form you agree to our <span className="underline">privacy policy.</span></p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 h-auto col-span-2"></div>
            </div>
            <div className="text-white flex flex-col justify-center items-center bg-gradient-to-br from-[#28673C] to-[#4C8C6A] my-12 rounded-lg mx-4 md:mx-2 py-8">
                    <p className="md:text-3xl font-bold border-white border-b-2 pt-4 pb-8">Or, call us at +1 (650) 352-4648</p>
                    <p className="md:text-3xl md:py-8 py-4">Join us on our journey.</p>
                    <div className="flex space-x-4 md:space-x-8">
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