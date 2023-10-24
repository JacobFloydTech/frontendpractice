import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

export default function PorscheNavbar() {
    return (
        <div className="flex sticky p-2 top-0 left-0 w-full h-24 bg-gray-100 items-center justify-around  z-50">
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

                newElement.style.transform = `translateY(${(height * (i + 1))}px)`;

                newElement.className = 'image';
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

        <div ref={ref} id='myImages' className="w-2/3 overflow-hidden relative mx-auto  ">

            <img className="image " src={`/9ff/imageSlider/${0}.jpg`}></img>

        </div >
    )
}

export function GridContent() {

    return (
        <div className="w-auto grid-rows-4 grid  grid-cols-5 bg-gray-200  mx-4 myGrid">
            <img className=" m-4 col-span-2" src="/9ff/gridContent/992Tune.jpg"></img>
            <div className=" m-4 col-span-3 bg-white flex flex-col pl-12 py-8">
                <p className="uppercase text-3xl">news <br></br> 992  upgrades avaliable</p>
                <p className="py-4 text-xl">High quality 9ff tuning for various 922 models <br></br> avaliable in our shop, or contact us for an individual <br></br> upgrade!</p>
                <p className="uppercase text-2xl">9ff <br></br> german engineering</p>
            </div>
            <div className="m-4 col-span-3 bg-white p-12">
                <p className="text-3xl">INDIVIDUAL SPORTS CARS <br></br>AND INDIVIDUAL FINISHING</p>
                <p className="py-4">Are you looking for a fast and individual sports car? <br></br> Then you've come to the right place at 9FF!</p>
                <p className="uppercase text-2xl">9ff <br></br> german engineering</p>
            </div>
            <div className="m-4 col-span-2 overflow-hidden" >
                <img className=" transform -translate-y-12" src="/9ff/gridContent/992driving.jpg"></img>
            </div>
            <img className="m-4 col-span-2" src="/9ff/gridContent/engineblock.jpg"></img>
            <div className="m-4 col-span-3 text-right bg-white">
                <span className="font-bold">9FF GERMAN ENGINEERING</span>
                <span>Through years of development work, 9FF has succeeded in <br></br>establishing itself not only as a vehicle manufacturer, but also as a TÜV-certified specialist for <br></br>performance improvements and individual sports car refinement.</span>
            </div>
            <div className="m-4 col-span-3 bg-white grid grid-cols-5 pl-4">
                <div className="col-span-3">
                    <button>
                        <img className="h-6 mx-4 my-2" src="/9ff/arrow.svg"></img>
                    </button>
                    <p className="uppercase text-2xl ">services</p>
                    <p className="text-lg my-2">9FF is one of the smaller German vehicle manufacturers approved by the Federal Motor Transport Authority.</p>
                    <p className="text-lg">Our services are designed for all sports cars from Stuttgart.</p>
                </div>
                <div className="col-span-2 uppercase text-5xl text-right m-4">
                    <p>9FF is</p>
                    <p className="font-bold my-4">powerful</p>
                    <p>A</p>
                    <p className="font-bold my-4">promise</p>
                </div>

            </div>
            <div className="col-span-2 m-4">
                <ImageChanger />
            </div>
        </div>
    )
}

function ImageChanger() {
    let [currentImage, setCurrentImage] = useState(0);
    let [nextImage, setNextImage] = useState(1);

    const curr = useRef<any>();
    const next = useRef<any>();

    async function changeImage() {



        if (next.current.style.opacity == 0) {
            setNextImage((next) => next == 2 ? 0 : next + 1);
            gsap.to(next.current, { opacity: 1, duration: 2 });
            gsap.to(curr.current, {
                opacity: 0, duration: 2, onComplete: () => {
                    setTimeout(() => {
                        changeImage()
                    }, 2000);
                }
            });
        } else {
            setCurrentImage((curr) => curr == 2 ? 0 : curr + 1)
            gsap.to(curr.current, { opacity: 1, duration: 2 });
            gsap.to(next.current, {
                opacity: 0, duration: 2, onComplete: () => {
                    setTimeout(() => {
                        changeImage()
                    }, 2000);
                }
            });
        }
    }


    useEffect(() => {
        changeImage();

    }, [])

    return (
        <div className="relative w-full h-full">
            <img ref={curr} className="absolute top-0 left-0 w-full h-full z-20" src={`9ff/gridContent/finalrow${currentImage}.jpg`}></img>
            <img ref={next} className="absolute top-0 left-0 w-full h-full" src={`9ff/gridContent/finalrow${nextImage}.jpg`}></img>
        </div>
    )
}