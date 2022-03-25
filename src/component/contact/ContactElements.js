import styled from 'styled-components'
import { motion } from 'framer-motion'
import { dark,light } from '../../assets/colors'

export const ContactContainer = styled.div`
    display: flex;
    width: 98%;
    height: 100vh;
    max-width: 1500px;
    align-items: center;
    flex-direction: column;
`

export const ContactHeading = styled(motion.h1)`
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