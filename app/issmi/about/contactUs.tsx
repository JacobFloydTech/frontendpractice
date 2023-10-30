"use client"

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
                    <p>hello@issimi.com</p>
                </div>
                <div className="flex flex-col text-left pl-12 space-y-2">
                    <p className="font-bold">Follow our Journey</p>
                    <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 ">
                        <div className="flex flex-col space-y-2">
                            <p>@issmioffical</p>
                            <p>@issmioffical</p>
                            <p>ISSIMI</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p>@ISSIMIoffical</p>
                            <p>@ISSIMIoffical</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}