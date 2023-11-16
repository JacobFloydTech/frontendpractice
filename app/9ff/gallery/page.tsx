import InstagramSection from "./button";

export default function GalleryPage() { 
    return ( 
        <div className="flex flex-col justify-center items-center mx-auto w-full md:w-4/5 mt-32 space-y-8 bg-gray-200 py-4">
            <div className="w-full h-48 md:h-96 xl:h-[600px]">
                <img className="w-full h-full object-cover" src="/9ff/gallery/main.jpg"/>
            </div>
            <div className="flex flex-col justify-center items-center uppercase w-full bg-white p-4">
                <p className="bg-[#C7C1A1] p-2 px-4 z-50">Gallery</p>
                <p className="font-bold border-[#C7C1A1] border-2 p-4 w-full md:w-2/3 xl:w-1/2 text-center -translate-y-4 text-3xl">Cars, pictures & insights</p>
            </div>
            <div className="flex flex-col text-left justify-around space-y-8 bg-white w-full p-4 ">
                <p className="font-bold text-3xl uppercase">9FF Gallery</p>
                <div className="w-full md:w-[30%] lg-[20%] xl:w-[10%]  h-[2px] bg-black"/>
                <p className="md:w-3/4 md:text-lg">9FF sports cars and 9FF conversions are as individual as their owners. Every car has its own charm, individual characteristics and a special look. In our gallery we show you every day which cars we currently have in production for refinement.</p>
            </div>
            <InstagramSection/>
            <div className="flex items-center justify-center bg-white p-4 py-12 w-full">
                <button className="flex justify-center items-center ">
                    <BackArrow/>
                    <p className="font-bold uppercase md:text-lg lg:text-3xl stroke-black transition duration-500 hover:stroke-gray-400">Back</p>
                </button>
            </div>
        </div>
    )
}

function BackArrow() { 
    return ( 
        <svg  className="stroke-black transition duration-500 hover:stroke-gray-400 hover:-translate-x-4" viewBox="0 0 200 200" width={70} xmlns="http://www.w3.org/2000/svg">
            <line strokeWidth={6}  x1="50" y1="100" x2="150" y2="100"></line>
            <line strokeWidth={6}  x1='50' y1='100' x2='100' y2= '50'></line>
            <line strokeWidth={6}  x1='50' y1='100' x2='100' y2= '150'></line>
        </svg>
    )
}