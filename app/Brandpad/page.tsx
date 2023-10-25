import FontGrid from "./fontGrid";
import Header from "./header";
import Intro from "./intro";
import IntroSection from "./introSection";
import IntroVideo from "./introSection"; import Navbar from "./navbar";


export default function BrandpadApp() {
    return (
        <div id="main" className="h-auto w-auto overflow-x-clip">
            <Header />
            <Navbar />
            <Intro />
            <IntroSection />
            <FontGrid />

        </div>
    )
}