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
    hidden: { opacity: 0 , y: 60,
		transition:{
			type:'tween',
			duration: .5,
		}
	},
    show: { opacity: 1 , y: 0,
		transition:{
			type: "spring",
            damping: 8,
            mass: .55,
            stiffness: 200,
			delay:.3,
			// duration: .1,
		}
	},
  }

  const item1 = {
    hidden: { opacity: 0 , y: 60,
		transition:{
			type:'tween',
			duration: .5,
		}
	},
    show: { opacity: 1 , y: 0,
		transition:{
			type:'tween',
			delay:.3,
			duration: .5,
		}
	},
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
              <Paragraph isdark = {isdark}  variants={item1}>
                I am a Frontend developer and a Computer Science Student. Im curious about technology, particularly android. When Im not being curious I like to play football, convert nature to digital media and consume moving pictures. 
				<br/><br/> 
				Looking for a place to manoeuvre my Skillset. 
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