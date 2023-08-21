"use client";


export default function Navbar({ setIndex }: { setIndex: Function }) {
    return (

        <div className="w-1/2 mx-auto border-black border-2 rounded-2xl text-xl flex flex-row justify-around p-2 my-2 z-50 absolute left-1/2 transfrom -translate-x-1/2" >
            <button onClick={() => { setIndex(0) }}>Macbook Air</button>
            <button onClick={() => { setIndex(1) }}>Macbook Pro</button>
            <button onClick={() => { setIndex(2) }}>iPhone 13</button>
            <button onClick={() => { setIndex(3) }}>iPhone 14</button>
        </div>
    )
}