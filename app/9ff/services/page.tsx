import ImageChanger from "../imageSlider"
import ServiceOptions from "./menu"



export default function ServiceHome() {

    return (
        <div className="max-w-screen h-auto flex flex-col">
            <div className="fixed mt-4">
                <img src='/9ff/services/main.jpg'></img>
            </div>

            <div className=" h-auto w-full bg-gray-200 z-20 md:px-12 mt-[50%] ">
                <div className="w-auto bg-white h-auto flex flex-col justify-center items-center pt-4">
                    <p className="p-4 bg-slate-200 text-3xl z-30">Services</p>
                    <p className="p-4 px-6 border-2 border-slate-200 text-2xl -translate-y-4">Services for our customers</p>
                </div>
                <div className="w-auto h-auto flex flex-col bg-white my-4">
                    <div className="flex justify-center items-center flex-col text-center my-4">
                        <p className="text-3xl font-semibold">WHAT 9FF DOES</p>
                        <p>German engineering is the benchmark that we <br></br> always use at 9FF.</p>
                    </div>
                    <div className="flex flex-col text-left justify-around space-y-4 my-4 px-4 md:pl-12">
                        <p>9FF is - we are proud of this - one of the smaller German vehicle manufacturers approved by the Federal Motor Transport Authority. We do not build vehicles in<br></br> series. The individual customer wishes are always our priority. We refine your sports car according to your individual ideas or you choose one of our
                            <br></br>9FF Supercars.</p>
                        <p>It is our many satisfied customers from home and abroad who, with all modesty, have made us at 9FF a little bigger and continuously better over the past 15 years <br></br> due to their high standards.</p>
                        <p>Be inspired by our services.</p>
                    </div>
                </div>
                <div className="bg-white my-4 flex flex-col space-y-8 px-4 md:pl-12 py-8">
                    <p className="text-3xl font-semibold tracking-wide">Services by vehicle</p>
                    <p>We are experts for individual vehicle tuning, performance improvements, visual vehicle refinements, optimizations, repairs and service for all sports cars<br></br> from Zuffenhausen. Here you will find an insight into our services sorted by model.</p>
                    <div className="flex flex-col md:flex-row text-2xl justify-around w-full md:w-2/3 md:ml-24">
                        <img className="w-42 md:w-60 2xl:w-72 mx-auto" src="/9ff/services/chooseModel.png"></img>
                        <ServiceOptions />
                    </div>
                </div>
                <Grid />
            </div>

        </div>
    )
}

function Grid() {
    return (
        <div className="grid md:grid-cols-2 h-auto w-auto bg-gray-200 gap-4 grid-rows-3 gap-y-8 servicesGrid">
            <div className="bg-white flex md:space-y-8 space-y-2 flex-col p-4 md:p-8  md:text-lg text-sm">
                <p className="font-semibold md:text-3xl uppercase">Individual Vehicle Tuning</p>
                <p>9FF stands for performance improvements, vehicle conversions, <br></br> vehicle optimizations, engine and transmission conversions <br></br>according to individual customer requirements.</p>
                <p>Thanks to 9FF's many years of experience as a sports car tuner in the high-performance sector, we are happy to advise you and tailor the individual components of your 9FF vehicle to suit you. If you wish, we can also make your sports car unique inside and out.</p>
                <div className="justify-end flex -translate-y-2  w-full">
                    <div className="flex items-center cursor-pointer">
                        <span className="md:text-lg font-semibold text-right mr-4 ">Contact us <br className="hidden md:block"></br> today</span>
                        <br></br>
                        <img src="/9ff/arrow.svg" className='h-10'></img>
                    </div>
                </div>
            </div>
            <div className="">
                <ImageChanger maxCount={1} dir={"services/imageChanger/"} />
            </div>
            <div className="  ">
                <img className="object-cover w-full h-full" src={'/9ff/services/9ffservicesblack.jpg'}></img>
            </div>
            <div className=" flex flex-col bg-white p-4 md:p-8  space-y-8">
                <p className="text-xl md:text-3xl font-semibold">9FF TUNING PARTS</p>
                <p className="text-sm md:text-lg">The tuning parts from 9FF are unparalleled on the market. Because we at 9FF pay attention to performance, all the car parts we offer are resilient, high quality and real special features.</p>
                <p className="text-sm md:text-lg">We are currently setting up 9FF parts sales through our shop to make your purchase convenient.
                    <br></br>Take a look now.</p>
            </div>
            <div className=" flex flex-col space-y-8  p-4 md:p-8  bg-white text-lg">
                <p className="text-xl md:text-3xl font-semibold uppercase">Workshop & Service</p>
                <p className="text-sm md:text-lg">9FF not only refines your vehicle, but of course also conscientiously carries out its care, maintenance and repairs, including acceptance by officially certified testing institutions.</p>
                <p className="text-sm md:text-lg">Of course, this applies not only to 9FF vehicles, but also to all series vehicles within our brand focus.</p>
            </div>
            <div className="">
                <img className="object-cover w-full h-full" src="/9ff/services/workshop.jpg"></img>
            </div>
        </div>
    )
}