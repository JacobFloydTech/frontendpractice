import { useEffect } from "react";
import Background from "./background";
import ExampleWebsites from "./exampleWebsites";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function Page() { 
    return ( 
        <div className="h-auto absolute ">
            <div className="absolute h-full -z-50">
                <Background/>
            </div>
            <Portfolio />
            <ExampleWebsites />
            <Skills/>
        </div>
    )
}
