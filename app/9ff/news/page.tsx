import { Footer } from "../homePage";
import PDF from "./pdf";

export default function NewsPage() { 
    return ( 
        <div className="flex mt-32 w-full md:w-3/4 flex-col mx-auto px-4 md:px-0 space-y-4 py-4">
            <img className="h-[650px]" src="/9ff/news/main.jpg"/>
            <div className="flex flex-col justify-center items-center w-full bg-white uppercase p-4">
                <p className="bg-[#C7C1A1] p-2 px-4 text-2xl">News</p>
                <p className="border-[#C7C1A1] border-2 p-4 font-bold md:text-lg lg:text-xl xl:text-3xl w-full md:w-2/3 lg:w-1/2 text-center -translate-y-4 ">All news from 9ff</p>
            </div>
            <div className="bg-white p-2 md:p-4 lg:p-8">
                <p className="font-bold uppercase text-lg md:text-3xl">News & press</p>
                <p className="my-4 md:text-lg">In our news area, interested parties and the press will find all relevant news and background information about 9FF, as well as current press material, photos and videos. We'll also keep you up to date on exciting events that 9FF is taking part in and what else there is to report about 9FF.</p>
            </div>
            <PDF/> 
            
        </div>
    )
}