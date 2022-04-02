import React,{useEffect,useState,useCallback} from 'react'
import { ProjectItem } from './ProjectItem'
import {Container, ProjectContainer ,ProjectHeading
		,ProjectItemsContainer } from './projectsElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'
import ers from '../../assets/ERS_IMG.png'
import portfolio from '../../assets/Portfolio_IMG.jpg'
import camx from '../../assets/Camx_IMG.jpg'


export const Project = ({isdark}) => {

	const [is768, setIs768] = useState(false)

	 const toggle = useCallback(() => {
        if(window.innerWidth <= 768){
            setIs768(true)
        }
		else{
			setIs768(false)
		}
    },[])

	useEffect(() => {
		window.addEventListener('resize',toggle)
		return () => {
			window.removeEventListener('resize',toggle)
		}
	},[toggle])

	useEffect(() => {
		toggle()
	},[toggle])

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
	},[controls,isVisible])

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
						Description={`An open source Camera app which can leverage auxiliary cameras in any smartphone. Camx features ${<span>*all the functionalities</span>} of a stock camera app and supports from android version 7 to 12.`}
						Tech={['Android','Java','MLKit API','Camera2 API','RxJava']}
						ProjectLink={"https://github.com/uncannyRishabh/camx"}
						GithubLink={"https://github.com/uncannyRishabh/camx"}
						Image={camx}
						is768 = {is768}
						/>
					
					<ProjectItem 
						isdark={isdark}
						Title={'Portfolio'}
						Description={'A single page portfolio, designed in Figma and written in Javascript, comprising of smoooth animations, 3D renders, and articulate use of custom react hooks. Hosted in github pages.'}
						Tech={['React JS','Three JS','HTML','CSS']}
						ProjectLink={""}
						GithubLink={"https://github.com/uncannyRishabh/portfolio"}
						Image={portfolio}
						is768 = {is768}
						/>
					
					<ProjectItem 
						isdark={isdark}
						Title={'ERS'}
						Description={'An Exam Registration System (ERS) registers users for online exams and let users download client generated hall tickets after successful verification. Its aimed towards students lacking personal computer for easy filling up of exam forms.ERS also features an admin panel for the client.'}
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
