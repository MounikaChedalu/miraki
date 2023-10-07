import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom'; 
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from 'mdb-react-ui-kit';
import MediaQuery from 'react-responsive';

const Navbar = () => {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <div className="container">
        <span className='travelo'>
          <img src={logo} alt="" />
          Travelo
        </span>
      </div>

      <MediaQuery maxWidth={768}>
        {(matches) => (
          <div>
            {matches ? (
              <MDBNavbar>
                <MDBContainer fluid>
                  <MDBNavbarToggler
                    className='ms-auto'
                    type='button'
                    data-target='#navbarToggleExternalContent'
                    aria-controls='navbarToggleExternalContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavExternal(!showNavExternal)}
                  >
                    {showNavExternal ? (
                      <VscChromeClose />
                    ) : (
                      <GiHamburgerMenu />
                    )}
                  </MDBNavbarToggler>
                </MDBContainer>
              </MDBNavbar>
            ) : (
              <div className='bg-light shadow-3 p-4 horizontal-menu'>
                <div className="horizontal-menu-center">
                  <MDBBtn className='border-bottom m-0' color='link'>
                    <Link to="/">Home</Link>
                  </MDBBtn>
                  <MDBBtn className='border-bottom m-0' color='link'>
                    <Link to="/services">Services</Link>
                  </MDBBtn>
                  <MDBBtn className='border-bottom m-0' color='link'>
                    <Link to="/recommend">Places</Link>
                  </MDBBtn>
                  <MDBBtn className='border-bottom m-0' color='link'>
                    <Link to="/testimonials">Testimonials</Link>
                  </MDBBtn>
                </div>
              </div>
            )}
            <MDBCollapse show={showNavExternal}>
              <div className='bg-light shadow-3 p-4 vertical-menu'>
                <MDBBtn block className='border-bottom m-0' color='link'>
                  <Link to="/" onClick={() => setShowNavExternal(false)}>
                    Home
                  </Link>
                </MDBBtn>
                <MDBBtn block className='border-bottom m-0' color='link'>
                  <Link to="/services" onClick={() => setShowNavExternal(false)}>
                    Services
                  </Link>
                </MDBBtn>
                <MDBBtn block className='border-bottom m-0' color='link'>
                  <Link to="/recommend" onClick={() => setShowNavExternal(false)}>
                    Places
                  </Link>
                </MDBBtn>
                <MDBBtn block className='border-bottom m-0' color='link'>
                  <Link to="/testimonials" onClick={() => setShowNavExternal(false)}>
                    Testimonials
                  </Link>
                </MDBBtn>
              </div>
            </MDBCollapse>
          </div>
        )}
      </MediaQuery>
      <div >
          <Link to = '/connect'>
          <button className='connect-button'>Connect</button>
        </Link>
        </div>
  
    </>
  );
};

export default Navbar;
