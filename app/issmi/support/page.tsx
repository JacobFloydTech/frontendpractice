"use client"
import gsap from "gsap";
import { Question } from "@/types";
import { general, selling } from "./data";
import { useRef, useState } from "react"

export default function SupportPage() {
    const [page, setPage] = useState(0);
    return (
        <div className="flex flex-col justify-center mt-24 w-full  items-center">
            <p className="text-5xl my-8">Support</p>
            <div className="flex space-x-4 my-8 border-[1px] border-b-gray-500 md:w-2/3 mx-4 w-full py-4 items-center justify-center">
                <button onClick={() => { setPage(0) }}>FAQs</button>
                <button onClick={() => setPage(1)}>Contact</button>
            </div>
            {page == 0 ? <FAQ /> : <Contact />}
        </div>
    )
}

function Contact() {
    return (
        <div></div>
    )
}

function FAQ() {
    return (
        <div className=" md:w-2/3 w-full px-4 md:px-0 flex flex-col space-y-12">
            <p className="text-green-400 text-4xl">General</p>
            {general.map((q, i) => {
                return <Question q={q} key={i} />
            })}
            <p className="text-green-400 text-4xl">Selling</p>
            {selling.map((q, i) => {
                return <Question q={q} key={i} />
            })}
        </div>
    )
}

function Question({ q }: { q: Question }) {

    const [open, setOpen] = useState(false);
    const ref = useRef<any>();
    const textRef = useRef<any>();


    function animate() {

        if (!open) {
            setOpen(true)
            gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2, delay: 0.2 })
            gsap.to(ref.current, { height: 'auto', duration: 0.5, })
        } else {
            setOpen(false)
            gsap.fromTo(textRef.current, { opacity: 1 }, { opacity: 0, duration: 0.2, })
            gsap.to(ref.current, { height: '60px', duration: 0.5, })
        }
    }
    return (
        <div ref={ref} className="h-[60px] mr-4 flex flex-col space-y-8 border-b-slate-300 border-2 overflow-hidden">
            <button onClick={() => { animate() }} className="flex justify-between md:items-center text-left text-sm md:text-xl font-bold ">
                <p>{q.question}</p>
                <p className="pr-4">{open ? "-" : "+"}</p>
            </button>
            <p ref={textRef} className="pb-8">{q.answer}</p>
        </div>
    )
}