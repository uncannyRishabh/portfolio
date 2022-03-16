import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { fonts } from '../../assets/fonts'

const Word = ({isdark, children, ...props }) => {
  const color = useMemo(() => new THREE.Color(), []) 
  const fontProps = { letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => {
    e.stopPropagation()
    return setHovered(true)
  }
  const out = () => setHovered(false)

  useEffect(() => {
    // if(isdark) console.log('dark')
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.set(isdark ? (hovered ? '#fa2720' : '#fff') : 'black')
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children}/>
}

const Cloud = ({ count , radius = 20, isdark }) => {
  const arr= useMemo(() =>  [[" "," "," "," "," "," "] 
            ,["C"     ,"SQL","React","Figma","GLSL"," "]
            ,["Java"  ,"Android","OpenCV","RxJava","AdobeXD"," "]
            ,["Python","Debugging","Camera2Api","JavaScript","FireBase"," "]
            ,["HTML"  ,"ThreeJS","Selenium","RxAndroid","Automation"," "]
            ,["CSS"   ,"XML","Github","Ctrl+C","Ctrl+V"," "]
            ,[" "," "," "," "," "," "]] 
          , [])
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3()
        .setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j))
        , arr[i][j], fonts['Noto Sans'], 1.9 ])
    temp.push([new THREE.Vector3(0,0,0), 'SKILLS' , fonts['Roboto Slab'], 2.9])
    return temp
  }, [arr,count, radius])
  return words.map(([pos, word, font, fontSize], index) => <Word key={index} fontSize={fontSize} font={font} position={pos} children={word} isdark={isdark}/>)
}

export const Mesh = ({isdark}) => {
  const mesh = useRef()
  const controls = useRef()
  let radius = 17

  useEffect(() => {
    controls.current.enableZoom = false
    controls.current.enablePan = false
  })

  return (
    <mesh ref={mesh} scale={0.1}>
      <fog attach="fog" args={['#202025', 0, 90]} />
      <Cloud count={5} radius={radius} isdark={isdark}/>
      <OrbitControls ref={controls} autoRotate />
    </mesh>
  )
}