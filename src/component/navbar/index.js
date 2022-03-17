import React, { useEffect, useState } from 'react'
import {Nav, NavbarContainer,
    Logo, SLogo,Lottie,
    NavlinkContainer,
    NavLinks, HomeLink} from './NavBarElements'
import lottie from "lottie-web/build/player/lottie_light"
import lottieToggle from '../../assets/dark-mode.json'

import '../../App.css'
import { useCallback } from 'react/cjs/react.development'

export const NavBar = ({isdark, toggle}) => {

    // window.onscroll = function() {
    //     let top = window.scrollY
    //     const Navbar = document.getElementById('Nav')
    //     Navbar.style.transition = 'all .5s ease'
    //     if(top >= 300) {
    //         Navbar.style.backdropFilter = 'blur(6px)'
    //          // box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.3);
    //     }
    //     else {
    //         Navbar.style.backdropFilter = 'none'
    //     }
    // }

    //ADDING .shine CLASS ON load
    
    

    let [width, updateWidth] = useState(window.innerWidth)
    updateWidth = () => width = window.innerWidth

    const mouseMove = (e) => {
        const mNavlinkContainer = document.getElementById('navlinkContainer')
        const { x, y } = mNavlinkContainer.getBoundingClientRect()
        mNavlinkContainer.style.setProperty('--x', e.clientX - x)
        mNavlinkContainer.style.setProperty('--y', e.clientY - y)
    }
    
    const displayShiningHover = useCallback(() => {
        const mNavlinkContainer = document.getElementById('navlinkContainer')
        if(width > 580 ){
            mNavlinkContainer.classList.add('shiny')
            mNavlinkContainer.addEventListener('mousemove', mouseMove)
        }
        else{
            mNavlinkContainer.classList.remove('shiny')
        }
    },[width])

    const reRenderDOM = useCallback(() => {
        updateWidth()
        displayShiningHover()
    }, [displayShiningHover])

    window.addEventListener('resize', reRenderDOM)

    useEffect(() => {
        window.addEventListener('load', () => displayShiningHover())
        reRenderDOM()
        return () => document.getElementById('navlinkContainer').removeEventListener('mousemove', mouseMove)
    },[reRenderDOM,displayShiningHover])


    //ANIMATING NIGHT MODE TOGGLE

    const [animation, setAnimation] = useState({})
    
    const container  = document.querySelector("#darktoggle")

    useEffect(() => {
        setAnimation(lottie.loadAnimation({
            container: container,
            animationData : lottieToggle,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            duration: 1
        }))

      }, [container]);

      useEffect(() => {
          if(isdark) animation.playSegments([[40,45],[45,100]], true)
      },[isdark,animation])

    const animate = () => {
        toggle()
        if(isdark){
            animation.playSegments([[100,58],[58,55]], true)
        }
        else {
            animation.playSegments([[40,45],[45,100]], true)
        }
    }


    return (
        <Nav id="Nav">
            <NavbarContainer>
                <HomeLink to='Home'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                    <Logo isdark = {isdark}>
                        {'<'}<SLogo isdark = {isdark}>uncannyRishabh</SLogo>{'>'}
                    </Logo>
                </HomeLink>
                
                <NavlinkContainer id='navlinkContainer'
                 isdark = {isdark}>
                    <NavLinks to='AboutMe'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        $isdark = {isdark}>ABOUT ME</NavLinks>
                    <NavLinks to='Projects'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        isdark = {isdark}>PROJECTS</NavLinks>
                    <NavLinks to='Experience'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        isdark = {isdark}>EXPERIENCE</NavLinks>
                    <NavLinks to='Contact'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        isdark = {isdark}>CONTACT</NavLinks>
                </NavlinkContainer>
        </NavbarContainer>
        <Lottie id="darktoggle" onClick={animate}/>
        </Nav>

  )
};