import { redirect } from "next/navigation";
import { SuperCarData } from "./data"
import { Footer } from "../../homePage";


export default function Home({params: { supercar}}: {params: {supercar: string}}) { 
    const result = SuperCarData.filter((e) => e.src == supercar)[0];
    if (!result) { return redirect('/9ff/supercars')}
    return ( 
        <div className="w-3/4 mx-auto flex flex-col space-y-4 mt-32">
            <img className="aspect-video object-cover" src={result.firstImage}></img>
            <div className="w-full h-auto py-4  flex flex-col items-center justify-center bg-white">
                <p className="bg-[#C7C1A1] p-2 z-30 text-xl">9FF</p>
                <p className="border-[#C7C1A1] p-4 px-48 border-2 -translate-y-4  text-2xl mx-2">{result.shortName}</p>
            </div>
            <div className="grid grid-cols-2  bg-white p-12 pl-14 rounded-sm">
                <div className="flex flex-col">
                    <p className="text-4xl font-bold">{result.name}</p>
                    <div className="h-[4px] bg-black w-[40px] my-4"></div>
                    <p className="text-lg italic mb-12">{result.tag}</p>
                    <p className="font-bold my-4 text-2xl italic">Vehicle</p>
                    <p className="mb-12">{result.vehicle}</p>
                    {result.vehicleUpgrades.map((e) => { 
                        return <p className="my-2 text-lg">+ {e}</p>
                    })}
     
                </div>
            <div className="flex flex-col">
                    {result.description.map((e) => { 
                        return <p className="pb-8 text-sm">{e}</p>
                    })}
                </div>
            <div>               
                     <p className="font-bold my-4 text-2xl italic">Engine</p>
                      {result.engineUpgrades.map((e) => { 
                        return <p className="my-2 text-lg">+ {e}</p>
                    })}
                     <p className="font-bold my-4 text-2xl italic">Chassis</p>
                    {result.chassisUpgrades.map((e) => { 
                        return <p className="my-2 text-lg">+ {e}</p>
                    })}
            </div>
            <div>               
                     <p className="font-bold my-4 text-2xl italic">Transmission</p>
                      {result.transmissionUpgrades.map((e) => { 
                        return <p className="my-2 text-lg">+ {e}</p>
                    })}
                     <p className="font-bold my-4 text-2xl italic">Brake/Wheels</p>
                    {result.wheelUpgrades.map((e) => { 
                        return <p className="my-2 text-lg">+ {e}</p>
                    })}
                    <p className="font-bold mt-24 py-4 text-2xl italic">Performance</p>
                    {result.performanceTimes.map((e) => { 
                        return <p className="text-lg my-2">{e}</p>
                    })}
            </div>
            </div>
            <img src={result.secondImage}></img>
            <Footer/>
        </div>
    )
}