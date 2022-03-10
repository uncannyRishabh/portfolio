import { Text, TrackballControls } from '@react-three/drei'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'


const Word = ({ children, ...props }) => {
    const color = new THREE.Color()
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => {
      e.stopPropagation()
       setHovered(true)
    }
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'black'), 0.1)
    })

    return <Text ref={ref} onPointerOver={over} onPointerOut={out}
     {...props} {...fontProps} children={children} />
}

const Cloud = ({count=4, radius=20}) => {
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++)
          for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j))
            , ["abc"]])
        return temp
      }, [count, radius])
      return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}


const WordCloud = (props) => {
    return (
    
        // <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <mesh {...props} scale={.1}>
            <fog attach="fog" args={['#202025', 0, 80]} />
            <Cloud count={8} radius={20} />
            <TrackballControls noPan={true} noZoom={true} noRotate={true}/>            
        </mesh>

        // </Canvas>
    )
}

export default WordCloud