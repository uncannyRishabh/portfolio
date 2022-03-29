import React,{useEffect} from 'react'
import { ExpContainer, ExperienceHeading
		,ExperienceContainer, Fresher } from './experienceElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'
import { MathUtils } from 'three'

export const Experience = ({isdark}) => {
	
	// const fresh = document.getElementById('Fresher')

	// const broke = setTimeout(() => {
	// 	console.log('Animation End')
	// 	const fresh = document.getElementById('Fresher')
	// 	fresh.style.transition = 'transform .5s'
	// 	fresh.style.transform = 'rotate(-20deg)'
	// }, MathUtils.clamp(Math.random()*10000 + 1000, 3000, 5500) )

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
			},MathUtils.clamp(Math.random()*10000 + 300, 700, 2300))
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
			{transform: 'rotate(0deg) scale(1)'}
		],{
			duration: 700,
			iterations: 1,
		})
	}
	
	const container = {
		hidden: {
		  transition:{
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
		show: { opacity: 1 , y: 0,
			transition: {
                duration: .5,
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