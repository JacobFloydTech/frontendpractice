"use client"

import { Canvas, useThree } from "@react-three/fiber";
import Object from "./scene";
import * as THREE from 'three';
import gsap from "gsap";


import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";


type Offset = { 
  x: number;
  y: number;
}

export default function ThreeJSBackground() { 


  return (

    <Canvas scene={{background: new THREE.Color('rgb(153, 146, 145)')}} shadows={true} >
      
      <Light/>
      <CustomCamera/>

      {Array.from({length: 40}).map((_, i) => { 
        return <Object key={i} position={{x: Math.random()*120 -60, y: Math.random()*70-35, z: -1*(Math.random()*50+20)}}/>
      })}

    </Canvas>
 
  )
}

function CustomCamera() { 
  const [offset, setOffset] = useState<Offset>({x: 0, y: 0})
  useEffect(() => { 
    window.addEventListener('mousemove', ({clientX, clientY}) => { 
      const height = document.body.clientHeight;
      const width = document.body.clientWidth;
   
      const differenceX = (width/2-clientX)/(width/2);
      const differenceY = (height/2-clientY)/(height/2);

      let movement = 5;
      setOffset({x: movement*differenceX*-1, y: movement*differenceY})
      console.log(offset);
    })
  },[])
  return (
    <PerspectiveCamera makeDefault manual position={[offset.x, offset.y,15]} fov={75} near={0.1} far={1000}/>
  )
}
 
function Light() { 
  const ref = useRef<any>();
  useThree(() => { 
    ref.current?.target.position.set( 0, 0, -20)
    console.log(ref.current?.color);
    gsap.to(ref.current?.color, { r: 1, duration: Math.random()*5+2, repeat: -1, yoyo: true, ease: 'sine.inOut'})
    gsap.to(ref.current?.color, { g: 1, duration: Math.random()*5+2, repeat: -1, yoyo: true, ease: 'sine.inOut'})
    gsap.to(ref.current?.color, { b: 1, duration: Math.random()*5+2, repeat: -1, yoyo: true, ease: 'sine.inOut'})
  })
  return ( 
    <group>
 
      <ambientLight intensity={0.1}/>
      <directionalLight ref={ref} castShadow position={[0, 20, 5]} color={'black'} />
    </group>
  )
}