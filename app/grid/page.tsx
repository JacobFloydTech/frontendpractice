import Background from "./background";
import ExampleWebsites from "./exampleWebsites";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function Page() { 
    return ( 
        <div>
            <div className="absolute -z-10  w-screen">
                <Background />
            </div>
            <Portfolio />
            <ExampleWebsites />
            <Skills/>
        </div>
    )
}