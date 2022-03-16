import React,{useEffect} from 'react';
import { AboutMeContainer, AboutContainer, CCanvas
        ,AboutHeading,Paragraph,
        CanvasContainer,
        Container} from './aboutMeElements'
import {Mesh} from './wordCloud';
import { Suspense } from 'react/cjs/react.development';
import { useAnimation } from 'framer-motion';
import { useIsIntersecting } from '../../utils/IntersectionObserver';

export const AboutMe = ({isdark}) => {
  
  const controls = useAnimation()

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
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
        <AboutContainer ref={ref} id="ac"
         className='section'
         variants={container}
         initial={'hidden'}
         animate={controls}>
           <Container>
              <AboutHeading isdark = {isdark} variants={item}>
                About Me
              </AboutHeading>
              <Paragraph isdark = {isdark}  variants={item}>
                Hello! My name is Rishabh and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML {'&'} CSS!
              </Paragraph>
           </Container>
        </AboutContainer>
        <CanvasContainer >
          <CCanvas pixelRatio={window.devicePixelRatio}>
            <Suspense fallback={<>FAILED TO COMPILE SHADERS</>} >
              <Mesh isdark = {isdark}/>
            </Suspense>
          </CCanvas>
        </CanvasContainer>

    </AboutMeContainer>
    )
};