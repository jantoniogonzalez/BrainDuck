import React, {useState} from "react";
import Navbar from '../NavBar';
import Topbar from "../Topbar";
import Home from "../Home"


const Main = ({id}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openClose = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Topbar isOpen = {isOpen} openClose={openClose}></Topbar>
            <Navbar openClose={openClose}></Navbar>
            <Home id={id}></Home>
        </>
    )
}

export default Main