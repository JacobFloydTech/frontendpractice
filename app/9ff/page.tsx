import PorscheNavbar, { GridContent, ImageSlider, Footer } from "./homePage"


export default function PorscheTunerPage() {
    return (
        <div >

            <div className="w-full relative">

                <ImageSlider />

                <div className="my-4 flex flex-col justify-center items-center h-full">



                    <p className="text-xl bg-stone-500 p-3 z-20 mt-4">Welcome</p>
                    <p className="text-2xl border-stone-500 border-2 p-4 pt-6 transform -translate-y-5">9FF GERMAN ENGINEERING</p>

                </div>
                <GridContent />
                <Footer />
            </div>
        </div>
    )
}