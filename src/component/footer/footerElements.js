import styled from 'styled-components'
import { dark,light } from '../../assets/colors'

export const FooterContainer = styled.div`
    display: flex;
    width: 98%;
	height: 35vh;
    max-width: 1500px;
	justify-content: center;
    align-items: center;
    flex-direction: column;

	@media screen and (max-width: 768px) {
		height: 25vh;	
	}

	@media (max-aspect-ratio: 9/21) {
		height: 20vh;	
	}
`

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const FLine = styled.h3`
	font-size: medium;
	text-align: center;
	color: ${({isdark}) => (isdark ? dark.bwText : light.h1Text)};
	@media screen and (max-width: 768px) {
		font-size: small;
	}
`

export const Span = styled.a`
	display: inline-block;
	color: ${({isdark}) => (isdark ? 'rgb(95 90 170)' : 'rgb(80,70,190)')};
	cursor: pointer;
	transition: border .5s ease-in-out;
	border-bottom: none;
	text-decoration: none;
	:after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: ${({isdark}) => (isdark ? 'rgb(95 90 170)' : 'rgb(80,70,190)')};
		transition: width .3s;
	}

	&:hover::after {
		width: 100%;
	}
`