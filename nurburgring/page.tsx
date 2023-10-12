"use client";

import { SVGLineElementAttributes, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ShaderMaterial } from "three/src/Three.js";
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);

const vShader = `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
            vec4 modelPosition = modelMatrix * vec4(position.x, position.y, position.z , 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;
            vUv = uv;
            gl_Position = projectedPosition;
        }`
const fShader = `
#ifdef GL_ES
precision mediump float;
#endif


uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;
void main() {
    vec2 st = vUv;
    float originalY = vUv.y;
    float offset = mod(uTime, 10.)/10.;
    st.y += offset;

    float modIsGap = mod(st.y, .1);
    float xGrid = mod(st.x, .1);

    st.x = originalY;
    if (st.x < 0.02|| st.x > 0.97 || st.y < 0.02 || originalY > 0.97 ||
        modIsGap < 0.02  || xGrid < 0.02) {
    	vec3 color = vec3(0, 0, 0);
    	gl_FragColor = vec4(color, 1);
    }
    else {
       	vec3 color = vec3(abs(sin(uTime)), 0.4, 1.);
    	gl_FragColor = vec4(0.5, 0.0, vUv.y*1.2, 1.);
    }

 
}
    `

export function VaporwaveBackground() {
    return (
        <div className="h-full w-full">
            <Canvas id='canvas' className="w-full h-full" camera={{ position: [0, 0, -300] }}>
                <ThreeApp />
            </Canvas>
        </div>
    )
}


function ThreeApp() {
    const ref = useRef<any>();

    const globalGeometry = new THREE.PlaneGeometry(1000, 1000);
    const canvas = document.getElementById('canvas');

    const globalMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uResolution: { value: new THREE.Vector2() }
        },
        fragmentShader: fShader, vertexShader: vShader, side: THREE.DoubleSide
    })
    globalMaterial.uniforms.uTime = { value: 0 }

    useFrame((state, delta, xrFrame) => {
        const newTime = state.clock.elapsedTime;
        globalMaterial.uniforms.uTime.value = newTime;
        ref.current.rotation.x = 20;
    })
    return (
        <mesh geometry={globalGeometry} material={globalMaterial} ref={ref} />
    )
}

export default function TimelinePage() {
    return (
        <div className="w-full h-full bg-black">
            <div className="w-full h-full relative" style={{ backgroundImage: "url('/cars/m4csl.jpg')", backgroundSize: "100%", backgroundPositionY: '-200px' }}>

            </div>
            <svg viewBox="0 0 500 500" height='100%' className="absolute top-0 left-0 z-50 w-full h-full">
                <path stroke="blue" strokeWidth={2} d="m 62 355 l 1 1 a  75.5 93 0 1  0 -150 0 l -50 -3 l 0 -100 q 75 -61 245 -50 q 100 -60 140 -70 t 120 -3 t 83 3 q 4 0 5 10 q 120 36 150 45 q 29 10 30 -5 l 41 3  q -12 25 1.5 60 q -2 20 10 30 q 10 20 -3 40 q 2 10 5 10 q -20 12 -30 9 q -30 10 -70 10 a  54 70 0 1  0 -143 0 l 0 10 z " fill="none"></path>
                <path stroke="blue" strokeWidth={2} fill="none" d='M 119 333 l 150 0 c 100 0, 80 -10 106 -90 t -10 -40 c 130 -15,  200 -12, 80 -44 t -90 -17 q -100 -5 -110 6 l -120 65 t -8 12 q -10 20 -1 100 z'></path>
                <path stroke="blue" strokeWidth={2} fill="none" d="M 75 275 l 30 -35 q -20 -10 -40  20 z "></path>
                <path stroke="blue" strokeWidth={2} fill="none" d="M -130 255 q 30 -20 70 -7 q -30 20 -60 21 q -12 -10 -10 -10 z"></path>
                <path stroke="red" strokeWidth={2} fill="none" d='M 670 214 l -55 0 c -12 10 -4 15 40 25 q 10 3 20 -2 q -4 -16 -4 -23 z'></path>
                <path stroke="red" strokeWidth={2} fill="none" d="M 648 236 q -10 -4 -22 -18 q 2 -6 7 2 q 2 2 4 4 m 15 12 q -5 -4 -17 -18 q 5 -2 10 2 m 12 17 q -5 -4 -10 -17 q 0 -10 10 2"></path>
                <path stroke="blue" strokeWidth={2} fill="none" d="M 129 214 q 120 -3 235 -10 l 6 -60" />
            </svg>

        </div>
    )
}


