import React from 'react';
import { NavbarContainer,
    Logo, SLogo,
    NavlinkContainer,
    NavLinks} from './NavBarElements';
import '../../App.css'

export const NavBar = () => {
    return (
        <NavbarContainer>
            {/* <p className='para'>{'<'}u
            <span className='s1'>ncanny</span>
            R<span className='s1'>ishabh</span>{'>'}
            </p> */}
            <Logo> {'<'}uncannyRishabh{'>'}</Logo>
            <SLogo>{'<'}/{'>'}</SLogo>
            
            <NavlinkContainer>
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
  )
};
