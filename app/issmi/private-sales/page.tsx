

export default function PrivateSalesPage() {
    return (
        <div className="w-full flex flex-col h-auto mt-24 ">
            <div style={{ background: 'url("/issmi/privateSales/main.jpg")', backgroundPositionY: '65%', backgroundSize: 'cover' }} className="w-full aspect-video h-32 md:h-64 2xl:h-80 relative">
                <div className="top-0 left-0 w-full h-full bg-black bg-opacity-60 bg-blend-screen flex items-center justify-center">
                    <p className="text-white text-xl md:text-6xl 2xl:text-7xl font-bold">Elevate your collection</p>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col bg-[#1F1F1F] text-white text-left items-center">
                <div className="w-1/2 my-12 space-y-8 tracking-wide leading-8">
                    <p className="font-semibold text-4xl">Private Sales Benefits</p>
                    <p>Join ISSIMI Private Sales to get access to a hand-picked selection of rare and unique automobiles that are unavailable to the general public. You'll also be invited to exclusive events and receive a discreet and personalized selling experience.</p>
                    <p>Becoming a Private Sales member means more than just access to exclusive cars. Our full-service, white-glove approach ensures that every aspect of the transaction process is expertly managed. You'll get direct access to our team to take care of everything from complex global vehicle searches to collection management and service.</p>
                </div>
                <Grid />
            </div>

        </div>
    )
}

function Grid() {
    return (
        <div className="privateSalesGrid w-1/2 gap-y-4">
            <p className="font-semibold col-start-2 text-center text-gray-400">View all cars</p>
            <p className="font-semibold text-center">Registered</p>
            <p className="font-semibold text-center text-[#987404]">Private Sales Member</p>
            <BorderBottom />
            <p>View all cars</p>
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <BorderBottom />
            <p>View inspection reports</p>
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <BorderBottom />
            <p>View vehicle history</p>
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <BorderBottom />
            <p>Place offer/bid</p>
            <Dash />
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <BorderBottom />
            <p>Get auciton updates</p>
            <Dash />
            <SVGTick color={'#FFFFFF'} />
            <SVGTick color={'#FFFFFF'} />
            <BorderBottom />
            <p>Access to special cars not listed anywhere</p>
            <Dash />
            <Dash />
            <SVGTick color={'#987404'} />
            <BorderBottom />
            <p>Collection management support</p>
            <Dash />
            <Dash />
            <SVGTick color={'#987404'} />
            <BorderBottom />
            <p>Access to ISSIMI staff for VIP support in transactions	</p>
            <Dash />
            <Dash />
            <SVGTick color={'#987404'} />
            <BorderBottom />
            <p>Import/export support</p>
            <Dash />
            <Dash />
            <SVGTick color={'#987404'} />
            <BorderBottom />
            <p>Invitation to exclusive events</p>
            <Dash />
            <Dash />
            <SVGTick color={'#987404'} />
            <BorderBottom />
            <p>Exclusive ISSIMI merch</p>
            <Dash />
            <Dash />
            <SVGTick color={'#987404'} />
            <BorderBottom />
        </div>
    )
}

function BorderBottom() {
    return (
        <div className="col-span-4 h-[1px] w-full bg-white">

        </div>
    )
}

function SVGTick({ color }: { color: string }) {
    return (
        <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill={color} height="15" width="15" version="1.1" id="Capa_1" viewBox="0 0 490 490" >
                <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
            </svg>
        </div>
    )
}

function Dash() {
    return (
        <div className="flex items-center justify-center">
            <svg width={15} height={15}>
                <rect x='50%' y='50%' width='80%' height='10%' fill="white" />
            </svg>
        </div>
    )
}