import styled,{keyframes} from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.div`
    background-color: rgba(0,0,0,0);
    height: 70px;
    width: 100%;
    margin-top: 24px;
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
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: row;
`

export const SLogo = styled.span`
    color: white;
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
    border-radius: 16px;
    backdrop-filter: blur(6px);
    overflow: hidden;
    background: rgba(245, 245, 255, 0.08);
    box-shadow: 3px 3px 10px -6px rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 768px){
        position: fixed;
        bottom: 28px;
        left: 50%;
        width: 72%;
        padding: 22px;
        padding-inline: 28px;
        transform: translate(-50%);
    }
`

export const NavLinks = styled(Link)`
    color: #fff;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-shadow: 1px 4px 4px rgba(0,0,0,.2);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: 482px){
        font-size: 11px;
        font-weight: 300;
    }
`

export const HomeLink = styled(Link)`
    cursor: pointer;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
`