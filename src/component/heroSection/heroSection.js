import styled from "styled-components";
import { motion } from 'framer-motion'

// export const MotionDiv = styled(motion.div)`
//     display: flex;
//     height: 100vh;
//     width: 100%;
// `

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    overflow: hidden;
    background-image: linear-gradient(to bottom , #695DEE, #D96A6A);
`

export const Content = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-inline: 6%;
    transform-style: preserve-3d;
    /* transform: translate(30%); */
`

export const IntroL1 = styled(motion.h3)`
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    margin-bottom: 3%;
    color: #fff;
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
    color: #fff;
    transition: all .5s ease-in-out;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`