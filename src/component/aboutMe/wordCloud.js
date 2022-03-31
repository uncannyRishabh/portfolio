import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { fonts } from '../../assets/fonts'
import { a, useSpring} from '@react-spring/three'

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

  useFrame(({ camera }) => {
    ref.current.material.color.set(isdark ? (hovered ? '#0f5' : '#919aed') : 'black')
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#F00' : '#3c283c'), 0.1)
  })

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children}/>
}

const Cloud = ({ count , radius = 20, isdark }) => {
  const arr= useMemo(() =>  [[" "," "," "," "," "," "] 
            ,["C"     ,"SQL","React","Github","GLSL"," "]
            ,["Java"  ,"Android","OpenCV","RxJava","Automation"," "]
            ,["JavaScript","Debugging","Camera2Api","RxAndroid","FireBase"," "]
            ,["HTML"  ,"ThreeJS","Selenium","Python","AdobeXD"," "]
            ,["CSS"   ,"XML","Ctrl+C","Figma","Ctrl+V"," "]
            ,[" "," "," "," "," "," "]] 
          , []) //tensorflow / tflite / MLKit / 
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
  return words.map(([pos, word, font, fontSize], index) =>
   <Word key={index} fontSize={fontSize} font={font} position={pos} children={word} isdark={isdark}/>)
}

export const Mesh = ({isdark}) => {
  const mesh = useRef()
  const controls = useRef()
  let radius = 17

  const [down, setDown] = useState(false);

  const { scale } = useSpring({
	scale: down ? 0.11 : 0.09,
	config: { mass: down? 2 : 1.5,
		tension: down? 300 : 600,
		friction: down? 16 : 13 }
  });

  useEffect(() => {
    controls.current.enableZoom = false
    controls.current.enablePan = false
  })

  return (
    <a.mesh ref={mesh}
	scale={scale}
	onPointerMissed={() => {
		setDown(!down)
		console.log("onPointerMissed")
	}}
	onPointerUp={() => {
		console.log("onPointerUp")
		setDown(false)
	}}
	onPointerDown={() => {
		console.log("onPointerDown")
		setDown(true)
	}}>
      <fog attach="fog" args={['#202025', 0, 90]} />
      <Cloud count={5} radius={radius} isdark={isdark}/>
      <OrbitControls ref={controls} autoRotate autoRotateSpeed={down ? 2 : 3.5}/>
    </a.mesh>
  )
}