import React, { useEffect, useState } from "react";
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer, NavLogo , MobileIcon,NavLink, NavItem, NavMenu,NavBtnLink,NavBtn } from './headerElement'
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle})=>{

    const [scrollNav ,setScrollNav] = useState(false);

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);
     
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    
    return(
        <>
        <IconContext.Provider value={{color:'#fff'}}>
       <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
                  Swiss
            </NavLogo>
            <MobileIcon onClick={toggle}> 
          <FaBars />
        </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLink smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}to="about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}to="discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80} to="services">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}to="signup">Sign Up</NavLink>
                </NavItem>
            </NavMenu>
            <NavBtn>
          <NavBtnLink to = "/signinpage">Sign In</NavBtnLink>
        </NavBtn>
        </NavbarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    )
}
export default Navbar