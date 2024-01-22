import React, {useState,Fragment} from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Logo/Logo.svg";
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../redux/userAuth/actions'
import { useNavigate } from 'react-router-dom'
import RegisterModal from '../Authentication/RegisterModal'
import LoginModal from '../Authentication/LoginModal'

function TheCommonNav() {

  
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };
  const userLinkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'orange',
    fontSize: '25px',
    fontFamily: 'Brush Script MT'
  };


    const user=useSelector((state)=>state.auth.user)
console.log(user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")

}

const guestLinks = (
  <>
<Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link to="/" spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} alt="My logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
              to ="/"
            >
              <Link 
              style={linkStyle}
              to="/"
              >
                Home
               
              </Link>
            </Nav.Link>


            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                style={linkStyle}
                to="/why"
                
              >
                Why choose us
              </Link>
            </Nav.Link>


            <Nav.Item>
            <Nav.Link className={`${classes.nav__link} me-4`}>

            <Link
                style={linkStyle}
                to="/Dishes"
              
              >
                Our dishes
              </Link>
                
              
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            
               <RegisterModal />
              
              </Nav.Item>
              <Nav.Item>
             
                 <LoginModal />
            
            </Nav.Item>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
);

const authLinks = (
  <Fragment>

<Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} alt="My logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <Link
                style={linkStyle}
                to="/"
               
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
               style={linkStyle}
                to="/why"
              
              >
                Why choose us
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                style={linkStyle}
                to="/dishes"
                
              >
                Our dishes
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                style={userLinkStyle}
                to="/Dashboard"
               
              >
               {user && `Welcome ${user.name} `}
              </Link>
            </Nav.Link>
            <Nav.Link href="#" className={`${classes.nav__link} me-4`} onClick={handleLogout} >
            
                 Logout
               
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>








    
      <Nav.Link className={`${classes.nav__link} me-4`}>
      <Link to="/Dashboard">
        <span className="navbar-text mr-3">
        <strong>{user && `Welcome ${user.name} `}</strong>
        </span>
      </Link>
    </Nav.Link>
    
    <Nav.Link href="#" onClick={handleLogout} >

    <strong className="navbar-text mr-3"> Logout</strong> 
 
    </Nav.Link>
    
    
   
        <span className="navbar-text mr-3">
        <Link to="/">
        <strong>Home</strong>
        </Link>
        </span>
      
    
  </Fragment>
);











  //Layout and structure of the navbar to be passed to THENAV component
  return (
    <>
      <Navbar 
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
     
        
        <Navbar.Toggle  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto" navbar>
          {user && user ? authLinks: guestLinks}
          </Nav>
          </Navbar.Collapse>
      
    </Navbar>
    </>
  );
  //ENDS
};

export default TheCommonNav;
