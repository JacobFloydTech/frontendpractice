import OurHistorySVG from "./ourHistorySVG"

export default function OurHistoryGrid() {
    return (
        <div id='historyGridContainer' className="md:grid-cols-history-large grid-cols-history-small grid relative  ">
            <div className="justify-around flex-col mt-60 space-y-12 px-4 hidden md:flex">
                <History2019 mobile={false} />
                <History2021 mobile={false} />
            </div>
            <div >
                <OurHistorySVG />
            </div>
            <div className=" flex justify-around flex-col space-y-16 2xl:space-y-24 px-4 text-left">
                <div id='2017' className="flex flex-col space-y-4 2xl:space-y-8 md:w-2/3 ">
                    <p className="font-semibold text-2xl 2xl:text-4xl ">2017</p>
                    <p className="text-left md:text-lg 2xl:text-2xl">ISSIMI, Inc was founded with a mission to bring trust and transparency to the previously opaque and costly secondary market for collector cars. Since our establishment, we have been dedicated to providing a delightful and transparent experience for buyers and sellers. Our first US location opened in Northern California, and we have since grown to serve a global market.</p>
                    <p className="text-left md:text-lg 2xl:text-2xl">Porsche GT1 transacts on our marketplace, from Italy to California.</p>
                </div>
                <History2019 mobile={true} />
                <div id='2020' className="flex flex-col space-y-4 2xl:space-y-8 md:w-2/3 ">
                    <p className="font-semibold text-2xl 2xl:text-4xl">2020</p>
                    <p className="text-left text-lg 2xl:text-2xl">ISSIMI expands its services with the launch of ISSIMI Meccanica, a team of experts specializing in complex servicing, engineering, and race preparation for high-end sports cars. With deep experience in Ferrari, Pagani, and Porsche, the team has opened its first US location to offer its services to clients.</p>
                    <p className="text-left text-lg 2xl:text-2xl">The launch of ISSIMI Meccanica has proved to be a success, with revenue doubling from the previous year. Clients can now benefit from the expertise and experience of the ISSIMI team not only when buying or selling their cars, but also when it comes to maintaining, upgrading, and racing their vehicles.</p>
                </div>
                <History2021 mobile={true} />
                <div id='2022' className="flex flex-col space-y-4 2xl:space-y-8 md:w-2/3">
                    <p className="font-semibold text-2xl 2xl:text-4xl">2022</p>
                    <p className="text-left text-lg 2xl:text-2xl">ISSIMI expands to Italy with the launch of ISSIMI Italia and the opening of its new showroom in Verona. The company becomes fully operational in Italy, offering its services to local collectors and enthusiasts.</p>
                    <p className="text-left text-lg 2xl:text-2xl">Two Pagani Huayra BCs transacts on our marketplace in Italy.</p>
                </div>
            </div>
        </div>
    )
}

function History2019({ mobile }: { mobile: boolean }) {
    return (
        <div id={mobile ? "mobile2019" : "2019"} className={"space-y-4 2xl:space-y-8  md:float-right md:ml-auto md:w-2/3 text-left" + (mobile ? " flex flex-col md:hidden text-left" : 'hidden md:flex md:flex-col text-right')}>
            <p className="font-semibold text-2xl 2xl:text-4xl">2019</p>
            <p className="text-lg 2xl:text-2xl">ISSIMI, Inc continues to grow as a trusted platform for buying and selling collector cars. As part of our commitment to providing valuable content and insights to our community, we launched our own YouTube channel.</p>
            <p className="text-lg 2xl:text-2xl">Revenue doubles from the first year, reflecting the trust and confidence that our customers have in us as their preferred partner. </p>
            <p className="text-lg 2xl:text-2xl">Ferrari 333 SP transacts on our marketplace, from Netherlands to Denmark.</p>
        </div>
    )
}

function History2021({ mobile }: { mobile: boolean }) {
    return (
        <div id={mobile ? "mobile2021" : "2021"} className={" space-y-4 2xl:space-y-8  md:float-right md:ml-auto md:w-2/3 " + (mobile ? " flex flex-col md:hidden text-left" : 'hidden md:flex md:flex-col text-right')} >
            <p className="font-semibold text-2xl 2xl:text-4xl">2021</p>
            <p className="text-lg 2xl:text-2xl">ISSIMI Factory begins collaborations with prestigious car manufacturers Koenigsegg and Rimac, reflecting our commitment to full car collection services. As our reputation for quality and transparency continues to spread, revenue grows 63% from the previous year.</p>
            <p className="text-lg 2xl:text-2xl">McLaren F1 transacts on our marketplace, from UK to California.</p>
        </div>
    )
}