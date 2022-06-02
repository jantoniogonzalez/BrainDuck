import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkRouter} from "react-router-dom";
import {Link as LinkS} from "react-scroll"

export const MainTopbar = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    font-family: 'Tomorrow', sans-serif;
    background-color: rgb(19, 157, 212);
    color: ${({ theme }) => theme.fontColors.nav};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%': '0')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    font-size: 2rem;
    top:1.2rem;
    right: 1.2rem;
    background: transparent;
    cursor: pointer;
    outline:none;
`

export const TopbarWrapper = styled.div`
    color: #000;
`

export const TopbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const TopbarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0ms.1s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        transition: 0.1s ease-in-out;
    }
`
export const TopbarBtnWrap = styled.nav`
    display: flex;
    justify-content: center;

`

export const Btn = styled(LinkS)`
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