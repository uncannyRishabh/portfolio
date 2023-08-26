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
		  type:'tween',
      },
    },
    show: {
        transition: {
            staggerChildren: 0.20,
            when: "beforeChildren",
        },
      },
  }

  const item = {
    hidden: { opacity: 0 , y: 60,
		transition:{
			type:'tween',
		}
	},
    show: { opacity: 1 , y: 0,
		transition:{
			type: "spring",
            damping: 8,
            mass: .55,
            stiffness: 110,
			duration: .3,
		}
	},
  }

  return (
    <AboutMeContainer id='AboutMe'>
        <AboutContainer >
           <Container ref={ref}
            variants={container}
            initial={'hidden'}
            animate={controls}>
              <AboutHeading isdark = {isdark} variants={item}>
                About Me
              </AboutHeading>
              <Paragraph isdark = {isdark}  variants={item}>
                I am a Frontend developer and a Computer Science Student. I'm curious about technology, particularly android. When I'm not being curious I like to play football, convert nature to digital media and consume moving pictures. 
				<br/><br/> 
				Looking for some place to manifest my skillset.
				<br/>
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