import styled from 'styled-components'
import { motion } from 'framer-motion'
import { dark,light } from '../../assets/colors'

export const ContactContainer = styled.div`
    display: flex;
    width: 98%;
    height: 100vh;
    max-width: 1500px;
    align-items: center;
    flex-direction: column;
`

export const ContactHeading = styled(motion.h1)`
    font-size: 3.6em;
    font-variant: small-caps;
    margin-top: 10vh;
    margin-bottom: 18px;
    width: 88%;

	/* background: ${({isdark}) => (isdark ? 
		`linear-gradient(${dark.h1Text} , rgb(150,90,80))`  : 
		`linear-gradient(${light.h1Text}, rgb(150,90,80))` )};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent; */
	
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};
    font-variant: small-caps;
    @media screen and (max-width: 980px){
        font-size: 2.7em;
    }

    @media screen and (max-width: 660px){
        font-size: 1.9em;
    }
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 88%;
	height: 100%;
`

export const C1 = styled.div`
	display: flex;
	width: 100%;
	height: 65%;
	align-items: center;
	justify-content: center;
	flex: 2;
`

export const H2 = styled.h3`
	font-size: 3.4em;
    font-variant: small-caps;
    margin-top: 18px;
    margin-bottom: 18px;
    width: 88%;
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};
    font-variant: small-caps;
    @media screen and (max-width: 980px){
        font-size: 2.7em;
    }

    @media screen and (max-width: 660px){
        font-size: 1.9em;
    }
`

export const Icon = styled(motion.a)`
	height: 48px;
	width: 48px;
	border-radius: 24px;
	background-color: white;
	background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
	margin: 12px;
`

export const MailId = styled.h3`
	font-size: 2em;
	@media screen and (max-width: 768px){
		font-size: small;
	}
`

export const MailMe = styled.a`
	display: flex;
	/* padding-top: calc(4px + 1%);
	padding-bottom: calc(4px + 1%); */
	/* padding-inline: calc(4px + 2%); */
	padding: 2px;
	padding-right: calc(4px + 2%);
	align-items: center;
	font-size: calc(2% + 22px);
	font-family: 'Poppins';
	font-weight: 700;
	text-decoration: none;
	color: white;
	border-radius: 12px;
	cursor: pointer;
	background-color: ${({isdark}) => (isdark ? dark.bwText : dark.bwText)};
`

export const C2 = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex: .6;
`
