"use client"

import { carServiceDetails } from "@/types"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useState } from "react"
import NavigationFooterServices from "../../navigationFooter";
import { Footer } from "@/app/9ff/homePage";

const carsServiceDetails: carServiceDetails[] = [
    {
        generationName: "11 & 930", productionStart: 76, productionEnd: 89, id: '930', nautralEngineStats: {
            lowLimitEngineCapacity: 3.0,
            highLimitEngineCapacity: 4.0,
            lowLimitHorsePower: 250,
            highLimitHorsePower: 400,
        }, turboEngineStats: {
            lowLimitEngineCapacity: 3.0,
            highLimitEngineCapacity: 4.0,
            lowLimitHorsePower: 360,
            highLimitHorsePower: 750
        }
    }, {
        generationName: '964', productionStart: 89, productionEnd: 94, id: '964', nautralEngineStats: {
            lowLimitEngineCapacity: 3.6,
            highLimitEngineCapacity: 4.2,
            lowLimitHorsePower: 300,
            highLimitHorsePower: 450,
        }, turboEngineStats: {
            lowLimitEngineCapacity: 3.3,
            highLimitEngineCapacity: 4.0,
            lowLimitHorsePower: 400,
            highLimitHorsePower: 800,
        }
    }, {
        generationName: '993', productionStart: 94, productionEnd: 98, id: '993', nautralEngineStats: {
            lowLimitEngineCapacity: 3.6,
            highLimitEngineCapacity: 4.2,
            lowLimitHorsePower: 300,
            highLimitHorsePower: 450,
        }, turboEngineStats: {
            lowLimitEngineCapacity: 3.6,
            highLimitEngineCapacity: 4.0,
            lowLimitHorsePower: 470,
            highLimitHorsePower: 800
        }
    }, {
        generationName: '996', id: '996', markGenerations: [
            {
                generationName: '996 MK1', id: '996mk1', productionStart: 98, productionEnd: 0o2, nautralEngineStats: {
                    lowLimitEngineCapacity: 3.4,
                    highLimitEngineCapacity: 4.4,
                    lowLimitHorsePower: 340,
                    highLimitHorsePower: 600,
                }, turboEngineStats: {
                    lowLimitEngineCapacity: 3.6,
                    highLimitEngineCapacity: 4.2,
                    lowLimitHorsePower: 480,
                    highLimitHorsePower: 1400
                }
            }, {
                generationName: '996 MK2', id: '996mk2', productionStart: 0o3, productionEnd: 0o5, nautralEngineStats: {
                    lowLimitEngineCapacity: 3.6,
                    highLimitEngineCapacity: 4.4,
                    lowLimitHorsePower: 360,
                    highLimitHorsePower: 600
                }, turboEngineStats: {
                    lowLimitEngineCapacity: 3.6,
                    highLimitEngineCapacity: 4.2,
                    lowLimitHorsePower: 480,
                    highLimitHorsePower: 1400
                }
            }
        ]
    }, {
        generationName: '997', id: '997', markGenerations: [
            {
                generationName: '997 MK1', id: '997mk1', productionStart: 5, productionEnd: 9, nautralEngineStats: {
                    lowLimitEngineCapacity: 3.6,
                    highLimitEngineCapacity: 4.4,
                    lowLimitHorsePower: 390,
                    highLimitHorsePower: 600
                }, turboEngineStats: {
                    lowLimitEngineCapacity: 3.6,
                    highLimitEngineCapacity: 4.2,
                    lowLimitHorsePower: 540,
                    highLimitHorsePower: 1400
                }
            }, {
                generationName: "997 MK2", id: '997mk2', productionStart: 10, productionEnd: 12, nautralEngineStats: {
                    lowLimitEngineCapacity: 3.8,
                    highLimitEngineCapacity: 4.4,
                    lowLimitHorsePower: 450,
                    highLimitHorsePower: 600
                }, turboEngineStats: {
                    lowLimitEngineCapacity: 3.8,
                    highLimitEngineCapacity: 4.0,
                    lowLimitHorsePower: 620,
                    highLimitHorsePower: 1000
                }
            }
        ]
    }, {
        generationName: '991', id: '991', markGenerations: [
            {
                generationName: '991 MK1', id: '991mk1', productionStart: 13, productionEnd: 16, turboEngineStats: {
                    lowLimitEngineCapacity: 3.8,
                    highLimitEngineCapacity: 4.0,
                    lowLimitHorsePower: 620,
                    highLimitHorsePower: 1000,
                }
            }, {
                generationName: '991 MK2', id: '991mk2', productionStart: 16, turboEngineStats: {
                    lowLimitEngineCapacity: 3.8,
                    highLimitEngineCapacity: 4.0,
                    lowLimitHorsePower: 650,
                    highLimitHorsePower: 1000
                }
            }
        ]
    }
]

