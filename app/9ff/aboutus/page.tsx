
import ImageChanger from "../imageSlider"

export default function AboutUsPage() { 
    return ( 
        <div className="flex flex-col mt-32 w-full md:w-3/4 mx-auto relative mb-12">
            <div className="h-48 md:h-96 xl:h-[600px] absolute w-full mx-auto left-1/2 -translate-x-1/2">
                    <img className="w-full h-full object-cover" src={'/9ff/aboutus/aboutus1.jpg'}></img>
            </div>
            <div className="flex flex-col space-y-8  bg-slate-200 z-40 mt-48 md:mt-96 xl:mt-[632px]">
                <div className="w-auto bg-white h-auto flex flex-col justify-center items-center pt-4 z-50">
                        <p className="p-2 px-4 bg-[#C7C1A1] text-xl z-30 text-white">Above</p>
                        <p className="w-2/3 md:w-1/2 mx-auto text-center mb-4 py-4 border-2 border-[#C7C1A1] text-3xl px-20 -translate-y-4 font-bold">9FF</p>
                </div>
                <div className="flex flex-col text-left space-y-4 z-50 bg-white p-8">
                    <p className="font-bold text-4xl">9FF GERMAN ENGINEERING</p>
                    <p className="italic text-lg"> With attention to detail we achieve impressive performance</p>
                    <p>Are you looking for a fast and individual sports car? Then you've come to the right place! Our team is always developing new products with the highest technical standards, so that you as a customer can only expect the best from us. We don't build "The Car", we build "Your Car".</p>
                    <p>Through years of development work, 9FF has succeeded in establishing itself on the market as a world-famous, TÜV-certified specialist for all types of vehicle conversions with a large product range.</p>
                    <p> We hope you enjoy our homepage and look forward to speaking with you personally!</p>
                </div>
                <div className="relative w-full h-56 md:h-96 lg:h-[500px]" style={{backgroundImage: 'url("/9ff/aboutus/aboutus2.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col h-full w-full space-y-8 md:text-3xl transition delay-75 duration-500 hover:bg-gray-600  bg-gray-600 md:bg-transparent bg-opacity-80  hover:bg-opacity-50 text-white justify-center uppercase items-center">
                            <p className=" font-bold">Performance & Aesthetic Invididuality</p>
                            <p>Let's disucss your 9ff</p>
                            <button className="uppercase p-4 border-white border-2 bg-[#211F1F] text-base transition delay-75 duration-300 hover:bg-white hover:text-[#211F1F]">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 justify-around bg-white p-8 md:pr-48">
                    <p className="text-4xl uppercase font-bold">Our mission</p>
                    <p >9FF is internationally known for fast, street-legal sports cars. Our aim will always remain to build world record vehicles. But power and performance is only one side of 9FF. On the other hand, 9FF stands for aesthetics and individuality. Following this, 9FF offers a complete program for individualization. 9FF makes sports cars even more personal and sporty and offers exclusive and sophisticated products for this purpose.</p>
                    <p >9FF also stands for uncompromising quality - combined with German engineering - and the guarantee of a vehicle manufacturer approved by the Federal Motor Transport Authority.</p>
                    <p className="py-8">That's why driving a 9FF is something special.</p>
                </div>
                <div className="flex flex-col justify-around bg-white p-8 space-y-8">
                    <div className="flex flex-col items-center justify-between space-y-8 my-4">
                        <p className="text-3xl font-bold ">The 9FF Team</p>
                        <p className="italic">Extraordinary performance can only be achieved with extraordinary people</p>
                    </div>
                    <p>At the head of 9FF is the “Brain”: Jan Fatthauer. He perfected his engineering knowledge in the field of vehicle technology to such an extent that today he is one of the few, if not the only, “engine artists” in the world who can get well over 1,000 horsepower out of a series engine.</p>
                    <p>His young team at 9FF consists of highly motivated engineers, talented coachbuilders and gifted automotive engineers. Master craftsmen, hard-working journeymen and apprentices. And they all live the same dream: to make everything a little better.</p>
                </div>
                <div className="relative w-full h-48 md:h-56 lg:h-[280px]" style={{backgroundImage: 'url("/9ff/aboutus/aboutus3.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}/>
                <div className="grid md:grid-cols-5 gap-x-4">
                    <div className="md:col-span-3 flex flex-col bg-white text-left space-y-4 p-8  text-sm">
                        <p className="uppercase font-bold text-3xl">Records</p>
                        <p>9FF continually sets new records and inspires the world of car fans.
                        With a total of 8 world records in the past 10 years, 9FF holds a global leading position in the refinement of sports cars. And the fact that the vehicles can drive to the test track on their own axle is part of the basic philosophy of 9FF: they should be completely reliable, durable and, above all, suitable for road use.</p>
                        {recordsArray.map((e) => { 
                            return <p className="pl-2 "> <span className="font-bold">-</span> {e}</p>
                        })}
                    </div>
                    <div className="md:col-span-2 md:h-auto h-60">
                        <ImageChanger maxCount={7} dir={"aboutus/imageChanger/"}/>
                    </div>
                </div>
                <div className="relative w-full h-48 md:h-56 lg:h-[280px]" style={{backgroundImage: 'url("/9ff/aboutus/aboutus4.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPositionY: '30%'}}/>
                <div className="flex flex-col p-8 bg-white space-y-4">
                    <p className="font-bold text-5xl italic tracking-wider">Partners</p>
                    <div className="grid grid-cols-3 gap-16">
                        {Array.from({length:4}).map((_,i) => { 
                            return (
                                <div className="w-full h-full">
                                    <img className="w-full h-full object-contain" src={`/9ff/aboutus/partners/${i}.jpg`}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const recordsArray = [
    "2020: Fastest 997 in the half mile",
    "2019: Fastest Zuffenhausener from 200 to 300 km/h in 4.08 seconds",
    "2018: Fastest road-legal 991 from 0 to 300 km/h in 13.1 seconds",
    "2014: 0 - 300 in 12.9 seconds",
    "2013: Fastest 997 Turbo with bolt-on kit: 376 km/h",
    "2013: 9FF GT9 Vmax | With its 1,400 hp and a top speed of 437 km/h, 9FF breaks its own world record again with the 9FF GT9 Vmax.",
    "2013: 9FF G-Tronic | Acceleration from 0 to 300 km/h in 13 seconds",
    "2012: 9FF G-Tronic | Route record in Oschersleben",
    "2011: 9FF GTurbo900 | Fastest alternative fuel vehicle in the world - 386 km/h",
    "2009: 9FF GT 63 | Fastest alternative fuel vehicle in the world - 347 km/h",
    "2008: 9FF GT9 | Fastest road-legal vehicle in the world - 409 km/h",
    "2007: 9FF CT 78 | Fastest alternative fuel vehicle in the world - 336.2 km/h",
    "2006: 9FF TRC-85 | Fastest road-legal convertible in the world - 380 km/h",
    "2005: 9FF V400 | Fastest road-legal vehicle in the world - 388 km/h",
    "2004: 9FF 9F-T6 | Fastest Porsche in Nardo - 372 km/h"
  ];
  