import type { Car } from "@/types"
import CarComponent from "./carComponent"

export default function SupercarsHome() {

    let cars: Car[] = [
        { name: '9FF Gturbo', subtitle: 'GTurbo - A name for those hungry for performance', src: '/9ff/supercars/gturbo.jpg', redirect: '/gturbo' },
        { name: '9FF GTronic', subtitle: 'GTronic - Acceleration is his passion', src: '/9ff/supercars/gtronic.jpg', redirect: '/gtronic' },
        { name: '9FF GT9', subtitle: 'GT9 - Our masterpiece in terms of performance', src: '/9ff/supercars/gt9.jpg', redirect: '/gt9' },
        { name: '9FF Speed9', subtitle: 'Allow us to give you some fresh thoughts', src: '/9ff/supercars/speed9.jpg', redirect: '/speed9' }
    ]
    return (
        <div className="flex flex-col w-full h-auto bg-gray-200">
            <div className="fixed mx-4">
                <img src="/9ff/supercars/main.jpg"></img>
            </div>
            <div className="w-full h-screen "></div>
            <div className="bg-gray-200 w-full h-auto z-20 px-12">
                <div className="w-auto h-auto bg-white  z-20 py-4">
                    <div className="w-auto h-auto flex flex-col justify-center items-center uppercase text-2xl ">
                        <p className="bg-stone-700 p-2 z-30">Supercars</p>
                        <p className="border-stone-700 border-2 p-4 transform -translate-y-4 px-12">Exceptional vehicles</p>
                    </div>
                </div>
                <div className="w-auto h-auto bg-white space-y-4 z-20 py-4 tracking-wide pl-12 flex flex-col justify-around my-4">
                    <p className="font-bold text-3xl">9FF SUPERCARS</p>
                    <p className="text-base">9FF is one of the smaller German vehicle manufacturers approved by the Federal Motor Transport Authority. With passion and true German engineering, <br></br> 9FF handcrafts super sports cars that are second to none. <br></br>
                        Performance in every respect. Visually and above all technically. <br></br>
                        Flawless top quality. That's why a 9FF never has to hide with its driver. To nothing and no one.</p>
                    <p>Discover our 9FF supercars below</p>
                </div>
                <div className="carGrid gap-y-5">
                    {cars.map((car) => {
                        return (
                            <CarComponent car={car} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

