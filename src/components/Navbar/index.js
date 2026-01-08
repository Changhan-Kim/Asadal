import { React, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavHome,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavInstagram,
  MobileIcon,
} from "./styles";
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Instagram from "../../assets/instagram2.png";
import Asadal from "../../assets/Asadal.png";
import menuPdf from "../../assets/menu2026.pdf";  // line to change file names.

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

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

  const openInstagram = () => {
    window.open("https://www.instagram.com/asadal_korean_cuisine/");
  };

  const openMenu = () => {
    window.open(menuPdf);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#000' }}>
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <NavHome src={Asadal} />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/" onClick={openMenu}>Menu</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
              Contact
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="location"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
              Location
            </NavLinks>
          </NavItem>
          <NavBtn onClick={openInstagram}>
            <NavInstagram src={Instagram}></NavInstagram>
          </NavBtn>
        </NavMenu>
      </NavContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};
// Changes made for the sake of pushing to github (Ignore this in the future)
export default Navbar;
