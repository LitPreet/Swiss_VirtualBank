import React ,{useState}from "react";
import ReactDOM from 'react-dom/client';
import SideBar from '../sidebar/sidebar.js'
import Navbar from '../navbars/header.js'
import HeroSection from "../HeroSection/index.js";
import InfoSection from "../InfoSection/index.js";
import Services from "../Services/index.js";
import Footer from "../Footer/index.js";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data.js";


const Home = ()=>{

    const[isOpen, setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <SideBar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Footer />
        </>
    )
}
export default Home