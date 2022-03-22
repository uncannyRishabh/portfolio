import styled, {keyframes} from "styled-components";
import { motion } from 'framer-motion'
import {dark, light} from '../../assets/colors'
import { Canvas } from "react-three-fiber";

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 98%;
    max-width: 1500px;

    @media screen and (max-aspect-ratio: 13/14) {
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-aspect-ratio: 4/3) {
        align-items: center;
    }
`

export const Content = styled(motion.div)`
    display: flex;
    height: 100%;
    order: 1;
    flex: 1 ;
    justify-content: center;
    padding-inline: 6%;
    flex-direction: column;

    @media screen and (max-aspect-ratio: 13/14) {
        height: 50vh;
        width: 90%;
        justify-content: end;
    }
`

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
`

export const IntroL1 = styled(motion.h1)`
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    margin-bottom: 3%;
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};
    transform: matrix(1, 0, 0, 1.1, 0, 0);

    @media screen and (max-width: 980px){
        font-size: 44px;
        margin-bottom: 4%;
    }

    @media screen and (max-width: 660px){
        font-size: 36px;
        margin-bottom: 4%;
    }
`

export const IntroL2 = styled(motion.h3)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.03em;
    color: ${({isdark}) => (isdark ?  dark.h2Text : light.h2Text)};

    @media screen and (max-width: 980px){
        font-size: 22px;
    }

    @media screen and (max-width: 660px){
        font-size: 18px;
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

export const CanvasContainer = styled.div`
    display: flex;
    height: 100%;
    flex: .5;
    order: 2;

    @media screen and (max-width: 780px) {
        width: 30vw;
    }

    @media screen and (max-aspect-ratio: 4/3) {
        height: 70vh;
    }
    
    @media screen and (max-aspect-ratio: 13/14) {
        flex: 1;
        height: 50vh;
        width: 80vw;
    }
`

export const CCanvas = styled(Canvas)`
    display: block;
`
