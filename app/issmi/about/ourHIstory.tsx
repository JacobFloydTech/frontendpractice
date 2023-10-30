
import OurHistoryGrid from "./ourHistoryGrid"
import { data } from "./teamdata"

import Person from "./person"
import ContactUs from "./contactUs"
export default function OurHistory() {
    return (
        <div className="flex w-full h-auto flex-col my-12">
            <div className="grid md:grid-cols-2 mx-4 p-4 text-center justify-center items-center">
                <div className="space-y-2 md:p-4 p-2">
                    <p className="text-5xl md:text-7xl">100+ Years</p>
                    <p className="text-3xl">of combined experience</p>
                </div>
                <div className="space-y-8 md:p-12 p-4 flex justify-around flex-col text-left text-lg">
                    <p>We're not just another online auction. We offer a full white-glove service that makes growing your collection easy and enjoyable. With over 100 years of combined luxury automotive experience, we take care of everything from preparing a seller's vehicle for sale to coordinating transportation for the buyer, ensuring every transaction is seamless.</p>
                    <p>On top of transaction management, we also offer global searches for exceptional cars worldwide, operate a full-service workshop for routine maintenance and full restorations, offer allocations for exclusive manufacturers, and host regular events for our ISSIMI community.</p>
                    <p>Our goal is to make every part of the buying and selling experience as smooth and stress-free as possible. At ISSIMI, we believe that growing your collection should be a source of joy and pride, and we do everything we can to make that a reality for our clients.</p>
                </div>
            </div>
            <div className="flex flex-col md:mx-12 2xl:mx-24 bg-[#183029] text-white p-8">
                <p className=" text-6xl ">Our History</p>
                <OurHistoryGrid />

            </div>
            <OurGoals />
            <MeetTheTeam />
            <Passion />
            <ContactUs />
        </div>
    )
}


function OurGoals() {
    return (
        <div className="flex items-center text-left justify-around flex-col w-full md:w-1/2 my-12 space-y-8 text-lg px-4 mx-auto">
            <p>The niche, $30b industry of collectable and low-production cars has seen little innovation in the past several decades. It’s one that lacked transparency, dependent on traditional dealers, brokers, and auction houses with unnecessarily high fees.</p>
            <p>Did you know an auction house can make up to 20% on each transaction? This is one of many reasons the collector car industry is stuck in the past.</p>
            <p className="font-semibold text-green-600 text-3xl">We’re setting out to change that.</p>
            <p>We believe our technological and operational excellence can decrease costs while increasing transparency into car quality, building trust between collectors. Give us a shot, and shop rare cars anywhere in the world from the comfort of your own home.</p>
        </div>
    )
}


function MeetTheTeam() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:mx-24  ">
            {data.map((person, i) => {
                return (
                    <Person member={person} key={i} />
                )
            })}
        </div>
    )
}


function Passion() {
    return (
        <div className="w-full md:w-5/6 aspect-video mx-auto relative">
            <div className="bg-opacity-[52%] bg-gray-800 bg-blend-soft-light w-full h-full top-0 left-0 absolute z-30 flex items-center justify-center">
                <div className="flex flex-col text-white md:w-2/5 w-full mx-2 md:space-y-8 space-y-2">
                    <p className="md:text-5xl text-xl">Turn your passion <br></br> into a career</p>
                    <p className="font-bold text-xs md:text-xl">We're looking for top talent to join us in our mission of making ISSIMI the best place to buy and sell collector cars. Whether you are in the automotive industry or are an enthusiast in another industry, we want to hear from you.</p>
                    <button>Linked in - View all jobs</button>
                </div>
            </div>
            <img className="w-full h-full object-cover absolute z-20" src="/issmi/aboutPassion.jpg"></img>
        </div>
    )
}
