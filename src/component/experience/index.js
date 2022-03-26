import React,{useEffect, useRef} from 'react'
import { ExpContainer, ExperienceHeading
		,ExperienceContainer, Fresher } from './experienceElements'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'
import { MathUtils } from 'three'

export const Experience = ({isdark}) => {

	const fresh = useRef()
	
	const broke = setTimeout(() => {
		if(fresh.current) {
		fresh.current.style.transition = 'transform .5s'
		fresh.current.style.transform = 'rotate(-20deg)'
		}
		// console.clear()
		return () => {
			if(fresh.current)fresh.current.style.transition = 'none'
		}
	}, MathUtils.clamp( Math.random()*10000 + 1000, 3000, 5500) )

	const fix = () => {
		fresh.current.style.transform = 'rotate(0deg)'
	}

	const controls = useAnimation()
	
	const [ref , isVisible] = useIsIntersecting({
		root: null,
		rootMargin: "0px",
		threshold: .5
	})

	useEffect(() => {
		if(isVisible) {
			controls.start("show")
			fresh.current.style.transition = 'none'
		}
		else {
			controls.start("hidden")
		}
	},[isVisible,controls])
	
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
                delay: .5,
            }
		},
	}
	
	const itemS = {
		hidden: { opacity: 0 , rotate: 900, scale: 0.1,
			transition: {
				type: 'tween',
			}
		},
		show: { opacity: 1 , rotate: 0, scale: 1,
            transition: {
				delay: .3,
                duration: .7,
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
					isdark={isdark}
					variants={itemS}
					onClick={fix}
					onAnimationEnd={() => broke}
					ref={fresh}
					>
					Fresher
				</Fresher>
			</ExperienceContainer>
        </ExpContainer>
      )
}
