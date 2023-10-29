import { useEffect } from "react"

import NewHistorySVG from "./ourHistorySVG"
export default function OurHistory() {
    return (
        <div className="flex w-full h-auto flex-col">
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
            <div className="flex flex-col mx-12 bg-[#183029] text-white">
                <p className="my-5 text-6xl ">Our History</p>
                <div id='historyGridContainer' className="historyGrid relative">

                    <div className="flex  justify-around flex-col mt-60 space-y-12 px-4">
                        <div id='2019' className="flex flex-col space-y-4">
                            <p className="float-right ml-auto w-2/3 font-semibold text-2xl text-right">2019</p>
                            <p className="float-right ml-auto w-2/3 text-right text-lg">ISSIMI, Inc continues to grow as a trusted platform for buying and selling collector cars. As part of our commitment to providing valuable content and insights to our community, we launched our own YouTube channel.</p>
                            <p className="float-right ml-auto w-2/3 text-right text-lg">    Revenue doubles from the first year, reflecting the trust and confidence that our customers have in us as their preferred partner. </p>
                            <p className="float-right ml-auto w-2/3 text-right text-lg">Ferrari 333 SP transacts on our marketplace, from Netherlands to Denmark.</p>
                        </div>
                        <div id='2021' className="flex flex-col space-y-4">
                            <p className="float-right ml-auto w-2/3 font-semibold text-2xl">2021</p>
                            <p className="float-right ml-auto w-2/3 text-right text-lg">ISSIMI Factory begins collaborations with prestigious car manufacturers Koenigsegg and Rimac, reflecting our commitment to full car collection services. As our reputation for quality and transparency continues to spread, revenue grows 63% from the previous year.</p>
                            <p className="float-right ml-auto w-2/3 text-right text-lg">McLaren F1 transacts on our marketplace, from UK to California.</p>
                        </div>
                    </div>

                    <div >
                        <NewHistorySVG />
                    </div>
                    <div className=" flex justify-around flex-col space-y-12 px-4">
                        <div id='2017' className="flex flex-col space-y-4">
                            <p className="w-2/3 font-semibold text-2xl">2017</p>
                            <p className="w-2/3 text-left text-lg">ISSIMI, Inc was founded with a mission to bring trust and transparency to the previously opaque and costly secondary market for collector cars. Since our establishment, we have been dedicated to providing a delightful and transparent experience for buyers and sellers. Our first US location opened in Northern California, and we have since grown to serve a global market.</p>
                            <p className="w-2/3 text-left text-lg">Porsche GT1 transacts on our marketplace, from Italy to California.</p>
                        </div>
                        <div id='2020' className="flex flex-col space-y-4">
                            <p className="w-2/3 font-semibold text-2xl">2020</p>
                            <p className="w-2/3 text-left text-lg">ISSIMI expands its services with the launch of ISSIMI Meccanica, a team of experts specializing in complex servicing, engineering, and race preparation for high-end sports cars. With deep experience in Ferrari, Pagani, and Porsche, the team has opened its first US location to offer its services to clients.</p>
                            <p className="w-2/3 text-left text-lg">The launch of ISSIMI Meccanica has proved to be a success, with revenue doubling from the previous year. Clients can now benefit from the expertise and experience of the ISSIMI team not only when buying or selling their cars, but also when it comes to maintaining, upgrading, and racing their vehicles.</p>
                        </div>
                        <div id='2022' className="flex flex-col space-y-4">
                            <p className="w-2/3 font-semibold text-2xl">2022</p>
                            <p className="w-2/3 text-left text-lg">ISSIMI expands to Italy with the launch of ISSIMI Italia and the opening of its new showroom in Verona. The company becomes fully operational in Italy, offering its services to local collectors and enthusiasts.</p>
                            <p className="w-2/3 text-left text-lg">Two Pagani Huayra BCs transacts on our marketplace in Italy.</p>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}




function HistorySVG() {
    return (
        <svg height='100%' width='100%' preserveAspectRatio="none" viewBox='0 0 50 460' xmlns="http://www.w3.org/2000/svg">
            <circle stroke='#4C665E' strokeWidth="3" cx="50%" cy="20" r="8" fill="none" />
            <line x1="50%" x2="50%" y1="28" y2="100" stroke='#4C665E' strokeWidth="3" />
            <circle stroke='#4C665E' strokeWidth="3" cx="50%" cy="108" r="8" fill="none" />
            <line x1="50%" x2="50%" y1="116" y2="200" stroke='#4C665E' strokeWidth="3" />
            <circle stroke='#4C665E' strokeWidth="3" cx="50%" cy="208" r="8" fill="none" />
            <line x1="50%" x2="50%" y1="216" y2="298" stroke='#4C665E' strokeWidth="3" />
            <circle stroke='#4C665E' strokeWidth="3" cx="50%" cy="305" r="8" fill="none" />
            <line x1="50%" x2="50%" y1="312" y2="362" stroke='#4C665E' strokeWidth="3" />
            <circle stroke='#4C665E' strokeWidth="3" cx="50%" cy="369" r="8" fill="none" />
            <line x1="50%" x2="50%" y1="377" y2="451" stroke='#4C665E' strokeWidth="3" />
            <line x1='50%' x2='25%' y1='451' y2='420' stroke='#4C665E' strokeWidth='3' />
            <line x1='50%' x2='75%' y1='451' y2='420' stroke='#4C665E' strokeWidth='3' />
        </svg>
    )
}