"use client";

import { useRouter } from "next/navigation";

export default function ServiceOptions() {
    const router = useRouter();
    const options = ["964", '993', '996', '997', '991']
    return (
        <div>
            <div className="flex flex-col">
                <p>Choose your model</p>
                <div className="flex space-x-7 text-lg">
                    <button onClick={() => { router.push('/9ff/services/model/930') }} >11 & 930</button>
                    {options.map((g, i) => {
                        return (
                            <button key={i} onClick={() => { router.push(`/9ff/services/model/${g}`) }}>{g}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}