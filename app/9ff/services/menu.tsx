"use client";

import { useRouter } from "next/navigation";

export default function ServiceOptions() {
    const router = useRouter();
    const options = ["964", '993', '996', '997', '991']
    return (
        <div>
            <div className="flex flex-col">
                <p>Choose your model</p>
                <div className="flex space-x-4 md:space-x-7 md:justify-around text-lg my-4 md:h-12">
                    <button className="border-gray-200 rounded-xl  border-2 md:border-none  p-1" onClick={() => { router.push('/9ff/services/model/930') }} ><span className="hidden md:block">11 &</span>930</button>
                    {options.map((g, i) => {
                        return (
                            <button className="border-gray-200 rounded-xl  border-2 md:border-none p-1" key={i} onClick={() => { router.push(`/9ff/services/model/${g}`) }}>{g}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}