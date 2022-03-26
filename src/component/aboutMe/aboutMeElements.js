import styled from "styled-components";
import { motion } from 'framer-motion'
import { Canvas } from "react-three-fiber";
import {dark, light} from '../../assets/colors'

export const AboutMeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 98%;
    max-width: 1500px;
    /* align-items: center; */
    @media screen and (max-aspect-ratio: 1/1) {
        flex-direction: column;
    }

    @media screen and (max-aspect-ratio: 4/3) {
        align-items: center;
    }
`

export const AboutContainer = styled(motion.div)`
    display: flex;
    height: 100%;
    flex: 1;
    order: 1;
    padding-inline: 6%;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-aspect-ratio: 1/1) {
        justify-content: end;
        height: 50vh;
        width: 90%;
    }
`

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;

`

export const AboutHeading = styled(motion.h1)`
    font-variant: small-caps;
    font-size: 3.6em;
    margin-top: 18px;
    margin-bottom: 18px;
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};

    @media screen and (max-width: 980px){
        font-size: 2.7em;
    }

    @media screen and (max-width: 660px){
        font-size: 1.9em;
    }
`

export const Paragraph = styled(motion.p)`
    color: ${({isdark}) => (isdark ? dark.h2Text : light.h2Text)};
    height: 100%;
    max-width: 700px;
    overflow-y: hidden;

    @media screen and (max-width: 980px){
        font-size: .9em;
    }

    @media screen and (max-width: 660px){
        font-size: .82em;
    }
`

export const CanvasContainer = styled.div`
    display: flex;
    height: 90vh;
    flex: .6;
    order: 2;

    @media screen and (max-width: 780px) {
        height: 70vh;
        width: 35vw;
    }

    @media screen and (max-aspect-ratio: 4/3) {
        height: 70vh;
    }
    
    @media screen and (max-aspect-ratio: 1/1) {
        flex: 1;
        height: 50vh;
        width: 80vw;
    }
`

export const CCanvas = styled(Canvas)`
    display: block;
`
