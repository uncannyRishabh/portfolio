import React, { useEffect } from 'react'
import { Content, HomeContainer,
    IntroL1, IntroL2} from './heroSection'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../../App.css'

export const HeroSection = () => {
    
    window.addEventListener('DOMContentLoaded', () => {
        console.log("LOADED")
    })
    

    // const timingFunction = (t,b,c,d) => {
    //     // Quadratic Easing
    //     return -c * (t/=d) * t * b

    //     //Easing in and out
    //     // if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    //     // return -c / 2 * ((--t) * (t - 2) - 1) + b;
    // }

    // document.body.onscroll = () => {
    //     const t = document.body.getBoundingClientRect().top
    //     const home = document.getElementById('hBody')
    //     const ht1 = document.getElementById('ht1')
    //     const ht2 = document.getElementById('ht2')
    //     const ht3 = document.getElementById('ht3')

        // home.style.transform = 'translateY('+(t)+'px)'
        // home.style.transform = 'rotateX('+(t/40)+'deg)'
        // home.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
        // home.style.transform = 'matrix(1, '+ 0+', '+ 0+
        // ', 1, '+ -t/4+', '+ t-2 +')'

        //WRITE A FUNCTION TO MAKE TEXT JUMP OUT AND
        //JUMP IN WHEN REACHES CERTAIN HEIGHT
        // ht1.style.transform = 'matrix(1, '+ 0+', '+ 0+
        //  ', 1, '+ 1+', '+ timingFunction(-t/30, 1, 5, 2) +')'
        // ht2.style.transform = 'matrix(1, '+ 0+', '+ 0+
        //  ', 1, '+ 1+', '+ timingFunction(-t/35, 1, 5, 2) +')'
        // ht3.style.transform = 'matrix(1, '+ 0+', '+ 0+
        //  ', 1, '+ 1+', '+ timingFunction(-t/39, 1, 5, 2) +')'
        // home.style.opacity = 1 - (t / -320)
    // }


    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("show")
          console.log('in view')
        }
        else{
            controls.start("hidden")
        }
      }, [controls, inView])
        
    const container = {
        hidden: { opacity: 0.1 },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                type:"tween",
                staggerChildren: 0.12,
            },
          },
      }
      
      const item = {
        hidden: { opacity: 0 , y: 160},
        show: { opacity: 1 , y: 0 },
      }

    return (
        <HomeContainer id='Home'>
            <Content id='hBody'
                ref={ref}
                variants={container}
                animate={controls}
                initial={"hidden"}                
                >
                <IntroL1 id='ht1' variants={item}>Hi 👋,</IntroL1>
                <IntroL1 id='ht2' variants={item}>I’m Rishabh,</IntroL1>
                <IntroL2 id='ht3' variants={item}>and I develop for Android 📱 and Web 🕸️</IntroL2>
            </Content>
        </HomeContainer>

    )
}
