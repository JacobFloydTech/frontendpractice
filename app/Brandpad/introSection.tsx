import BookDemo from "./bookDemo";
import FeaturesButton from "./featuresButton";

export default function IntroSection() {

    return (
        <div className="mx-auto max-w-screen-xl h-auto">
            <iframe className="w-screen h-screen overflow-hidden" src="https://player.vimeo.com/video/663642750?background=1"></iframe>
            <div className="w-1/2 float-right ml-auto flex flex-col pr-20 my-8">
                <p className="text-4xl">Create a digital brand <br></br>experience.</p>
                <p className="my-4">Brandpad is the brand platform where design studios and brand owners standardize their brand deliveries. Everything from creation to sharing and usage in one, dedicated place in the cloud. Accessible for everyone involved, beautifully designed by you.</p>
            </div>
            <BookDemo />
            <div className="grid-cols-4 grid w-2/3 gap-x-4 ml-4">
                <div className="my-2 font-bold">Streamline brand deliveries.</div>
                <div className="my-2 font-bold">Design & Customize</div>
                <div className="my-2 font-bold">Scale-up efficiency.</div>
                <div className="my-2 font-bold">Made for brand portfolios.</div>
                <div>Deliver your brand identities as interactive, digital experiences. Everything from creation to sharing, maintenance and brand usage in one system.</div>
                <div>With Brandpad you can turn brand identities into fully customized, digital guidelines, with all relevant specifications and assets. No coding required.</div>
                <div>Decrease the time spent on post-project support and remove confusion and versioning. Cultivate an up-to-date place for your brands.</div>
                <div>Brandpad helps revitalize old brands, maintain existing identities, and maximize new business. Design, organize, manage and update.</div>
            </div>
            <FeaturesButton />
        </div>
    )
}