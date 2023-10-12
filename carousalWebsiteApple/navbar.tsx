"use client";


export default function Navbar({ setIndex }: { setIndex: Function }) {
    return (

        <div className="md:w-1/2 mx-auto border-black border-2 rounded-2xl text-base flex sm:flex-col md:flex-row justify-around p-2 my-2 z-50 absolute left-1/2 transfrom -translate-x-1/2" >
            <button className="px-2" onClick={() => { setIndex(0) }}>Macbook Air</button>
            <button className="px-2" onClick={() => { setIndex(1) }}>Macbook Pro</button>
            <button className="px-2" onClick={() => { setIndex(2) }}>iPhone 13</button>
            <button className="px-2" onClick={() => { setIndex(3) }}>iPhone 14</button>
        </div>
    )
}