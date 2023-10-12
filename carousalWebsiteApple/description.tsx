"use client";

let components = [
    First, Second
]

export default function Description({ index }: { index: number }) {
    let SpecificSection = components[index];
    return (
        <div className="absolute w-2/3 h-2/3 top-0 left-0 text-5xl flex justify-center items-center">
            <SpecificSection />
        </div>
    )
}

function First() {
    return (
        <div className="text-center w-2/3">
            <p>All-new Macbook Air</p>
            <p className="text-xl mt-4">Now equipped with macOS Big Sur and the M1 chip, this is the perfect laptop for you <br></br>
                An 8-Core CPU divided into 4 performance cores and 4 effiecency cores, along with a 7-core GPU & 16 core Neural Engine
            </p>
        </div>
    )
}

function Second() {
    return (
        <div>Another test</div>
    )
}