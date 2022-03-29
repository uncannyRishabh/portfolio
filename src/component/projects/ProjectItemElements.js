import styled from 'styled-components'
import { motion } from 'framer-motion'
import { dark, light, colors } from '../../assets/colors'
import GitLight from '../../assets/GitHub-Mark-64px.png'

export const Container = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top   : 6%;
    /* margin-bottom: 24px; */
    align-items: center;
    position: relative;
    @media screen and (max-width: 768px) {
        margin-top   : 12%;
        margin-bottom: 4%;
        flex-direction: column;
    }
`

export const PImage = styled(motion.div)`
    display: flex;
    height: 330px;
    width: 50%;
    background-image: ${props => `url(${props.iurl})`};
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 4px;
    /* flex: 1.3; */
    @media screen and (max-width: 768px) {
        flex: auto;
        width: 100%;
        
    }
`

export const PTitle = styled.h2`
    position: absolute;
    transform: translateX(8px) translateY(-25px);
    font-size: 2em;
    color: ${({isdark}) => (isdark ? dark.h2Text : light.h2Text)};
`

export const PContainer = styled(motion.div)`
    width: 55%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    background-color: aliceblue;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    position: absolute;
    @media screen and (max-width: 768px) {
        width: 100%;
        background: linear-gradient(rgba(250,250,250,.3),rgba(255,255,255,1));
        flex: auto;
        bottom: 0;
        
    }
`

export const PDescription = styled.p`
    max-lines: 4;
    @media screen and (max-width: 768px) {
        font-size: small;
    }
`

export const TContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 12px;
    align-items: center;
    align-self: flex-end;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        align-self: flex-start;
    }
`

export const PTechs = styled.h3`
    font-size: small;
    padding-right: 16px;
    cursor: pointer;
`

export const TC = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const LContainer = styled(motion.div)`
    display: flex;
    align-items: center;
`

export const Github = styled.div`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    background-image: url(${GitLight});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    cursor: pointer;
`

export const PLink = styled.a`
    border-radius: 24px;
    font-size: larger;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
`
