import styled from 'styled-components'
import {motion} from 'framer-motion'
import {dark, light} from '../../assets/colors'

export const ExpContainer = styled(motion.div)`
    display: flex;
    width: 98%;
    height: 100vh;
    max-width: 1500px;
    align-items: center;
    flex-direction: column;
`

export const ExperienceHeading = styled(motion.h1)`
    font-size: 3.6em;
    font-variant: small-caps;
    margin-top: 10vh;
    margin-bottom: 18px;
    width: 88%;
    color: ${({isdark}) => (isdark ? dark.h1Text : light.h1Text)};
    font-variant: small-caps;
    @media screen and (max-width: 980px){
        font-size: 2.7em;
    }

    @media screen and (max-width: 660px){
        font-size: 1.9em;
    }
`

export const ExperienceContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Fresher = styled.h3`
    font-size: 3.5em;
    color: ${({isdark}) => (isdark ? 'white':light.h2Text)};
    cursor: pointer;
	transition: transform .5s ease-in-out;
`
