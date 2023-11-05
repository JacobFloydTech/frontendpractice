"use client"

export default function PrivateSalesForm() {
    return (
        <div className="grid grid-cols-2 w-[80%]">
            <div className="flex flex-col justify-center  text-left px-24">
                <p className="text-[#A98000] font-bold text-3xl">Become a private sales member</p>
                <p className="py-5 text-lg">Our team will get in touch to discuss further</p>
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-slate-100 border-2 rounded-lg px-10 py-8">
                <div className="space-y-2 flex flex-col">
                    <p>Firstname <span className="text-red-500">*</span></p>
                    <input className="bg-white rounded-lg outline-none p-2"></input>
                </div>
                <div className="space-y-2 flex flex-col">
                    <p>Lastname <span className="text-red-500">*</span></p>
                    <input className="bg-white rounded-lg outline-none p-2"></input>
                </div>
                <div className="space-y-2 flex flex-col">
                    <p>Email <span className="text-red-500">*</span></p>
                    <input className="bg-white rounded-lg outline-none p-2"></input>
                </div>
                <div className="space-y-2 flex flex-col">
                    <p>Phone <span className="text-red-500">*</span></p>
                    <input className="bg-white rounded-lg outline-none p-2"></input>
                </div>
                <div className="space-y-2 flex flex-col col-span-2">
                    <p>Tell us a little bit about yourself and your collection goals <span className="text-red-500">*</span></p>
                    <textarea className="bg-white rounded-lg outline-none p-2 h-36"></textarea>
                </div>
                <div className="flex col-span-2 justify-end">
                    <button className="border-white border-2 p-4 px-6 rounded-full hover:text-black hover:bg-white  ">Submit</button>
                </div>
                <div className="col-span-2 text-xs italic">By submitting this form you are agree to our <span className="underline">privacy policy</span></div>
            </div>

        </div>
    )
}