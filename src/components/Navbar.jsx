import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd,faHome,faMoon } from "@fortawesome/free-solid-svg-icons";
import medicalLogo from "./medical-logo.svg";

const AppNavbar = ({handleAccountClick,handleReminderClick}) => {
  const navbarStyle = {
    backgroundColor:  "#ffffff",
    borderBottom: "1px solid #dddddd",
    boxShadow:  "0px 1px 3px rgba(0, 0, 0, 0.1)",
    padding: "10px 20px"
  };

  const logoStyle = {
    height: "30px",
    marginRight: "10px"
  };
  const iconStyle = {
    cursor: "pointer",
    color:   "#555555",
    fontSize: "1.5rem",
    paddingLeft: "10px",
    paddingRight: "10px",
    transition: "all 0.2s ease"
  };
  const handleIconHover = (e) => {
    e.target.style.transform = "scale(1.2)";
  };

  const handleIconHoverEnd = (e) => {
    e.target.style.transform = "scale(1)";
  };
  return (
    <Navbar  bg="dark" variant="dark" expand="md" style={navbarStyle}>

      <Nav className="mx-auto" navbar>
        <img src={medicalLogo} alt="Medical logo" style={logoStyle} />
        <h3>Medical Reminder</h3>
      </Nav>
      <Nav navbar>
      <NavItem>
          <NavLink >
            <FontAwesomeIcon icon={faHome} style={iconStyle}   onClick={handleReminderClick}  onMouseEnter={handleIconHover}
              onMouseLeave={handleIconHoverEnd}/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink >
            <FontAwesomeIcon icon={faUserMd} style={iconStyle} onClick={handleAccountClick}  onMouseEnter={handleIconHover}
              onMouseLeave={handleIconHoverEnd} />
          </NavLink>
        </NavItem>
      </Nav>
  
    </Navbar>
    
  );
};

export default AppNavbar;
