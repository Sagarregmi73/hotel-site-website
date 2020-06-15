
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Jumbotron,Container,Row,Col,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdSubscriptions} from "react-icons/md";
import {FcHome,FcAbout,FcServices} from "react-icons/fc";
import { Flag } from 'semantic-ui-react';
const Main = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="header" id="home">
      <Navbar fixed="top" color="info" dark >
        <NavbarBrand href="/" className="mr-auto">𝕾𝖆𝖌𝖆𝖗</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#home"><FcHome /> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about"><FcAbout /> About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services"><FcServices /> Services</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="jumbo">
      <Jumbotron >
      <h3>🆆🅴🅻🅲🅾🅼🅴 🆃🅾 🆂🅰🅶🅰🆁 🅰🅿🅰🆁🆃🅼🅴🅽🆃</h3>
      <p>𝐋𝐞𝐚𝐯𝐞 𝐇𝐚𝐩𝐩𝐲 𝐅𝐞𝐞𝐥 𝐇𝐚𝐩𝐩𝐲</p>
      <Button style={{backgroundColor:"black" ,border:"1px solid black"}}>More</Button>
      {" "}
              <Button  style={{backgroundColor:"#fff",color:"black",border:"1px solid #fff"}} ><MdSubscriptions /> Subscribe</Button>

      </Jumbotron>
      </div>

    </div>
  );
}

export default Main;
