import React,{useEffect} from 'react'
import { C1, C2, ContactContainer, ContactHeading, Container, H2, Icon, IconD, MailMe } from './ContactElements'
import Gmail from '../../assets/Gmail.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Instaram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'
import Github from '../../assets/GitHub-Mark-64px.png'
import { dark,light } from '../../assets/colors'
import { useAnimation } from 'framer-motion'
import { useIsIntersecting } from '../../utils/IntersectionObserver'

export const Contact = ({isdark}) => {

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
		<ContactContainer id='Contact'
			ref={ref}
			variants={container}
			initial='hidden'
			animate={controls}>
			<ContactHeading isdark={isdark} variants={item}>
				Contact
			</ContactHeading>
			<Container>
				<C1>
					{
						//LEVITATING
					}
					<MailMe target="_blank" href="mailto:rishabhrajgupta2000@gmail.com" rel="noreferrer" isdark={isdark}>
						<IconD variants={item} style={{backgroundImage:`url(${Gmail})`}}/>
						<span style={{color:`${isdark ? dark.h2Text: light.h2Text}`}}>
							Mail Me
						</span>
					</MailMe>
				</C1>

				<H2 isdark={isdark} variants={item}>
					connect with me
				</H2>

				<C2 variants={item}>
					<Icon target="_blank" href="https://www.linkedin.com/in/rishabh-raj-gupta-516b521b7/" rel="noreferrer"
					style={{backgroundImage:`url(${LinkedIn})`}}/>
					<Icon target="_blank" href="https://github.com/uncannyRishabh" rel="noreferrer"
					style={{backgroundImage:`url(${Github})`}}/>
					<Icon target="_blank" href="https://twitter.com/uncanny_rishabh" rel="noreferrer"
					style={{backgroundImage:`url(${Twitter})`}}/>
					<Icon target="_blank" href="https://www.instagram.com/uncanny_rishabh/" rel="noreferrer"
					style={{backgroundImage:`url(${Instaram})`}}/>
				</C2>
			</Container>
			
		</ContactContainer>
	)
}
