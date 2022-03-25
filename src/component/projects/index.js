import React,{useEffect,useState} from 'react'
import { ProjectItem } from './ProjectItem'
import {Container, ProjectContainer ,ProjectHeading
		,ProjectItemsContainer } from './projectsElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'
import ers from '../../assets/ERS_IMG.png'
import portfolio from '../../assets/Portfolio_IMG.png'


export const Project = ({isdark}) => {

	const [is768, setIs768] = useState(false)

	const toggle = () => {
        if(window.innerWidth <= 768){
            setIs768(true)
        }
		else{
			setIs768(false)
		}
    }

	window.onresize = toggle
	

	const controls = useAnimation()
	
	const [ref , isVisible] = useIsIntersecting({
		root: null,
		rootMargin: "0px",
		threshold: .2
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
						isdark={isdark}
						Title={'CamX'}
						Description={'This is the Description for the camera this is a personal project I built this Android studio in java virtual Machine yeah thats fine'}
						Tech={['Android','Java','MLKit API','Camera2 API']}
						ProjectLink={"https://github.com/uncannyRishabh/camx"}
						GithubLink={"https://github.com/uncannyRishabh/camx"}
						Image={ers}
						is768 = {is768}
						/>
					
					<ProjectItem 
						isdark={isdark}
						Title={'Portfolio'}
						Description={'This is the Description for the camera this is a personal project I built this Android studio in java virtual Machine yeah thats fine'}
						Tech={['React JS','Three JS','HTML','CSS']}
						ProjectLink={""}
						GithubLink={"https://github.com/uncannyRishabh/portfolio"}
						Image={portfolio}
						is768 = {is768}
						/>
					
					<ProjectItem 
						isdark={isdark}
						Title={'ERS'}
						Description={'This is the Description for the camera this is a personal project I built this Android studio in java virtual Machine yeah thats fine'}
						Tech={['Android','Java','Firebase']}
						ProjectLink={"https://github.com/uncannyRishabh/ERS/releases/tag/initial-and-final"}
						GithubLink={"https://github.com/uncannyRishabh/ERS"}
						Image={ers}
						is768 = {is768}
						/>
				</ProjectItemsContainer>
			</Container>
			
		</ProjectContainer>
	)
}
