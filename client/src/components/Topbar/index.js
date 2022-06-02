import React from 'react'
import { MainTopbar, Icon, CloseIcon, TopbarWrapper, TopbarLink, TopbarMenu, TopbarBtnWrap, Btn } from './SidebarElements.styled'

const Topbar = ({isOpen, openClose}) => {

    return(
        <MainTopbar isOpen={isOpen} onClick={openClose}>
            <Icon onClick={openClose}>
                <CloseIcon/>
            </Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarLink to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80} 
                        onClick={openClose}>About</TopbarLink>
                    <TopbarLink to="contributors"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={openClose}>Contributors</TopbarLink>
                    <TopbarLink to="code"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80} 
                        onClick={openClose}>Code</TopbarLink>
                </TopbarMenu>
                <TopbarBtnWrap>
                    <Btn to="tryIt"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        onClick={openClose}>Try It</Btn>
                </TopbarBtnWrap>
            </TopbarWrapper>
        </MainTopbar>
    )
}

export default Topbar