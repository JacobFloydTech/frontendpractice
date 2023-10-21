import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function PorscheNavbar() {
    return (
        <div className="flex fixed bg-white p-2 top-0 left-0 w-full h-24 border-black border-2 items-center justify-around  z-50">
            <div className="flex items-center ">
                <img src={'/9ff/logo.png'}></img>
                <img className="h-1/2 mx-4" src="/9ff/title.png"></img>
            </div>
            <div className="w-auto  flex justify-around space-x-6 text-lg font-semibold">
                <button>Home</button>
                <button>Services</button>
                <button>Supercars</button>
                <button>Shop</button>
                <button>Gallery</button>
                <button>About us</button>
                <button>News</button>
                <button>Contact</button>
            </div>
        </div>
    )
}


export function ImageSlider() {
    const ref = useRef<any>();
    useEffect(() => {
        main();
    }, [])

    async function main() {
        const height = Array.from(ref.current.children as HTMLImageElement[])[0].clientHeight;
        const el = document.getElementById('myImages');


        async function setDiv() {
            if (!el) { return }

            for (var i = 0; i < 5; i++) {
                const newElement = document.createElement('img');
                newElement.src = `/9ff/imageSlider/${i + 1}.jpg`;
                newElement.style.position = 'absolute';
                newElement.style.transform = `translateY(${(height * (i + 1))}px)`;
                newElement.style.height = '100%';
                newElement.style.width = '100%';
                el.appendChild(newElement);
            }
        }

        async function animate() {

            setInterval(() => {
                Array.from(el?.children as HTMLCollectionOf<HTMLElement>).forEach((e) => {
                    const offset = getTranslateY(e.style.transform)

                    if (offset <= height * -1) {
                        gsap.set(e, { translateY: `${height * 5}px` });
                    }
                    gsap.to(e, { translateY: `-=${height}px`, duration: 2 })


                })
            }, 2200)
        }

        await setDiv();
        await animate();

    }

    function getTranslateY(s: String): number {
        var numberPattern = /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g;
        const matches = s.match(numberPattern);
        if (!matches) { return 0 }
        return parseInt(matches[matches?.length - 1]);
    }
    return (

        <div ref={ref} id='myImages' className="relative  border-black border-2">

            <img className="image absolute h-full w-full" src={`/9ff/imageSlider/${0}.jpg`}></img>

        </div >
    )
}