export function RealSVG() {
    const ref = useRef<any>();
    const svgParent = useRef<any>();
    useEffect(() => {

        gsap.to(ref.current, {
            scale: 2.3, duration: 2, x: -500,
        })
        gsap.fromTo(svgParent.current, {
            rotateY: 30
        }, { rotateY: 0, duration: 3.5 })
        gsap.to(ref.current, {
            scale: 12, delay: 3.5, duration: 5
        })
    }, [])

    return (
        <svg ref={svgParent} viewBox="0 0 1000 1000" height='100%' width='100%' className="fixed z-50">
            <defs>

                <filter id="blurFilter" filterUnits="userSpaceOnUse"
                    x="-50%" y="-50%" width="200%" height="200%">

                    <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur50" />

                </filter>
            </defs>
            <g ref={ref}>
                <path stroke="blue" strokeWidth={2} d="m 262 355 l 1 1 a  75.5 93 0 1  0 -150 0 l -50 -3 l 0 -100 q 75 -61 245 -50 q 100 -60 140 -70 t 120 -3 t 83 3 q 4 0 5 10 q 120 36 150 45 q 29 10 30 -5 l 41 3  q -12 25 1.5 60 q -2 20 10 30 q 10 20 -3 40 q 2 10 5 10 q -20 12 -30 9 q -30 10 -70 10 a  54 70 0 1  0 -143 0 l 0 10 z " fill="none"></path>
                <path stroke="blue" strokeWidth={2} fill="none" d='M 319 333 l 150 0 c 100 0, 80 -10 106 -90 t -10 -40 c 130 -15,  200 -12, 80 -44 t -90 -17 q -100 -5 -110 6 l -120 65 t -8 12 q -10 20 -1 100 z'></path>
                <path stroke="blue" strokeWidth={2} fill="none" d="M 275 275 l 30 -35 q -20 -10 -40  20 z "></path>
                <path stroke="blue" strokeWidth={2} fill="none" d="M 70 255 q 30 -20 70 -7 q -30 20 -60 21 q -12 -10 -10 -10 z"></path>
                <path stroke="red" strokeWidth={1} fill="none" d='M 870 214 l -55 0 c -12 10 -4 15 40 25 q 10 3 20 -2 q -4 -16 -4 -23 z'></path>
                <path stroke="blue" strokeWidth={2} fill="none" d="M 329 214 q 120 -3 235 -10 l 6 -60" />
                <path stroke="red" strokeWidth={1} fill="none" d='M 870 214 l -55 0 c -12 10 -4 15 40 25 q 10 3 20 -2 q -4 -16 -4 -23 z'></path>
                <path stroke="red" strokeWidth={1} fill="none" d="M 848 236 q -10 -4 -22 -18 q 2 -6 7 2 q 2 2 4 4 m 15 12 q -5 -4 -17 -18 q 5 -2 10 2 m 12 17 q -5 -4 -10 -17 q 0 -10 10 2"></path>

                <path filter="url(#blurFilter)" stroke="blue" strokeWidth={3} d="m 262 355 l 1 1 a  75.5 93 0 1  0 -150 0 l -50 -3 l 0 -100 q 75 -61 245 -50 q 100 -60 140 -70 t 120 -3 t 83 3 q 4 0 5 10 q 120 36 150 45 q 29 10 30 -5 l 41 3  q -12 25 1.5 60 q -2 20 10 30 q 10 20 -3 40 q 2 10 5 10 q -20 12 -30 9 q -30 10 -70 10 a  54 70 0 1  0 -143 0 l 0 10 z " fill="none"></path>
                <path filter="url(#blurFilter)" stroke="blue" strokeWidth={3} fill="none" d='M 319 333 l 150 0 c 100 0, 80 -10 106 -90 t -10 -40 c 130 -15,  200 -12, 80 -44 t -90 -17 q -100 -5 -110 6 l -120 65 t -8 12 q -10 20 -1 100 z'></path>
                <path filter="url(#blurFilter)" stroke="blue" strokeWidth={3} fill="none" d="M 275 275 l 30 -35 q -20 -10 -40  20 z "></path>
                <path filter="url(#blurFilter)" stroke="blue" strokeWidth={3} fill="none" d="M 70 255 q 30 -20 70 -7 q -30 20 -60 21 q -12 -10 -10 -10 z"></path>
                <path filter="url(#blurFilter)" stroke="red" strokeWidth={3} fill="none" d='M 870 214 l -55 0 c -12 10 -4 15 40 25 q 10 3 20 -2 q -4 -16 -4 -23 z'></path>
                <path filter="url(#blurFilter)" stroke="blue" strokeWidth={3} fill="none" d="M 329 214 q 120 -3 235 -10 l 6 -60" />
                <path filter="url(#blurFilter)" stroke="red" strokeWidth={3} fill="none" d='M 870 214 l -55 0 c -12 10 -4 15 40 25 q 10 3 20 -2 q -4 -16 -4 -23 z'></path>
                <path filter="url(#blurFilter)" stroke="red" strokeWidth={3} fill="none" d="M 848 236 q -10 -4 -22 -18 q 2 -6 7 2 q 2 2 4 4 m 15 12 q -5 -4 -17 -18 q 5 -2 10 2 m 12 17 q -5 -4 -10 -17 q 0 -10 10 2"></path>
            </g>

        </svg>
    )
}
