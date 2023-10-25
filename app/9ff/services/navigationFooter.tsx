"use client";

import { carServiceDetails } from "@/types";
import { useRouter } from "next/navigation";
export default function NavigationFooterServices({ index, cars }: { index: number, cars: carServiceDetails[] }) {
    const router = useRouter();
    return (
        <div className="text-2xl flex justify-between px-24 h-auto w-full bg-white uppercase font-semibold py-12 ">
            {index === 0 ? <button onClick={() => { router.replace('/9ff/services') }}>Go to services</button> : <button onClick={() => { router.replace(`/9ff/services/model/${cars[index - 1].id}`) }}>Go to {cars[index - 1].generationName}</button>}
            {index < cars.length - 1 && <button onClick={() => { router.replace(`/9ff/services/model/${cars[index + 1]?.id}`) }}>Go to {cars[index + 1]?.generationName}</button>}
        </div>
    )
}