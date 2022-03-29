import { MeshDistortMaterial } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export const CustomSphere = ( props ) => {
    const mesh = useRef()

    useFrame((state) => {
        if (mesh.current) {
          mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x,state.mouse.x / 3 , 0.2)
          mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y,
          Math.sin(state.clock.elapsedTime ) / 1.5 + state.mouse.y / 3, 0.2)
        }
      })

  return (
    <mesh
        {...props}
        ref={mesh}
        scale={1.1}
        >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={props.color} envMapIntensity={0} 
          clearcoat={0.3} clearcoatRoughness={0} metalness={0.1} distort={.40} speed={2}/>
      </mesh>
  )
}