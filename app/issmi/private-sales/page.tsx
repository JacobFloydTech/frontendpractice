

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
        <div className="grid grid-cols-privateSalesGrid gap-4">
            <div className="p-2 border-white border-2 col-start-2">View all cars</div>
            <div className="p-2 border-white border-2">Registered</div>
            <div className="p-2 border-white border-2">Private Sales Members</div>

        </div>
    )
}