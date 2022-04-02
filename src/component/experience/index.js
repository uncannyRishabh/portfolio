import React,{useEffect} from 'react'
import { ExpContainer, ExperienceHeading
		,ExperienceContainer, Fresher } from './experienceElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'
import { MathUtils } from 'three'

export const Experience = ({isdark}) => {
	
	const fix = () => {
		document.getElementById('Fresher').style
		.transform = 'rotate(0deg)'
	}

	const controls = useAnimation()
	
	const [ref , isVisible] = useIsIntersecting({
		root: null,
		rootMargin: "0px",
		threshold: .3
	})

	useEffect(() => {
		let t
		if(isVisible) {
			controls.start("show")
			animateF()
			t = setTimeout(() => {
				document.getElementById('Fresher').style
				.transform = `rotate(-20deg)`
			},MathUtils.clamp(Math.random()*1000 + 600 , 700, 1500))
		}
		else {
			controls.start("hidden")
		}

		return () => {
			document.getElementById('Fresher').style
				.transform = `rotate(0deg)`
			clearTimeout(t)
		  };
	},[isVisible,controls])

	const animateF = () => {
		document.getElementById('Fresher').animate([
			{transform: 'rotate(900deg) scale(0)'},
			{transform: 'rotate(0deg)   scale(1)'}
		],{
			duration: 600,
			iterations: 1,
		})
	}
	
	const container = {
		hidden: {
		  transition:{
			  duration: .1,
		  },
		},
		show: {
			transition: {
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
        <ExpContainer id='Experience'
			ref={ref}
			variants={container}
			initial='hidden'
			animate={controls}
			>
			<ExperienceHeading
				isdark={isdark}
				variants={item}
				>
				Experience
			</ExperienceHeading>
			<ExperienceContainer>
				<Fresher
					id='Fresher'
					isdark={isdark}
					onClick={fix}
					>
					Fresher
				</Fresher>
			</ExperienceContainer>
        </ExpContainer>
      )
}