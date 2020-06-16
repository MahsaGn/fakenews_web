import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import '../styles/style.css';
import { Nav, NavLink, Navbar, Form, NavbarBrand } from 'reactstrap';


class Header extends React.Component {
  render() {
    return (
      <Navbar id="header">
       
          <Nav className='header_right'>
            <NavLink href="#ContactUs" className="navlink">ارتباط با ما</NavLink>
            <NavLink href="#AboutUs" className="navlink">درباره ما</NavLink>
            <NavLink href="/authentication" className="navlink">ورود/ ثبت نام</NavLink>
          </Nav>
          
          <NavbarBrand href="/" id="navbrand" >
          <img className='header_home_img' src='home.png' />
        </NavbarBrand>

      </Navbar>
    )
  }
}

export default Header;