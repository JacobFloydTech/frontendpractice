'use client'

import Grid from "./grid"

export default function Page() { 
    return ( 
        <div id='main'>
            <Grid/>
            {Array.from({length: 4}).map((e) => <div className="h-screen w-full border-2 border-orange-500"/>)}
        </div>
    )
}

