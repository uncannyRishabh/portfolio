import { motion } from "framer-motion";
import styled from "styled-components";
import { dark, light } from "../../assets/colors";

export const ProjectContainer = styled(motion.div)`
    display: flex;
    width: 98%;
    max-width: 1500px;
    align-items: center;
    flex-direction: column;
`

export const Container = styled(motion.div)`
    display: flex;
    width: 88%;
    flex-direction: column;
    padding-inline: 6%;
`

export const ProjectHeading = styled(motion.h1)`
    font-size: 3.6em;
    font-variant: small-caps;
    margin-top: 10vh;
    margin-bottom: 18px;
    width: 80%;
    padding-inline: 6%;
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};

    @media screen and (max-width: 980px){
        font-size: 2.7em;
    }

    @media screen and (max-width: 660px){
        font-size: 1.9em;
    }
`

export const ProjectItemsContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* flex-wrap: wrap; */
`