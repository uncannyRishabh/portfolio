import styled,{keyframes} from "styled-components";
import { Link } from "react-scroll";
import {dark, light} from '../../assets/colors'


export const Nav = styled.div`
    height: 70px;
    width: 94%;
    margin-top: 24px;
    margin-inline: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 100%;
    width: 96%;
    align-items: center;
    transition: display .5s ease-in-out;
    justify-content: space-between;
    margin-left: 22px;
    @media screen and (max-width : 768px){
        height: 100%;
        width: 90%;
    }
`

const SlideOut  = keyframes`
    0% {
        margin-left: -80px;
    }

    100% {
        margin-left: 0px;
    }
`

const SlideIn = keyframes`
    0% {
        margin-left: 0px;
        color: rgba(255,255,255,1);
    }

    90% {
        color: rgba(255,255,255,0.2);
    }

    100% {
        margin-left: -126px;
        color: rgba(255,255,255,0);
    }
`

export const Logo = styled.div`
    color: ${({isdark}) => (isdark ? '#fff' : '#000')};
    overflow: hidden;
    display: flex;
    flex-direction: row;
    transition: all .5s ease-in-out;
`

export const SLogo = styled.span`
    color: ${({isdark}) => (isdark ? '#fff' : '#000')};
    /* background-color: #ffa; */
    display: flex;
    flex-direction: row;
    width: 135px;
    overflow: hidden;
    transition: all .5s ease-in-out;
    animation : ${SlideOut} .5s ease;
    font-family: "Manrope", Helvetica, sans-serif;
    font-weight: 300;
    letter-spacing: 0.05em;
    transition: all .5s ease-in-out;
    @media screen and (max-width:768px){
        /* display: none; */
        animation : ${SlideIn} .5s ease-in-out;
        margin-left: -126px;
        color: rgba(255,255,255,0);
        text-shadow: none;
    }
`

export const NavlinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 360px;
    justify-content: space-between;
    align-items:center;
    padding: 23px;
    padding-inline: 36px;
    border-radius: 14px;
    backdrop-filter: blur(6px);
    overflow: hidden;
    background: ${({isdark}) => (isdark ? dark.navContainer : light.navContainer)};
    box-shadow: 3px 3px 10px -6px rgba(0, 0, 0, 0.25);
    transition: all .5s ease-in-out;

    @media screen and (max-width: 768px){
        position: fixed;
        bottom: 16px;
        left: 50%;
        width: 84%;
        padding: 10px;
        padding-inline: 34px;
        transform: translate(-50%);
		border-radius: 12px;
    }

    @media screen and (max-width: 600px) {
        width: 74%;
    }

	@media (max-aspect-ratio: 9/16) {
		padding: 6px;
        padding-inline: 24px;
	}
`

export const NavLinks = styled(Link)`
    color: ${({isdark}) => (isdark ? dark.navLink : light.navLink)};
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-shadow: 0px 0px 6px ${({isdark}) => (isdark ? dark.textShadow : light.textShadow)};
    cursor: pointer;
    transition: all 0.5s ease-in-out;

	display: flex;
	flex-direction: column;
	align-items: center;
    :hover {
        transition: text-shadow 0.2s ease-in-out;
        text-shadow: 0px 0px 8px ${({isdark}) => (isdark ? dark.textShadowHover : light.textShadowHover)};
    }

    @media screen and (max-width: 482px){
        font-size: 11px;
    }

	@media (max-aspect-ratio: 9/16) {
		font-size: 9px;
		color: #303C42;
	}
`

export const HomeLink = styled(Link)`
    cursor: pointer;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
`

export const Lottie = styled.div`
    height: 86px;
    width: 86px;
`

export const Icon = styled.div`
	height: 0;
	width: 0;
	background-image: ${props => `url(${props.iurl})`};
    background-size: 60%;
	background-repeat: no-repeat;
    background-position: 40% 70%;
    border-radius: 4px;
	@media screen and (max-width: 768px) {
		height: 30px;
		width: 30px;
	}
`