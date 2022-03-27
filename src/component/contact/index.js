import React,{useEffect} from 'react'
import { C1, C2, ContactContainer, ContactHeading, Container, H2, Icon, MailMe } from './ContactElements'
import Gmail from '../../assets/Gmail.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Instaram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'
import Github from '../../assets/GitHub-Mark-64px.png'
import { dark,light } from '../../assets/colors'

export const Contact = ({isdark}) => {



	return (
		<ContactContainer id='Contact'>
			<ContactHeading isdark={isdark}>
				Contact
			</ContactHeading>
			<Container>
				<C1>
					{
						//LEVITATING
					}
					<MailMe target="_blank" href="mailto:rishabhrajgupta2000@gmail.com" rel="noreferrer" isdark={isdark}>
						<Icon style={{backgroundImage:`url(${Gmail})`}}/>
						<span style={{color:`${isdark ? dark.h2Text: light.h2Text}`}}>
							Mail Me
						</span>
					</MailMe>
				</C1>

				<H2 isdark={isdark}>
					connect with me
				</H2>

				<C2>
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
