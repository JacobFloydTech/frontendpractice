import PorscheNavbar, { ImageSlider } from "./homePage"


export default function PorscheTunerPage() {
    return (
        <div className="w-full h-full">
            <PorscheNavbar />
            <div className="flex mt-[10%] w-2/3 mx-auto h-full justify-center flex-col">
                <ImageSlider />
                <div>Classname he there</div>
            </div>
        </div>
    )
}