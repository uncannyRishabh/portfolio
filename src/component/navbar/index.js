import React, { useEffect, useState, useCallback } from 'react'
import {Nav, NavbarContainer,
    Logo, SLogo,Lottie,
    NavlinkContainer,
    NavLinks, HomeLink, Icon} from './NavBarElements'
import lottie from "lottie-web/build/player/lottie_light"
import lottieToggle from '../../assets/dark-mode.json'
import '../../App.css'
import ICaboutme from '../../assets/navIcons/about_me_user_icon.png'
import ICcontact from '../../assets/navIcons/contact_call_icon.png'
import ICexperience from '../../assets/navIcons/experience_star_icon.png'
import ICprojects from '../../assets/navIcons/projects_design_icon.png'


export const NavBar = ({isdark, toggle}) => {

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
            duration: .3
        }))

    }, [container]);

    useEffect(() => {
		if(isdark)
			animation.playSegments([[40,45],[45,100]], true)
  	},[isdark,animation])

	const toggleAnimation = useCallback(() => {
		if(isdark === 1){
			console.log("DAY")
            animation.playSegments([[100,58],[58,55]], true)
        }
        else {
			console.log("NIGHT")
            animation.playSegments([[40,45],[45,100]], true)
        }
	},[animation,isdark])

    const animate = () => {
        toggle()
        toggleAnimation()
    }

	const duration = 200

    return (
        <Nav id="Nav">
            <NavbarContainer>
                <HomeLink to='Home'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={duration}
                        >
                    <Logo isdark = {isdark}>
                        {'<'}<SLogo isdark = {isdark}>uncannyRishabh</SLogo>{'>'}
                    </Logo>
                </HomeLink>
                
                <NavlinkContainer id='navlinkContainer'
                 isdark = {isdark}>
					<NavIcon to='AboutMe'
						isdark={isdark}
						Image={ICaboutme}
					 	Text='About Me'/>
					<NavIcon to='Projects'
						isdark={isdark}
						Image={ICprojects}
					 	Text='Projects'/>
					<NavIcon to='Experience'
						isdark={isdark}
						Image={ICexperience}
					 	Text='Experience'/>
					<NavIcon to='Contact'
						isdark={isdark}
						Image={ICcontact}
					 	Text='Contact'/>
                </NavlinkContainer>
        </NavbarContainer>
        <Lottie id="darktoggle" onClick={animate}/>
        </Nav>
  )
};

const NavIcon = ({to,isdark,Image,Text,duration=150}) => {
	return (
		<NavLinks to={to}
			activeClass="active"
			spy={true}
			smooth={true}
			isdark={isdark}
			duration={duration}>
				<Icon iurl={Image}/>
				{Text}
		</NavLinks>
	)
}