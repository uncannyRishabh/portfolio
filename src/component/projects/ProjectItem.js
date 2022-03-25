import React, { useEffect } from 'react'
import {Container, PTitle, PImage
        ,PContainer, PDescription
        ,TContainer, PTechs
        ,LContainer, TC
        ,Github, PLink } from './ProjectItemElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'

export const ProjectItem = ( {Title, Description, Image, Tech
    , GithubLink, ProjectLink, is768, isdark,...props}) => {

    const controls = useAnimation()

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .4
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
				staggerChildren: 0.20,
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
		show: { opacity: 1 , y: 0,
            transition: {
                type: 'tween',
                duration: .3,
            } },
	}

    const item1 = {
		hidden: { opacity: 0 , y: 0,  bottom: 'auto', right: '-5%',
			transition: {
				type: 'tween',
			}
		},
		show: { opacity: 1 , y: 0, bottom: 'auto', right: 0,
            transition: {
                type: 'tween',
                duration: .4,
            } },
	}

    const item768 = {
		hidden: { opacity: 0, bottom: -10, right: 'auto',
			transition: {
				type: 'tween',
			}
		},
		show: { opacity: 1, bottom: 0, right: 'auto',
            transition: {
                type: 'tween',
                duration: .3,
            } },
	}


    return (
        <Container {...props}
			ref={ref}
			variants={container}
            initial='hidden'
            animate={controls}
            >
            <PImage variants={item}
                isdark={isdark}
                iurl={Image}>
                <PTitle isdark={isdark}>
                    {Title}
                </PTitle>
            </PImage>
            <PContainer variants={is768 ? item768 : item1}
                isdark={isdark}>
                <PDescription isdark={isdark}>
                    {Description}
                </PDescription>
                <TContainer>
                    <TC>
                        <Techs Tech={Tech}/>
                    </TC>
                    <LContainer>
                        <PLink  target="_blank" href={GithubLink} rel="noreferrer">
                            <Github isdark={isdark}/>
                        </PLink>
                        
                        <PLink target="_blank" href={ProjectLink} rel="noreferrer">
                            🔗
                        </PLink>
                    </LContainer>
                </TContainer>
                
            </PContainer>
            
        </Container>
    )
}

const Techs = ({Tech}) => {
    return Tech.map((n,index) => 
    <PTechs key={index}>{n}</PTechs>)
}