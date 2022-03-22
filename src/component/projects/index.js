import React,{useEffect} from 'react'
import { ProjectItem } from './ProjectItem'
import {Container, ProjectContainer ,ProjectHeading
		,ProjectItemsContainer } from './projectsElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'

export const Project = ({isdark}) => {

	const controls = useAnimation()
	
	const [ref , isVisible] = useIsIntersecting({
		root: null,
		rootMargin: "0px",
		threshold: .3
	})

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

	// const heading = {
	// 	hidden: {
	// 		opacity: 0,
	// 	},
	// 	show: {
	// 		opacity: 1,
	// 		transition : {
	// 			duration: .5,
	// 			 type: "tween",
	// 		}
	// 	},
	// }

    return (
		<ProjectContainer id='Projects'
				ref={ref}
				variants={container}
				initial={'hidden'}
				animate={controls}>
			<ProjectHeading 
				isdark={isdark}
				variants={item}
				>
					Projects
			</ProjectHeading>
			<Container >
				<ProjectItemsContainer>
					<ProjectItem 
						Title={'CAMX'}
						Description={'This is the Description for the camera this is a personal project I built this Android studio in java virtual Machine yeah thats fine'}
						// variants={item}
						/>
					
					<ProjectItem 
						
						Title={'CAMX'}
						Description={'This is the Description for the camera this is a personal project I built this Android studio in java virtual Machine yeah thats fine'}
						// variants={item}
						/>
					
					<ProjectItem 
						
						Title={'CAMX'}
						Description={'This is the Description for the camera this is a personal project I built this Android studio in java virtual Machine yeah thats fine'}
						// variants={item}
						/>
				</ProjectItemsContainer>
			</Container>
			
		</ProjectContainer>
	)
}
