import React, { useEffect } from 'react'
import { Content, EmojiSpan, HomeContainer,
    IntroL1, IntroL2, CCanvas
    ,CanvasContainer} from './heroSection'
import { useAnimation } from 'framer-motion'
import '../../App.css'
import { CustomSphere } from './CustomSphere'
import { OrthographicCamera, TrackballControls } from '@react-three/drei'
import { useIsIntersecting } from '../../utils/IntersectionObserver'
// import { init } from '../../three-scripts/threeStarter'

export const HeroSection = ({isdark}) => {

    // window.addEventListener('DOMContentLoaded',()=>{
        // init()
    // })

    

    const controls = useAnimation()
    
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    const [ref , inView] = useIsIntersecting(options)

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

        //   console.log('in view H')
        }
        else{
            controls.start("hidden")
        }
      })
        
    const container = {
        hidden: {
            transition:{
                duration: 2,
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
        <HomeContainer id='Home' isdark = {isdark}
        ref={ref}
                variants={container}
                initial={"hidden"}
                animate={controls}>
            <Content id='hBody'>
                <IntroL1 id='ht1' isdark = {isdark} variants={item}>Hey  
                <EmojiSpan id='emoji'>👋</EmojiSpan> ,</IntroL1>
                <IntroL1 id='ht2' isdark = {isdark} variants={item}>this is Rishabh,</IntroL1>
                <IntroL2 id='ht3' isdark = {isdark} variants={item}>and I develop for Android 📱 and Web 🕸️</IntroL2>
            </Content>

            <CanvasContainer>
                <CCanvas>
                    <OrthographicCamera makeDefault position={[3, 0, 10]} zoom={65} >
                        <ambientLight/>
                        <pointLight color="white" position={[0, 5, 5]} />
                        <directionalLight color="hotpink" position={[0, 5, 5]} />
                    </OrthographicCamera>
                    <TrackballControls noZoom={true} noPan={true}/>
                    <CustomSphere color={"red"}/>
                </CCanvas>
            </CanvasContainer>
            
            {/* <span data-diagram="box" id='dSphere' ></span> */}
        </HomeContainer>
    )
}