import React, { useEffect } from 'react'
import { Content, EmojiSpan, HomeContainer,
    IntroL1, IntroL2} from './heroSection'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../../App.css'
import { Canvas } from 'react-three-fiber'
import { CustomSphere } from './CustomSphere'
import { OrthographicCamera, TrackballControls } from '@react-three/drei'
import { init } from '../../three-scripts/threeStarter'

export const HeroSection = ({isDark}) => {

    window.addEventListener('DOMContentLoaded',()=>{
        init()
    })

    const controls = useAnimation()
    const [ref, inView] = useInView();
    
    useEffect(() => {
        if (inView) {
          controls.start("show")
          
          document.getElementById('emoji').animate([
            { transform: 'rotate( 0.0deg)' }, 
            { transform: 'rotate(14.0deg)' },
            { transform: 'rotate(-8.0deg)' },
            { transform: 'rotate(14.0deg)' },
            { transform: 'rotate(-4.0deg)' },
            { transform: 'rotate(10.0deg)' },
            { transform: 'rotate( 0.0deg)' },
            { transform: 'rotate( 0.0deg)' }
          ], {
                delay: 1000,
                duration: 1200,
                iterations: 1,
            })

          // console.log('in view')
        }
        else{
            controls.start("hidden")
        }
      })
        
    const container = {
        hidden: {
            transition:{
                duration: 0,
            },
        },
        show: {
            transition: {
                duration: 0,
                staggerChildren: 0.10,
                when: "beforeChildren",
            },
          },
      }
      
      const item = {
        hidden: { opacity: 0 , y: 120},
        show: { opacity: 1 , y: 0 },
      }

    return (
        <HomeContainer id='Home' isDark = {isDark}>
            <Content id='hBody'
                ref={ref}
                variants={container}
                animate={controls}
                initial={"hidden"}
                transition={{ type: "inertia", velocity: 250 }}
                >
                <IntroL1 id='ht1' isDark = {isDark} variants={item}>Hey  
                <EmojiSpan id='emoji'>👋</EmojiSpan> ,</IntroL1>
                <IntroL1 id='ht2' isDark = {isDark} variants={item}>this is Rishabh,</IntroL1>
                <IntroL2 id='ht3' isDark = {isDark} variants={item}>and I develop for Android 📱 and Web 🕸️</IntroL2>
            </Content>

            {/* <Canvas >
                <OrthographicCamera makeDefault position={[3, 0, 10]} zoom={65} >
                    <ambientLight/>
                    <pointLight color="white" position={[0, 5, 5]} />
                    <directionalLight color="hotpink" position={[0, 5, 5]} />
                </OrthographicCamera>
                <TrackballControls noZoom={true} noPan={true}/>
                <CustomSphere color={"red"}/>
            </Canvas> */}
            <span data-diagram="box" id='dSphere' ></span>
        </HomeContainer>
    )
}