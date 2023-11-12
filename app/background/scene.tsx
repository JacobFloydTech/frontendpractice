"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Canvas, useFrame , useThree} from '@react-three/fiber'
import * as THREE from 'three'

export type Position = { 
    x: number;
    y: number;
    z: number;
}

export default function Scene({position}: {position: Position}) { 

    const ref = useRef<any>();
    useEffect(() => {
     if( !ref.current) { return }
      ref.current.position.set(position.x, position.y, position.z);

      function moveUp() { 
        if( !ref.current) { return }
        gsap.to(ref.current.position, { y: `+=${Math.random()*10+5}`, duration: Math.random()*4+4, ease: 'sine.inOut' ,onComplete : () => { moveDown()}})
      }
      function moveDown() { 
        if( !ref.current) { return }
        gsap.to(ref.current.position, { y: `-=${Math.random()*10+5}`, duration: Math.random()*4+4, ease: 'sine.inOut' ,onComplete: () => { moveUp()}})
      }
      Math.random() > 0.5 ? moveUp() : moveDown()
    },[])
    useFrame((state, delta) => { 
        ref.current.rotation.x += delta/3;
        ref.current.rotation.y -= delta/3;
        ref.current.rotation.z += delta/3;
    })

 

    return (
        <group receiveShadow  castShadow rotation={new THREE.Euler(Math.random()*120,Math.random()*120, Math.random()*120)} ref={ref}>
        <mesh receiveShadow castShadow position={[0,1,0]} ref={ref}>
            <sphereGeometry args={[2,16,16]}/>
            <shadowMaterial/>
            <meshStandardMaterial/>
        </mesh>
        <mesh receiveShadow castShadow position={[5,-2,0]} ref={ref}>
            <sphereGeometry args={[2,16,16]}/>
            <shadowMaterial/>
            <meshStandardMaterial/>
        </mesh>
        <mesh receiveShadow castShadow position={[-5,-2,0]} ref={ref}>
            <sphereGeometry args={[2,16,16]}/>
            <shadowMaterial/>
            <meshStandardMaterial/>
        </mesh>
        <mesh receiveShadow castShadow position={[2.4,-0.5,0]} ref={ref}  rotation={[0,0,1]}>
            <cylinderGeometry args={[0.8,0.8, 7]}/>
            <shadowMaterial/>
            <meshStandardMaterial color={'black'}/>
        </mesh>
        <mesh receiveShadow castShadow position={[-2.4,-0.5,0]} ref={ref} rotation={[0,0,-1]}>
            <cylinderGeometry args={[0.8,0.8, 7]}/>
            <shadowMaterial/>
            <meshStandardMaterial color={'black'}/>
        </mesh>
 
 
        </group>
 
      
    )
}