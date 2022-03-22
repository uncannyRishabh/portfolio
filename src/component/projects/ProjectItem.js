import React, { useEffect } from 'react'
import {Container, PTitle, PImage
        ,PContainer, PDescription } from './ProjectItemElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'

export const ProjectItem = ( {Title, Description, Image, Tech
    , GithubLink, ProjectLink,...props}) => {

    const controls = useAnimation()

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .6
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
			  delay: .2,
			  duration: 1,
		  },
		},
		show: {
			transition: {
				duration: 0,
				// staggerChildren: 0.20,
				when: "beforeChildren",
			},
		  },
		
	}

    const item = {
		hidden: { opacity: 0 , y: 80,
			transition: {
				type: 'tween',
			}
		},
		show: { opacity: 1 , y: 0 },
	}

    return (
        <Container {...props}
			ref={ref}
			variants={container}
            initial='hidden'
            animate={controls}
            >
            <PImage variants={item}>
                <PTitle>
                    {Title}
                </PTitle>
                
            </PImage>
            <PContainer variants={item}>
                <PDescription>
                    {Description}
                </PDescription>
            </PContainer>
            
        </Container>
    )
}