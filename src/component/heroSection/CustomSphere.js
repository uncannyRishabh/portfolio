import { MeshDistortMaterial } from '@react-three/drei'
import React, { useState ,useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { a, useSpring} from '@react-spring/three'

import * as THREE from 'three'

export const CustomSphere = ( props ) => {
    const mesh = useRef()

	const [active, setActive] = useState(false);
	const [down, setDown] = useState(false);

	const { scale } = useSpring({
		scale: active ? 1.2 : 1.08,
		config: { mass: down? 2 : 1.5, tension: down? 800 : 600, friction: down? 10 : 13 }
	});

    useFrame((state) => {
        if (mesh.current) {
          mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x,state.mouse.x / 3 , 0.2)
          mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y,
          Math.sin(state.clock.elapsedTime ) / 4.5 + state.mouse.y / 4, .5)
        }
      })

  return (
    <a.mesh
        {...props}
        ref={mesh}
		onPointerEnter={() => setActive(true)}
		onPointerLeave={() => setActive(false)}
		onPointerUp={() => {
			setActive(true)
			setDown(false)
			// props.toggle()
		}}
		onPointerDown={() => {
			setActive(false)
			setDown(true)
		}}
        scale={scale}
        >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={props.color} envMapIntensity={0} 
          clearcoat={0.3} clearcoatRoughness={0} metalness={0.1} distort={.35} speed={2}/>
      </a.mesh>
  )
}