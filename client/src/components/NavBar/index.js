import React from "react";
import { FaBars } from 'react-icons/fa';
import { MainNav, NavbarContainer, NavElement, NavLogo, MobileIcon, NavMenu, NavLink, NavButton, NavBtnLink } from "./NavbarElements.styled";
import BrainduckLogo from './BrainDuck.png';

const Navbar = ({openClose}) =>{

    return(
        <>
            <MainNav>
                <NavbarContainer>
                    <NavLogo to="main" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}><img src={BrainduckLogo}></img></NavLogo>
                    <MobileIcon onClick={openClose}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavElement>
                            <NavLink to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>About</NavLink>
                        </NavElement>
                        <NavElement>
                            <NavLink to="contributors"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>Contributors</NavLink>
                        </NavElement>
                        <NavElement>
                            <NavLink to="code"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>Code</NavLink>
                        </NavElement>
                    </NavMenu>
                    <NavButton>                        
                        <NavBtnLink 
                        to="tryIt"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>Try It</NavBtnLink>
                    </NavButton>
                </NavbarContainer>
            </MainNav>
        </>
    )
}

export default Navbar