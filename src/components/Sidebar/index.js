import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from "./styles";
import menuPdf from "../../assets/menu.pdf";

const Sidebar = ({ isOpen, toggle }) => {

const openMenu = () => {
  window.open(menuPdf);
};

   
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to='/' onClick={openMenu}>
            MENU
          </SidebarLinks>
          <SidebarLinks to='contact' onClick={toggle}>
            CONTACT
          </SidebarLinks>
          <SidebarLinks to='location' onClick={toggle}>
            LOCATION
          </SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;