function getIndex(currentCar: carServiceDetails) {
    for (var i = 0; i < carsServiceDetails.length; i++) {
        if (carsServiceDetails[i].id == currentCar.id) {
            return i;
        }
    }
    return -1;
}

export default function CarModel({ params: { car } }: { params: { car: string } }) {
    const router = useRouter();
    let [currentCar, setCurrentCar] = useState<carServiceDetails>(carsServiceDetails.filter(({ id }) => car === id)[0]);

    if (!currentCar) { return router.push('/9ff/services') }
    let [index, setIndex] = useState<number>(getIndex(currentCar))

    return (
        <div className="bg-stone-200 w-full md:w-3/4 mx-auto mt-32 pt-4">
            <div id='img' className="max-h-[650px] overflow-hidden m-4 hidden md:block">
                <img className={"w-full h-full object-cover " + (currentCar.id == '993' ? " -translate-y-56" : "")} src={`/9ff/services/models/${currentCar.id}.jpg`}></img>
            </div>
            <img className="md:hidden p-4" src={`/9ff/services/models/${currentCar.id}.jpg`}></img>
            <div className="w-auto h-auto py-4  flex flex-col items-center justify-center bg-white mx-4">
                <p className="bg-stone-600 p-2 z-30 text-3xl">{currentCar.generationName}</p>
                <p className="border-stone-600 p-4 border-2 -translate-y-4 text-4xl mx-2">Performance Overview</p>
            </div>
            {
                currentCar.markGenerations ? currentCar.markGenerations.map((car, i) => {
                    return (
                        <CarInfo key={i} currentCar={car} />

                    )
                }) : <CarInfo currentCar={currentCar} />
            }

            <ServicesFooter />
            <NavigationFooterServices index={index} cars={carsServiceDetails} />
       
        </div >
    )
}

function ServicesFooter() {
    return (
        <div className="grid gap-y-2 md:grid-cols-2 m-4 bg-stone-200">
            <img src="/9ff/services/9ffservicesblack.jpg"></img>
            <div className="w-full h-auto bg-white flex flex-col py-[8%] justify-around px-8">
                <p className="uppercase text-3xl font-semibold">9ff tuning parts</p>
                <p>The tuning parts from 9FF are unparalleled on the market. Because we at 9FF pay attention to performance, all the car parts we offer are resilient, high quality and real special features.</p>
                <p>
                    In our online shop you will find many parts and components for your vehicle.</p>
            </div>
        </div>
    )
}

function getFormattedDate(n: number) {
    if (n.toString().length == 1) {
        return ("0" + n)
    } else {
        return n;
    }
}

function CarInfo({ currentCar }: { currentCar: carServiceDetails }) {
    return (
        <div className="flex flex-col justify-center items-center m-4  bg-stone-200">

            <div className="flex flex-col w-full h-auto bg-white py-8 px-2 text-sm md:px-16 mx-4">
                <p className="text-3xl font-semibold">{currentCar.generationName}</p>
                <p className="pt-2 ">
                    {currentCar.productionStart && <span>From '{getFormattedDate(currentCar.productionStart)}</span>}
                    {currentCar.productionEnd && <span> to '{getFormattedDate(currentCar.productionEnd)}</span>}
                </p>
                <div className="my-8 h-[4px] bg-black w-[10%]"></div>
                <p className="italic text-2xl">We offer the following services for these models:</p>
                <div className="grid md:grid-cols-2 my-8">
                    <div className="flex text-2xl font-bold flex-col">
                        <p>Aerodynamics</p>
                        <p>Chassis technology</p>
                        <p>Sports exhaust system</p>
                        <p>Gear technology</p>
                        <p>Charge air cooling system</p>
                        <p>Brake system</p>
                        <p>Clutch kit</p>
                        <p>Interior upgrades</p>
                    </div>
                    <div className=" flex flex-col space-y-2 my-12 md:my-0  md:text-lg 2xl:text-2xl">
                        <p className="font-semibold">Engine performance/conversions/performance upgrades</p>
                        <p className="font-semibold uppercase">Driving performance</p>
                        {currentCar.nautralEngineStats && <p className="italic text-lg ">Naturally aspirated engines        {currentCar.nautralEngineStats.lowLimitEngineCapacity.toFixed(1)} - {currentCar.nautralEngineStats.highLimitEngineCapacity.toFixed(1)} liters <span className="not-italic font-semibold">|</span> {currentCar.nautralEngineStats.lowLimitHorsePower} - {currentCar.nautralEngineStats.highLimitHorsePower} HP</p>}
                        {currentCar.turboEngineStats && <p className="italic text-lg ">Turbo engines {currentCar.turboEngineStats.lowLimitEngineCapacity.toFixed(1)} - {currentCar.turboEngineStats.highLimitEngineCapacity.toFixed(1)} liters <span className="not-italic font-semibold">|</span> {currentCar.turboEngineStats.lowLimitHorsePower} - {currentCar.turboEngineStats.highLimitHorsePower} HP</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}