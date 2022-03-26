import React,{useEffect, Suspense} from 'react';
import { AboutMeContainer, AboutContainer, CCanvas
        ,AboutHeading,Paragraph,
        CanvasContainer,
        Container} from './aboutMeElements'
import {Mesh} from './wordCloud';
import { useAnimation } from 'framer-motion';
import { useIsIntersecting } from '../../utils/IntersectionObserver';

export const AboutMe = ({isdark}) => {
  
  const controls = useAnimation()

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  }

  const [ref , isVisible] = useIsIntersecting(options)

  useEffect(() => {
    if(isVisible) {
      controls.start("show")
    }
    else {
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
    <AboutMeContainer id='AboutMe'>
        <AboutContainer ref={ref}
            variants={container}
            initial={'hidden'}
            animate={controls}>
           <Container>
              <AboutHeading isdark = {isdark} variants={item}>
                About Me
              </AboutHeading>
              <Paragraph isdark = {isdark}  variants={item}>
                Hey there my name is Rishabh and I am a Computer Science Engineer. My interest in Computer Science started back in 2016 when I first flash a custom ROM on my Android. 
                When not at work, youll find me watching films or playing football or taking pictures of random stuff.
              </Paragraph>
           </Container>
        </AboutContainer>
      
        <CanvasContainer>
          <CCanvas pixelRatio={window.devicePixelRatio}>
            <Suspense fallback={<>FAILED TO COMPILE SHADERS</>} >
              <Mesh isdark = {isdark}/>
            </Suspense>
          </CCanvas>
        </CanvasContainer>

    </AboutMeContainer>
    )
};