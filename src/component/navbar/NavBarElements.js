import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarContainer = styled.div`
    display: flex;
    background-color: #000;
    height: 80px;
    width: 100%;
    position: fixed;
    align-items: center;
    transition: display .5s ease-in-out;
    justify-content: center;
`

export const Logo = styled.div`
    color: white;
    content: "•";
    @media screen and (max-width:768px){
        display: none;
        
    }
`

export const SLogo = styled.div`
    color: white;
    display: none;

    @media screen and (max-width:768px){
        display: inline-block;
        
    }
`

export const NavlinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 50px;
`

export const NavLinks = styled(Link)`
    color: #fff;
    padding-right: 15px;
    cursor: pointer;
`