"use client";

import { useRouter } from "next/navigation";
export default function NavigationFooterServices() {
    const router = useRouter();
    return (
        <div className="text-2xl flex justify-between px-24 h-auto w-full bg-white uppercase font-semibold py-12 ">
            <button onClick={() => { router.push('/9ff/services') }}>Back to all services</button>
            <button>Go to 964</button>
        </div>
    )
}