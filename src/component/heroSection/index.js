import React, { useEffect } from 'react'
import { Content, EmojiSpan, HomeContainer,
    IntroL1, IntroL2, CCanvas
    ,CanvasContainer,
    Container} from './heroSection'
import { useAnimation } from 'framer-motion'
import '../../App.css'
import { CustomSphere } from './CustomSphere'
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
        threshold: 0.4
    }

    const [ref, isVisible] = useIsIntersecting(options)

    useEffect(() => {
        if (isVisible) {
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
                staggerChildren: 0.20,
                when: "beforeChildren",
            },
        },
    }
    
    const item = {
        hidden: { opacity: 0 , y: 60},
        show: { opacity: 1 , y: 0 },
    }

    return (
        <HomeContainer id='Home' isdark = {isdark}>
            <Content ref={ref}
                variants={container}
                initial={'hidden'}
                animate={controls}
                >
                <Container>
                    <IntroL1 isdark = {isdark} variants={item}>
                        Hey  
                    <EmojiSpan id='emoji'>👋</EmojiSpan> ,
                    </IntroL1>
                    <IntroL1 isdark = {isdark} variants={item}>
                        this is Rishabh,
                    </IntroL1>
                    <IntroL2 isdark = {isdark} variants={item}>
                        and I develop for Android 📱 and Web 🕸️
                    </IntroL2>
                </Container>
            </Content>

            <CanvasContainer>
                <CCanvas>
                        <ambientLight/>
                        <directionalLight color={isdark ? "lightblue":"pink"} position={[0, 5, 5]} />
                    <CustomSphere color={isdark ? "rgb(210,25,50)":"red"}/>
                </CCanvas>
            </CanvasContainer>
            
            {/* <span data-diagram="box" id='dSphere' ></span> */}
        </HomeContainer>
    )
}