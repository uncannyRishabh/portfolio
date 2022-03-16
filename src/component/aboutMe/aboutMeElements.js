import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import { motion } from "framer-motion";
import { dark,light } from "../../assets/colors";

export const AboutMeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-content: center;
    flex-direction: row;
    @media screen and (max-aspect-ratio: 1/1) {
        align-items: center;
        flex-direction: column;
    }
`

export const AboutContainer = styled(motion.div)`
    display: flex;
    height: 100%;
    flex: 1;
    order: 1;
    padding-inline: 6%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-aspect-ratio: 13/14) {
        height: 50vh;
        width: 90%;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`

export const AboutHeading = styled(motion.h1)`
    font-variant: small-caps;
    font-size: xx-large;
    margin-top: 18px;
    margin-bottom: 18px;
    text-align: center;
    color: ${({isdark}) => (isdark ? dark.bwText : light.bwText)};
`

export const CCanvas = styled(Canvas)`
    display: block;
`

export const CanvasContainer = styled.div`
    display: flex;
    flex: .7;
    order: 2;

    @media screen and (max-width: 780px) {
        width: 35vw;
    }
    
    @media screen and (max-aspect-ratio: 1/1) {
        flex: 1;
        height: 50vh;
        width: 80vw;
    }
`

export const Paragraph = styled(motion.p)`
    color: ${({isdark}) => (isdark ? dark.bwText : light.bwText)};
    height: 100%;
    min-height: 280px;
    overflow-y: scroll;
`