import styled from "styled-components";
import {Link as LinkS} from "react-scroll";


export const MainNav = styled.nav`
    background-color: ${({ theme }) => theme.bgColors.nav};
    color: ${({ theme }) => theme.fontColors.nav};
    font-family: 'Tomorrow', sans-serif;
    font-size: 20px;
    height: 90px;
    //margin-top: -80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.title`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavLogo = styled(LinkS)`
    height: 80px;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    margin-left: 24px;
    cursor: pointer;
`

export const NavElement = styled.li`
    height: 80px;
`

export const NavLink = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;

    &.active {
        //ADD ANIMATION HERE
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    border-radius: 50px;
    background-color: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #139dd4;
        color: #fff;
    }
`
