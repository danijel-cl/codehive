import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="site-header site-header--menu-right bg-default py-7 py-lg-0 site-header--absolute site-header--sticky reveal-header">
        <div className="container">
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">
            {/* Brand Logo*/}
            <div className="brand-logo">
              <Link to="/">
                {/* light version logo (logo must be black)*/}
                <img src={process.env.PUBLIC_URL + '/resources/image/logo-main-black.png'} alt="" className="light-version-logo default-logo" />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="mobile-menu">
              <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/posts/">Jobs</Link>
                  </li>
                </ul>
              </div>
              <button className="d-block d-lg-none offcanvas-btn-close focus-reset" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="true" aria-label="Toggle navigation">
                <i className="gr-cross-icon" />
              </button>
            </div>
            {!props.isLoggedIn ? (
              <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
                <button className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset">
                  Log in
                </button>
                <button className="btn btn-primary text-uppercase font-size-3">
                  Sign up
                </button>
              </div>
            ) : (
              null
            )}
            <div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
              <div>
                <a href="#" className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative">
                  <i className="fas fa-bell heading-default-color" />
                  <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">3</span>
                </a>
              </div>
              <div>
                <div className="dropdown show-gr-dropdown py-5">
                  <a className="proile media ml-7 flex-y-center" href="./candidate-profile-main.html" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="circle-40">
                      <img src={process.env.PUBLIC_URL + "resources/image/header-profile.png"} alt="" />
                    </div>
                    <i className="fas fa-chevron-down heading-default-color ml-6" />
                  </a>
                  <div className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/users/:id/jobs">My jobs</Link>
                    <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/users/:id/">Profile</Link>
                    <Link className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/companies/:id/dashboard">Dashboard</Link>
                    <Link className="dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase" to="/">Log Out</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Menu Hamburger*/}
            <button className="navbar-toggler btn-close-off-canvas  hamburger-icon border-0" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
              {/* <i class="icon icon-simple-remove icon-close"></i> */}
              <span className="hamburger hamburger--squeeze js-hamburger">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </span>
            </button>
            {/*/.Mobile Menu Hamburger Ends*/}
          </nav>
        </div>
      </header>
  );
};

export default Navbar;
