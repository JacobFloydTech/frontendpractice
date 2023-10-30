import SellingProcess from "./sellingProcess"
import SellingStats from "./sellingStats"

export default function SellPage() {
    return (
        <div className="flex w-auto h-auto flex-col mt-24 bg-white">
            <Header />
            <Intro />
            <SellingStats />
            <WhySellWithUs />
            <SellingProcess />
        </div>
    )
}

function Header() {
    return (
        <div className="relative w-full h-32 md:h-60 2xl:h-96 ">
            <img className="w-full h-full top-0 left-0 absolute object-cover" src="/issmi/sellingPage/header.jpg"></img>
            <div className="w-full h-full z-30 top-0 left-0 absolute bg-black bg-opacity-20 flex items-center justify-center flex-col">
                <p className="text-white text-3xl md:text-6xl">Selling made simple</p>
            </div>
        </div>
    )
}

function Intro() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5  my-12 ">
            <div className="flex flex-col text-left  md:px-12 py-4 col-span-2">
                <p className="text-4xl"> Expert Management of Your Extraordinary Machines</p>
                <p className="leading-relaxed my-12 text-lg pr-12">Sell your car with ease and confidence, knowing it's in the hands of people you can trust. We offer a full-service selling experience, from pickup to delivery, and our team of experts will handle the entire process for you. With a focus on transparency and communication, we keep you informed every step of the way to ensure a smooth and hassle-free sale.</p>
            </div>
            <div className="px-12 py-4 col-span-3">
                <img className="rounded-xl" src="/issmi/sellingPage/management.jpg"></img>
            </div>
        </div>
    )
}

function WhySellWithUs() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-sell w-4/5 mx-auto py-4">
            <div className="relative">
                <img className="h-full object-cover top-0 absolute left-0 w-full px-12" src="/issmi/sellingPage/sellwithus.jpg"></img>
            </div>
            <div className="flex flex-col justify-between space-y-8 leading-loose">
                <p className="text-6xl">Why sell with us?</p>
                <p className="font-bold text-3xl">Get the most with your listing.</p>
                <p>Our platform empowers the global collector market to establish optimum pricing for your vehicle through real time supply and demand. The process is open and transparant, free from hidden reserves or market distortions.</p>
                <p className="font-bold text-3xl">You are always in control</p>
                <p>We understand the importance of selling your car at the right time, especially in a fluctuating market. That's why we offer a no-pressure selling experience without any forced time frames or reserves. Our team will work with you to ensure your car is listed in the best possible light, and we'll provide guidance on the optimal sales strategy for your specific vehicle. Our commitment to transparency and fairness means you can trust us to have your best interests in mind.</p>
                <p className="font-bold text-3xl">We make it easy.</p>
                <p>When you choose to sell with us, our white-glove service will take care of everything. We collect your vehicle, inspect it, create high-quality content, and prepare it for auction.</p>
            </div>
        </div>
    )
}