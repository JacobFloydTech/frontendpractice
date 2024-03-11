'use client'

export default function ExampleWebsites() { 
    return ( 
        <div id='websiteContainer' className="grid md:grid-cols-2 w-3/4 md:w-2/3 mx-auto gap-14 pt-12">
            <RisosEnterprisesWebsite />
            <CarMarket/>
        </div>
    )
}

function RisosEnterprisesWebsite() { 
    const handleOver = () => {
        document.getElementById('risosCover')?.classList.add('animate');
    } 
    
    const handleLeave = () => document.getElementById('risosCover')?.classList.remove('animate');
    return (
        <div onMouseEnter={() => handleOver()} onMouseLeave={() => handleLeave()} className="website rounded-3xl relative transition-all duration-150 hover:scale-[102%] hover:-translate-y-2 border-2 overflow-hidden">
            <img src="risosenterprisessnapshot.jpeg" />
            <RisosHoverCover/>
        </div>
    )
    function RisosHoverCover() { 
        return ( 
            <div id="risosCover" className="bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center w-full h-full absolute top-0 translatexfull left-0 z-50">
                <p className="text-white text-2xl text-center py-4 font-bold">RisosEnterprises</p>
                <p className="text-white text-2xl text-center py-4 font-bold">Built using Next JS, GSAP, Tailwind, and Google Cloud</p>
            </div>
        )
    }
}

function CarMarket() { 
    const handleOver = () => {
        document.getElementById('carCover')?.classList.add('animate');
    } 
    
    const handleLeave = () => document.getElementById('carCover')?.classList.remove('animate');
    
    return ( 
        <div onMouseEnter={() => handleOver()} onMouseLeave={() => handleLeave()} className="website rounded-3xl relative transition-all duration-150 hover:scale-[102%] hover:-translate-y-2  border-2 overflow-hidden">
            <img src="carmarketsnapshot.jpeg" />
            <CarkMarketCover/>
        </div>
    )
    function CarkMarketCover() { 
        return ( 
            <div id="carCover" className="bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center w-full h-full absolute top-0 translatexfull left-0 z-50">
                <p className="text-white text-2xl text-center py-4 font-bold">CarMarket.com</p>
                <p className="text-white text-2xl text-center py-4 font-bold">A mockup site built using SvelteKit, Tailwind, Express, Puppeteer, Firebase, and AWS</p>
            </div>
        )
    }
}