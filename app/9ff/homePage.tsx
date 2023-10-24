"use client";

import gsap from "gsap"

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react"


export default function PorscheNavbar() {
    const router = useRouter();
    return (
        <div className="flex fixed p-2 top-0 left-0 w-full h-24 bg-gray-100 items-center justify-around  z-50">
            <div className="flex items-center ">
                <img src={'/9ff/logo.png'}></img>
                <img className="h-1/2 mx-4" src="/9ff/title.png"></img>
            </div>
            <div className="w-auto  flex justify-around space-x-6 text-lg font-semibold">
                <button>Home</button>
                <button>Services</button>
                <button onClick={() => { router.push('/9ff/supercars') }}>Supercars</button>
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
    let timeout: NodeJS.Timeout;
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (timeout != null) {
                clearInterval(timeout);
            }

            main();
        })
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

            timeout = setInterval(() => {
                Array.from(el?.children as HTMLCollectionOf<HTMLElement>).forEach((e) => {
                    const offset = getTranslateY(e.style.transform)

                    if (offset <= height * -1) {
                        gsap.set(e, { translateY: `${height * 5}px` });
                    }
                    gsap.to(e, { translateY: `-=${height}px`, duration: 2 })
                })
            }, 3000)

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

        <div ref={ref} id='myImages' className="w-5/6 overflow-hidden relative mx-auto aspect-square md:aspect-video top-0 ">

            <img className="image " src={`/9ff/imageSlider/${0}.jpg`}></img>

        </div >
    )
}

export function GridContent() {

    return (
        <div className="w-auto h-auto  grid grid-cols-1 md:grid-cols-10 bg-gray-200 mx-4 myGrid tracking-[1.2px]">
            <div className=" m-4 col-span-4 overflow-hidden  ">
                <img className="object-cover w-full h-full" src="/9ff/gridContent/992Tune.jpg"></img>
            </div>
            <div className=" m-4 col-span-6 bg-white flex flex-col pl-12 pt-4 justify-around ">
                <p className="uppercase text-4xl tracking-[2.5px]">news <br></br> 992  upgrades avaliable</p>
                <p className="text-xl">High quality 9ff tuning for various 922 models <br></br> avaliable in our shop, or contact us for an individual <br></br> upgrade!</p>
                <p className="uppercase text-3xl">9ff <br></br> german engineering</p>
            </div>
            <div className="m-4 col-span-6 bg-white p-12 flex flex-col justify-around ">
                <p className="text-4xl tracking-[2.5px]">INDIVIDUAL SPORTS CARS <br></br>AND INDIVIDUAL FINISHING</p>
                <p className="text-2xl">Are you looking for a fast and individual sports car? <br></br> Then you've come to the right place at 9FF!</p>
                <p className="uppercase text-3xl">9ff <br></br> german engineering</p>
            </div>
            <div className="m-4 col-span-4 overflow-hidden " >
                <img className=" w-full h-full object-cover" src="/9ff/gridContent/992driving.jpg"></img>
            </div>
            <div className="m-4 col-span-4 overflow-hidden ">
                <img className="w-full h-full object-cover " src="/9ff/gridContent/engineblock.jpg"></img>
            </div>
            <div className="m-4 col-span-6 text-right bg-white flex-col justify-around flex text-sm px-12 py-24 smallRow">
                <p >
                    <span className="font-bold tracking-[2.5px]">9FF GERMAN ENGINEERING</span>
                    <span>Through years of development work, 9FF has succeeded in establishing itself not only as a vehicle manufacturer, but also as a TÜV-certified specialist for performance improvements and individual sports car refinement.</span>
                </p>
                <p>We also make your vehicle unique - inside and out. <br></br>Your satisfaction is both an incentive and a benchmark for us.</p>
            </div>
            <div className="m-4 col-span-6 bg-white grid md:grid-cols-5 pl-4 ">
                <div className="col-span-3">
                    <button>
                        <img className="h-6 mx-4 my-2" src="/9ff/arrow.svg"></img>
                    </button>
                    <p className="uppercase text-2xl ">services</p>
                    <p className="text-lg my-2">9FF is one of the smaller German vehicle manufacturers approved by the Federal Motor Transport Authority.</p>
                    <p className="text-lg">Our services are designed for all sports cars from Stuttgart.</p>
                </div>
                <div className="col-span-2 uppercase text-5xl text-right m-4 ">
                    <p>9FF is</p>
                    <p className="font-bold my-4">powerful</p>
                    <p>A</p>
                    <p className="font-bold my-4">promise</p>
                </div>

            </div>
            <div className="col-span-4  m-4">
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

        if (!curr || !next) { return; }
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
        <div className="relative w-full h-full overflow-hidden ">
            <img ref={curr} className="absolute top-0 h-full w-full object-cover  " src={`9ff/gridContent/finalrow${currentImage}.jpg`}></img>
            <img ref={next} className="absolute top-0 h-full w-full object-cover " src={`9ff/gridContent/finalrow${nextImage}.jpg`}></img>
        </div>
    )
}

export function Footer() {
    return (
        <div className="w-full h-auto bg-gray-100">
            <div className="bg-white text-3xl mx-4 flex flex-col justify-center items-center text-center gap-y-2 my-4 ">
                <p>Are you interested in a vehicle from 9ff?</p>
                <p className="font-bold">We are here for you</p>
                <button className="bg-black p-2 text-white mb-4">Contact</button>
            </div>
            <div className="flex justify-center gap-x-3 h-24 w-full items-center">
                <Cart />
                <Facebook />
                <Instagram />
                <Email />
            </div>
        </div>
    )
}

function Cart() {
    return (
        <svg width={30} viewBox="0 0 576 512">
            <path xmlns="http://www.w3.org/2000/svg" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
    )
}

function Facebook() {
    return (
        <svg width={30} viewBox="0 0 576 512">
            <path xmlns="http://www.w3.org/2000/svg" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
    )
}

function Instagram() {
    return (
        <svg width={30} viewBox="0 0 576 512">
            <path xmlns="http://www.w3.org/2000/svg" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>

    )
}
function Email() {
    return (
        <svg width={30} viewBox="0 0 576 512">
            <path xmlns="http://www.w3.org/2000/svg" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
    )
}