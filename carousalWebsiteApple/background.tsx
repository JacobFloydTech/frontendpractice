"use client";


import { useEffect, useState, useSyncExternalStore } from 'react';
import '/public/globals.css'
import gsap from 'gsap';

type positions = {
    index: number,
    top: number | string,
    right: number
}

export default function Background({ index, setIndex }: { index: number, setIndex: Function }) {
    let [currentIndex, setCurrentIndex] = useState(index);
    let [images, setImages] = useState<Array<positions>>();


    useEffect(() => {
        if (currentIndex < index) {
            increase(currentIndex, index);
        } else if (index < currentIndex) {
            decrease(currentIndex, index);
        }
        setCurrentIndex(index);
    }, [index])


    useEffect(() => {
        let positions: positions[] = [
            { index: 0, top: `${document.body.clientHeight / 2 - 60}px`, right: 150 },
            { index: 1, top: 0, right: 0 },
            { index: 2, top: `${document.body.clientHeight / 2 - 60}px`, right: -270 },
            { index: 3, top: `${document.body.clientHeight - 120}px`, right: 0 }
        ]
        setImages(positions);
        gsap.set(`#img${index}`, {
            right: 150,
            top: `${document.body.clientHeight / 2 - 60}px`,
        })
        gsap.set(`#img${index - 1}`, {
            top: '80%',
            right: 0,
        })
        gsap.set(`#img${index + 1}`, {
            top: 0,
            right: 0,
        })

    }, [])
    function decrease(currentIndex: number, index: number): void {
        let tl = gsap.timeline();
        let newMainElement = document.getElementById(`img${index}`)
        for (var i = 0; i <= 3; i++) {
            let el = document.getElementById(`img${i}`);
            let position = el?.getAttribute('data-position');
            if (!position) { return }
            if (parseInt(position) == 0) {
                tl.to(el, {
                    top: images![3].top, right: images![3].right, onComplete: () => {
                        if (newMainElement?.getAttribute('data-position') != "0") {
                            return decrease(currentIndex - 1, index);
                        }
                    }
                }, 'decrease')
            } else {
                tl.to(el, { top: images![parseInt(position) - 1].top, right: images![parseInt(position) - 1].right }, 'decrease')
            }
            el?.setAttribute('data-position', `${parseInt(position) == 0 ? 3 : parseInt(position) - 1}`)
        }
        tl.addLabel('decrease');
    }

    function increase(currentIndex: number, index: number): void {
        let tl = gsap.timeline();
        let newMainElement = document.getElementById(`img${index}`)
        for (var i = 0; i <= 3; i++) {
            let el = document.getElementById(`img${i}`);

            let position = el?.getAttribute('data-position');
            if (!position) { return };
            if (parseInt(position) == 3) {
                tl.to(el, {
                    top: images![0].top, right: images![0].right, onComplete: () => {
                        if (newMainElement?.getAttribute('data-position') != "0") {
                            return increase(currentIndex + 1, index);
                        }
                    }
                }, 'increase')
            } else {
                tl.to(el, { top: images![parseInt(position) + 1].top, right: images![parseInt(position) + 1].right }, 'increase')
            }
            el?.setAttribute('data-position', `${parseInt(position) == 3 ? 0 : parseInt(position) + 1}`)
        }
        tl.addLabel('increase')

    }



    return (
        <div className="w-screen h-screen overflow-hidden relative">
            {images?.map((e, i) => {
                return (
                    <div data-position={i} id={`img${i}`} style={{ width: 120, height: 120, position: 'absolute', top: e.top, right: e.right }}>
                        <img style={{ objectFit: 'contain' }} src={`/appleProducts/${i}.jpeg`}></img>
                    </div>
                )
            })}


        </div>
    )
}