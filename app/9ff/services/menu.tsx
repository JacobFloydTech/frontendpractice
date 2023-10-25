"use client";

import { useRouter } from "next/navigation";

export default function ServiceOptions() {
    const router = useRouter();
    return (
        <div>
            <div className="flex flex-col">
                <p>Choose your model</p>
                <div className="flex space-x-7 text-lg">
                    <button onClick={() => { router.push('/9ff/services/11and930') }} >11 & 930</button>
                    <button>964</button>
                    <button>993</button>
                    <button>996</button>
                    <button>997</button>
                    <button>991</button>
                </div>
            </div>
        </div>
    )
}