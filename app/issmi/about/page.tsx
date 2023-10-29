import ImageSlider from "./imageSlider";
import IntroHero from "./introAbout";
import OurHistory from "./ourHIstory";
import Navbar from "../navbar";


export default function Page() {
    return (
        <div className="w-full h-auto bg-gray-200">

            <div className="pt-32 flex flex-col justify-center w-full items-center text-center">
                <p className="text-5xl">Take a look under the hood</p>
                <p className="pt-4 text-2xl">Learn about what drives our passion to be the <br></br> trusted partner for collectors and why people choose ISSIMI.</p>

                <img className="px-48 py-12 hidden md:block" src="/issmi/aboutHero.jpg"></img>

                <IntroHero />
                <ImageSlider maxCount={6} src="/issmi/imageSlider/" reverse={false} />
                <ImageSlider maxCount={6} src="/issmi/imageSliderReverse/" reverse={true} />
                <OurHistory />
            </div>
        </div>
    )
}