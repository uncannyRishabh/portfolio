import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: row;
    margin: 22px;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const PTitle = styled.h2`
    transform: translateY(-20px);
`

export const PImage = styled(motion.div)`
    display: flex;
    height: 265px;
    width: 350px;
    background-color: aqua;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const PContainer = styled(motion.div)`
    display: flex;
    max-width: 250px;
    height: 100%;
    max-height: 200px;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    transform: translateX(-25%);

    @media screen and (max-width: 768px) {
        width: 100%;
        transform: translateX(0%) translateY(0px);
    }
`

export const PDescription = styled.p`
    max-lines: 4;
`

export const PTechs = styled.h3`

`
