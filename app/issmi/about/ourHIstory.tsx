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
            <div className="flex flex-col bg-green-600">
                <p className="my-5 text-6xl text-white">Our History</p>
                <div className="historyGrid">
                    <div>Testing</div>
                    <div>testing</div>
                    <div className="row-span-3 flex space-y-4 flex-col">
                        <p className="font-semibold text-2xl">2017</p>
                        <p>ISSIMI, Inc was founded with a mission to bring trust and transparency to the previously opaque and costly secondary market for collector cars. Since our establishment, we have been dedicated to providing a delightful and transparent experience for buyers and sellers. Our first US location opened in Northern California, and we have since grown to serve a global market.</p>
                        <p>Porsche GT1 transacts on our marketplace, from Italy to California.</p></div>
                    <div >Testing</div>
                    <div >Testing</div>


                </div>

            </div>
        </div>
    )
}