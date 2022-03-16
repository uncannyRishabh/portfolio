import styled, {keyframes} from "styled-components";
import { motion } from 'framer-motion'
import {dark, light} from '../../assets/colors'
import { Canvas } from "react-three-fiber";

export const HomeContainer = styled(motion.div)`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${({isdark}) => (isdark ? dark.appBackground : light.appBackground)};
    transition: background-color .7s ease-in-out;
    /* background-image: linear-gradient(to bottom , #695DEE, #D96A6A); */
    @media screen and (max-aspect-ratio: 13/14) {
        flex-direction: column;
    }
`

export const Content = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    order: 1;
    flex: 1 ;
    position: relative;
    padding-inline: 6%;
    transform-style: preserve-3d;
    
    /* transform: translate(30%); */

    @media screen and (max-aspect-ratio: 13/14) {
        height: 50vh;
        width: 90%;
        justify-content: end;
    }
`

export const IntroL1 = styled(motion.h3)`
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    margin-bottom: 3%;
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};
    transform: matrix(1, 0, 0, 1.1, 0, 0);
    transition: all .5s ease-in-out;

    @media screen and (max-width: 768px){
        font-size: 46px;
        margin-bottom: 6%;
    }
`

export const IntroL2 = styled(motion.h3)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    letter-spacing: 0.03em;
    color: ${({isdark}) => (isdark ?  dark.h2Text : light.h2Text)};
    transition: all .5s ease-in-out;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`

const wave = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

export const EmojiSpan = styled.span`
    cursor: default;
    transform-origin: 70% 70%;
    display: inline-block;

    :hover {
        animation-name: ${wave};
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-delay: .4s;
        transform-origin: 70% 70%;
    }
`

export const CCanvas = styled(Canvas)`
    width: 100%;
    height: 100%;
    /* order: 2; */
    flex: 5;
    /* @media screen and (max-width : 768px) {
        flex-shrink: 4;
        width: 80vw;
    } */
`

export const CanvasContainer = styled.div`
    display: flex;
    flex: .5;
    order: 2;

    @media screen and (max-width: 780px) {
        width: 30vw;
    }
    
    @media screen and (max-aspect-ratio: 13/14) {
        height: 50vh;
        width: 80vw;
    }
`