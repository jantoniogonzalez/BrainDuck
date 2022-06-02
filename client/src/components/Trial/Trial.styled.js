import styled from "styled-components";
import { Link } from "react-scroll";

export const CodeInput = styled.textarea`
    width: 85vh;
    height: 200px;
`

export const CodeOutput = styled.textarea`
    width: 85vh;
    height: 200px;
`

export const Btn = styled.button`
    font-family: 'Tomorrow', sans-serif;
    border-radius: 50px;
    text-align: center;
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
