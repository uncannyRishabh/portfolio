import React, { useEffect } from 'react';
import {Nav, NavbarContainer,
    Logo, SLogo,
    NavlinkContainer,
    NavLinks, HomeLink} from './NavBarElements';
import '../../App.css'

export const NavBar = () => {

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

    const buttonRef = React.useRef(null)

    const mouseMove = (e) => {
        const { x, y } = buttonRef.current.getBoundingClientRect();
        buttonRef.current.style.setProperty('--x', e.clientX - x);
        buttonRef.current.style.setProperty('--y', e.clientY - y);
    }

    // let width = window.innerWidth
    // window.onresize(() => {
    //     width = window.innerWidth
    // })

    useEffect(() => {
        if(window.innerWidth > 580 ){
            document.getElementById('navlinkContainer').classList.add('shiny')
            console.log(window.innerWidth)
            if(buttonRef) {
                buttonRef.current.addEventListener('mousemove', mouseMove)
            }
        }
        else{
            document.getElementById('navlinkContainer').classList.remove('shiny')
        }
        return () => buttonRef.current.removeEventListener('mousemove', mouseMove)
    })

    return (
        <Nav id="Nav">
            <NavbarContainer>
                <HomeLink to='Home'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>
                    <Logo>
                        {'<'}<SLogo>uncannyRishabh</SLogo>{'>'}
                    </Logo>
                    {/* <SLogo>{'<'}/{'>'}</SLogo> */}
                </HomeLink>
                
                <NavlinkContainer id='navlinkContainer'
                 ref={buttonRef}>
                    <NavLinks to='AboutMe'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>ABOUTME</NavLinks>
                    <NavLinks>PROJECTS</NavLinks>
                    <NavLinks>SKILLS</NavLinks>
                    <NavLinks>HOBBIES</NavLinks>
                </NavlinkContainer>
        </NavbarContainer>
        </Nav>
        
  )
};