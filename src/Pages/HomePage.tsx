import React from 'react';
import Aos from 'aos';

export const HomePage = () => {
  Aos.init();
  return (
    <div>
    <div className="site-wrapper overflow-hidden ">
      {/* Header start  */}
      {/* Header Area */}
      <header className="site-header site-header--menu-right dynamic-sticky-bg py-7 py-lg-0 site-header--absolute site-header--sticky">
        <div className="container">
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">
            {/* Brand Logo*/}
            <div className="brand-logo">
              <a href="./index.html">
                {/* light version logo (logo must be black)*/}
                <img src="../image/logo-main-black.png" alt="" className="light-version-logo default-logo" />
                {/* Dark version logo (logo must be White)*/}
                <img src="../image/logo-main-white.png" alt="" className="dark-version-logo" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="mobile-menu">
              <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu">
                  <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle gr-toggle-arrow" id="navbarDropdown" href="#features" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home <i className="icon icon-small-down" /></a>
                    <ul className="gr-menu-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                      <li className="drop-menu-item">
                        <a href="home-1.html">
                          Homepage 01
                        </a>
                      </li>
                      <li className="drop-menu-item">
                        <a href="home-2.html">
                          Homepage 02
                        </a>
                      </li>
                      <li className="drop-menu-item">
                        <a href="home-3.html">
                          Homepage 03
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle gr-toggle-arrow" id="navbarDropdown2" href="#features" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <i className="icon icon-small-down" /></a>
                    <ul className="gr-menu-dropdown dropdown-menu" aria-labelledby="navbarDropdown2">
                      <li className="drop-menu-item dropdown">
                        <a className="dropdown-toggle gr-toggle-arrow" id="navbarDropdown242" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Job Pages
                          <i className="icon icon-small-down" />
                        </a>
                        <ul className="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown242">
                          <li className="drop-menu-item">
                            <a href="./search-grid.html">
                              Job Grid
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./search-list-1.html">
                              Job List
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./jobdetails.html">
                              Job Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-menu-item dropdown">
                        <a className="dropdown-toggle gr-toggle-arrow" id="navbarDropdown21" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dashboard
                          <i className="icon icon-small-down" />
                        </a>
                        <ul className="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown21">
                          <li className="drop-menu-item">
                            <a href="./dashboard-main.html">
                              Dashboard Main
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./dashboard-settings.html">
                              Settings
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./dashboard-posted-applicants.html">
                              Applicants
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./dashboard-posted-applicants.html">
                              Posted Jobs
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-menu-item dropdown">
                        <a className="dropdown-toggle gr-toggle-arrow" id="navbarDropdown25g" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Candidate Pages
                          <i className="icon icon-small-down" />
                        </a>
                        <ul className="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown25g">
                          <li className="drop-menu-item">
                            <a href="./candidate-profile-main.html">
                              Candidate Profile
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./candidate-profile.html">
                              Candidate Profile 02
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-menu-item dropdown">
                        <a className="dropdown-toggle gr-toggle-arrow" id="navbarDropdown242" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Search Pages
                          <i className="icon icon-small-down" />
                        </a>
                        <ul className="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown242">
                          <li className="drop-menu-item">
                            <a href="./search-grid.html">
                              Search Grid
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./search-list-1.html">
                              Search List 01
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./search-list-2.html">
                              Search List 02
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-menu-item">
                        <a href="./company-profile.html">
                          Company Profile
                        </a>
                      </li>
                      <li className="drop-menu-item dropdown">
                        <a className="dropdown-toggle gr-toggle-arrow" id="navbarDropdown242" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Account
                          <i className="icon icon-small-down" />
                        </a>
                        <ul className="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown242">
                          <li className="drop-menu-item">
                            <a href="javacript:" data-toggle="modal" data-target="#login">
                              Sign In
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="javacript:" data-toggle="modal" data-target="#signup">
                              Sign Up
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-menu-item dropdown">
                        <a className="dropdown-toggle gr-toggle-arrow" id="navbarDropdown26" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Essential
                          <i className="icon icon-small-down" />
                        </a>
                        <ul className="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown26">
                          <li className="drop-menu-item">
                            <a href="faq.html">
                              Faq
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./error-404.html">
                              404
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./pricing-page.html">
                              Pricing page
                            </a>
                          </li>
                          <li className="drop-menu-item">
                            <a href="./contact.html">Contact</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Support</a>
                  </li>
                </ul>
              </div>
              <button className="d-block d-lg-none offcanvas-btn-close focus-reset" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="true" aria-label="Toggle navigation">
                <i className="gr-cross-icon" />
              </button>
            </div>
            <div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
              <a className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset" href="javacript:" data-toggle="modal" data-target="#login">
                Log in
              </a>
              <a className="btn btn-primary text-uppercase font-size-3" href="javacript:" data-toggle="modal" data-target="#signup">
                Sign up
              </a>
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
      {/* navbar- */}
      {/* Login Modal */}
      <div className="modal fade form-modal" id="login" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog max-width-px-840 position-relative">
          <button type="button" className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper" data-dismiss="modal"><i className="fas fa-times" /></button>
          <div className="login-modal-main bg-white rounded-8 overflow-hidden">
            <div className="row no-gutters">
              <div className="col-lg-5 col-md-6">
                <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                  <div className="pb-9">
                    <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                      Welcome Back
                    </h3>
                    <p className="mb-0 font-size-4 text-white">Log in to continue your account
                      and explore new jobs.</p>
                  </div>
                  <div className="border-top border-default-color-2 mt-auto">
                    <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                      <div className="pt-5 px-9">
                        <h3 className="font-size-7 text-white">
                          295
                        </h3>
                        <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">New jobs
                          posted today</p>
                      </div>
                      <div className="pt-5 px-9">
                        <h3 className="font-size-7 text-white">
                          14
                        </h3>
                        <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">New companies
                          registered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                  <div className="row">
                    <div className="col-4 col-xs-12">
                      <button className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4" /> <span className="d-none d-xs-block">Log in with LinkedIn</span></button>
                    </div>
                    <div className="col-4 col-xs-12">
                      <button className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4" /> <span className="d-none d-xs-block">Log in with Google</span></button>
                    </div>
                    <div className="col-4 col-xs-12">
                      <button className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4" /> <span className="d-none d-xs-block">Log in with Facebook</span></button>
                    </div>
                  </div>
                  <div className="or-devider">
                    <span className="font-size-3 line-height-reset ">Or</span>
                  </div>
                  <form action="/">
                    <div className="form-group">
                      <label htmlFor="email" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
                      <input type="email" className="form-control" placeholder="example@gmail.com" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
                      <div className="position-relative">
                        <input type="password" className="form-control" id="password" placeholder="Enter password" />
                        <a href="#" className="show-password pos-abs-cr fas mr-6 text-black-2" data-show-pass="password" />
                      </div>
                    </div>
                    <div className="form-group d-flex flex-wrap justify-content-between">
                      <label htmlFor="terms-check" className="gr-check-input d-flex  mr-3">
                        <input className="d-none" type="checkbox" id="terms-check" />
                        <span className="checkbox mr-5" />
                        <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">Remember password</span>
                      </label>
                      <button className="font-size-3 text-dodger line-height-reset">Forget Password</button>
                    </div>
                    <div className="form-group mb-8">
                      <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">Log in </button>
                    </div>
                    <p className="font-size-4 text-center heading-default-color">Don’t have an account? <button className="text-primary">Create a free account</button></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up Modal */}
      <div className="modal fade form-modal" id="signup" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog max-width-px-840 position-relative">
          <button type="button" className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10" data-dismiss="modal"><i className="fas fa-times" /></button>
          <div className="login-modal-main bg-white rounded-8 overflow-hidden">
            <div className="row no-gutters">
              <div className="col-lg-5 col-md-6">
                <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                  <div className="pb-9">
                    <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                      Create a free account today
                    </h3>
                    <p className="mb-0 font-size-4 text-white">Create your account to continue
                      and explore new jobs.</p>
                  </div>
                  <div className="border-top border-default-color-2 mt-auto">
                    <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                      <div className="pt-5 px-9">
                        <h3 className="font-size-7 text-white">
                          295
                        </h3>
                        <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">New jobs
                          posted today</p>
                      </div>
                      <div className="pt-5 px-9">
                        <h3 className="font-size-7 text-white">
                          14
                        </h3>
                        <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">New companies
                          registered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                  <div className="row">
                    <div className="col-4 col-xs-12">
                      <button className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4" /> <span className="d-none d-xs-block">Import from LinkedIn</span></button>
                    </div>
                    <div className="col-4 col-xs-12">
                      <button className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4" /> <span className="d-none d-xs-block">Import from Google</span></button>
                    </div>
                    <div className="col-4 col-xs-12">
                      <button className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"><i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4" /> <span className="d-none d-xs-block">Import from Facebook</span></button>
                    </div>
                  </div>
                  <div className="or-devider">
                    <span className="font-size-3 line-height-reset">Or</span>
                  </div>
                  <form action="/">
                    <div className="form-group">
                      <label htmlFor="email2" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
                      <input type="email" className="form-control" placeholder="example@gmail.com" id="email2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password2" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
                      <div className="position-relative">
                        <input type="password" className="form-control" id="password2" placeholder="Enter password" />
                        <a href="#" className="show-password pos-abs-cr fas mr-6 text-black-2" data-show-pass="password2" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password23" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Confirm Password</label>
                      <div className="position-relative">
                        <input type="password" className="form-control" id="password23" placeholder="Enter password" />
                        <a href="#" className="show-password pos-abs-cr fas mr-6 text-black-2" data-show-pass="password23" />
                      </div>
                    </div>
                    <div className="form-group d-flex flex-wrap justify-content-between mb-1">
                      <label htmlFor="terms-check2" className="gr-check-input d-flex  mr-3">
                        <input className="d-none" type="checkbox" id="terms-check2" />
                        <span className="checkbox mr-5" />
                        <span className="font-size-3 mb-0 line-height-reset d-block">Agree to the <button className="text-primary">Terms &amp; Conditions</button></span>
                      </label>
                      <button className="font-size-3 text-dodger line-height-reset">Forget Password</button>
                    </div>
                    <div className="form-group mb-8">
                      <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase">Sign Up </button>
                    </div>
                    <p className="font-size-4 text-center heading-default-color">Don’t have an account? <button className="text-primary">Create a free account</button></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header start end */}
      {/* Hero Area */}
      <div className="bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">
        {/* .Hero pattern */}
        <div className="pos-abs-tr w-50 z-index-n2">
          <img src="./image/patterns/hero-pattern.png" alt="" className="gr-opacity-1" />
        </div>
        {/* ./Hero pattern */}
        <div className="container">
          <div className="row position-relative align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
              <h1 className="font-size-11 mb-12 pr-md-30 pr-lg-0">Find the perfect job
                that you deserve.</h1>
              <div >
                {/* .search-form */}
                <form action="/" className="search-form shadow-6">
                  <div className="filter-search-form-1 bg-white rounded-sm shadow-4">
                    <div className="filter-inputs">
                      <div className="form-group position-relative">
                        <input className="form-control focus-reset pl-13" type="text" id="keyword" placeholder="Job title" />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-zoom-2 text-primary font-weight-bold" /></span>
                      </div>
                      {/* .select-city starts */}
                      <div className="form-group position-relative">
                        <select name="country" id="country" className="nice-select pl-13 h-100 arrow-3 font-size-4">
                          <option  data-display="Location" className="text-uppercase">Location</option>
                          <option >United States of America</option>
                          <option >United Arab Emirates</option>
                          <option >Bangladesh</option>
                          <option >Pakistan</option>
                        </select>
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-pin-3 text-primary font-weight-bold" /></span>
                      </div>
                      {/* ./select-city ends */}
                    </div>
                    {/* .Hero Button */}
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                    </div>
                    {/* ./Hero Button */}
                  </div>
                </form>
                {/* ./search-form */}
                <p className="heading-default-color font-size-3 pt-7"><span className="text-smoke">Search keywords e.g.</span> Product Designer</p>
              </div>
            </div>
            {/* Hero Right Image */}
            <div className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
              <div className=" ml-xxl-23 ml-xl-12 ml-md-7">
                <img src="./image/l1/png/hero-image-man.png" alt="" className="w-100" />
              </div>
            </div>
            {/* ./Hero Right Image */}
          </div>
        </div>
      </div>
      {/* Hero Area */}
      {/* Brand1Section Area */}
      {/* Company Section */}
      <div className="bg-black-2 dark-mode-texts pt-13 pt-lg-24 pb-12 pb-lg-23">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-9 text-center text-lg-left">
                <h5 className="font-size-5 font-weight-normal">Get hired in top companies</h5>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            {/* Single Brand */}
            <div className="single-brand-logo mx-5 my-6" data-aos="fade-in" data-aos-duration={800} data-aos-once="true">
              <img src="./image/l1/png/brand-logo-1.png" alt="" />
            </div>
            {/* Single Brand */}
            <div className="single-brand-logo mx-5 my-6" data-aos="fade-in" data-aos-duration={800} data-aos-delay={300} data-aos-once="true">
              <img src="./image/l1/png/brand-logo-2.png" alt="" />
            </div>
            {/* Single Brand */}
            <div className="single-brand-logo mx-5 my-6" data-aos="fade-in" data-aos-duration={800} data-aos-delay={500} data-aos-once="true">
              <img src="./image/l1/png/brand-logo-3.png" alt="" />
            </div>
            {/* Single Brand */}
            <div className="single-brand-logo mx-5 my-6" data-aos="fade-in" data-aos-duration={800} data-aos-delay={700} data-aos-once="true">
              <img src="./image/l1/png/brand-logo-4.png" alt="" />
            </div>
            {/* Single Brand */}
            <div className="single-brand-logo mx-5 my-6" data-aos="fade-in" data-aos-duration={800} data-aos-delay={900} data-aos-once="true">
              <img src="./image/l1/png/brand-logo-5.png" alt="" />
            </div>
            {/* Single Brand */}
            <div className="single-brand-logo mx-5 my-6" data-aos="fade-in" data-aos-duration={800} data-aos-delay={1200} data-aos-once="true">
              <img src="./image/l1/png/brand-logo-6.png" alt="" />
            </div>
          </div>
          {/* End Brand Logos */}
        </div>
      </div>
      {/* End Company Section */}
      {/* Brand1Section Area */}
      {/* category Area */}
      {/* Category Area */}
      <div className="pt-11 pt-lg-26 pb-lg-16" data-aos="fade-left" data-aos-duration={800} data-aos-delay={400} data-aos-once="true">
        <div className="container">
          {/* Section Top */}
          <div className="row align-items-center pb-14">
            {/* Section Title */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">Explore by category</h2>
              </div>
            </div>
            {/* Section Button */}
            <div className="col-12 col-lg-6">
              <div className="text-center text-lg-right">
                <a className="btn btn-outline-green text-uppercase" href="#">Explore All</a>
              </div>
            </div>
            {/* Section Button End */}
          </div>
          {/* End Section Top */}
          <div className="row justify-content-center">
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-blue bg-blue-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-briefcase" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Business Development</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-spray bg-spray-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-headset" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Customer Service</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>235</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-coral bg-coral-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-layer-group" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Development</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>624</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-red bg-red-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-pen-nib" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Design</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>174</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-orange bg-orange-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-rocket" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Marketing &amp; Management</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>268</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-yellow bg-yellow-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-location-arrow" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Sales &amp; Communication</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>156</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-turquoise bg-turquoise-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="icon icon-sidebar-2" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Project Management</h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>162</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
            {/* Single Category */}
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
              <a href="#" className="bg-white border border-color-2 rounded-4 pl-9 pt-10 pb-3 pr-7 hover-shadow-1 mb-9 d-block w-100">
                <div className="text-green bg-green-opacity-1 square-70 rounded-4 mb-7 font-size-7">
                  <i className="fa fa-user" />
                </div>
                {/* Category Content */}
                <div >
                  <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Human Resource </h5>
                  <p className="font-size-4 font-weight-normal text-gray"><span>84</span> Vacancy</p>
                </div>
              </a>
            </div>
            {/* End Single Category */}
          </div>
        </div>
      </div>
      {/* End Category Area */}
      {/* category Area */}
      {/* ContentOne Area */}
      {/* content-1 section */}
      <section className="pt-7 pt-lg-16 pb-2 pb-lg-32">
        <div className="container">
          <div className="row pb-lg-6 justify-content-center">
            <div className="col-xl-6 col-lg-5 col-md-10 col-sm-11" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
              {/* content-1 left-content start */}
              <div className="position-relative pr-xl-20 pr-md-15 pr-15">
                {/* content img start */}
                <img src="image/l1/jpg/content-1-img1.jpg" alt="" className="w-100 rounded overflow-hidden" />
                {/* content img end */}
                {/* abs-content start */}
                <div className="pos-abs-br pt-17 pb-9 pl-8 pr-12  bg-white shadow-2 rounded scale-p7 scale-xs-1 mb-n20 mr-n10 mr-xs-5 mr-sm-0 mb-xs-n10">
                  {/* check-mark start */}
                  <span className="pos-abs-tl circle-79 bg-green font-size-9 mt-n9 ml-n9 ">
                    <i className="fas fa-check text-white" />
                  </span>
                  {/* check-mark end */}
                  <p className="text-black-2 text-4 font-weight-bold mb-7">
                    <span className="font-weight-normal">Found</span> 290+ Jobs
                  </p>
                  <div className="d-flex">
                    <ul className="list-unstyled list-overlapped-icon max-width-130px">
                      <li className="ml-0">
                        <button className="circle-34">
                          <img src="image/l1/png/smal-logo1.png" alt="" className="img" />
                        </button>
                      </li>
                      <li>
                        <a href="#">
                          <img src="image/l1/png/smal-logo2.png" alt="" className="img img2" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="image/l1/png/smal-logo3.png" alt="" className="img img3" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="image/l1/png/smal-logo4.png" alt="" className="img img4" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="image/l1/png/smal-logo5.png" alt="" className="img img5" />
                        </a>
                      </li>
                    </ul>
                    <p className="text-space-black font-size-4 mt-1">+14 Giants</p>
                  </div>
                </div>
                {/* abs-content end */}
              </div>
              {/* content-1 left-content end */}
            </div>
            <div className="col-xl-6 col-lg-7 col-md-8" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
              {/* content-1 start */}
              <div className="pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-md-13 pr-xl-15 pr-xxl-25 pr-0 ">
                {/* content-1 section-title start */}
                <h2 className="font-size-9 mb-8 pr-xxl-15">
                  Help you to get the best job that fits you
                </h2>
                <p className="text-gray font-size-5 mb-10 mb-lg-16">
                  Leverage agile frameworks to provide a robust synopsis for high
                  level overviews. Iterative approach
                </p>
                {/* content-1 section-title end */}
                {/* content-1 list-group start */}
                <ul className="list-unstyled pl-0">
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6" />Bring to
                    the table win-win survival
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6" />Capitalize
                    on low hanging fruit to identify
                  </li>
                  <li className="font-weight-semibold border-0 d-flex mb-7 heading-default-color">
                    <i className="fas fa-check font-size-4 text-green mr-6" />But I must
                    explain to you how all this
                  </li>
                </ul>
                {/* content-1 list-group end */}
              </div>
              {/* content-1 end */}
            </div>
          </div>
        </div>
      </section>
      {/* ContentOne Area */}
      {/* featuredJobOne Area */}
      <div className="pt-11 pt-lg-27 pb-7 pb-lg-26 bg-black-2 dark-mode-texts">
        <div className="container">
          {/* Section Top */}
          <div className="row align-items-center pb-14">
            {/* Section Title */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">Featured Jobs</h2>
              </div>
            </div>
            {/* Section Button */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-right">
                <a className="btn btn-outline-white text-uppercase" href="#">Explore All</a>
              </div>
            </div>
            {/* Section Button End */}
          </div>
          {/* End Section Top */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 col-md-6 px-xxl-7" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
              {/* Start Feature One */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <a href="#"><img src="./image/l1/png/feature-brand-1.png" alt="" /></a>
                </div>
                <a href="#" className="font-size-3 d-block mb-0 text-gray">Google INC</a>
                <h2 className="mt-n4"><a className="font-size-7 text-black-2 font-weight-bold mb-4" >Product Designer</a></h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li><button className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                      <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                      <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
                    </button></li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="card-btn-group">
                  <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3" href="#"><i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4" /> Save it</a>
                </div>
              </div>
              {/* End Feature One */}
            </div>
            <div className="col-12 col-lg-4 col-md-6 px-xxl-7" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
              {/* Start Feature One */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <a href="#"><img src="./image/l1/png/feature-brand-2.png" alt="" /></a>
                </div>
                <a href="#" className="font-size-3 d-block mb-0 text-gray">AirBnb</a>
                <h2 className="mt-n4"><button className="font-size-7 text-black-2 font-weight-bold mb-4" >UI/UX Designer</button></h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li><button className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                      <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                      <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
                    </button></li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="card-btn-group">
                  <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3" href="#"><i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4" /> Save it</a>
                </div>
              </div>
              {/* End Feature One */}
            </div>
            <div className="col-12 col-lg-4 col-md-6 px-xxl-7" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
              {/* Start Feature One */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <a href="#"><img src="./image/l1/png/feature-brand-3.png" alt="" /></a>
                </div>
                <a href="#" className="font-size-3 d-block mb-0 text-gray">Shopify</a>
                <h2 className="mt-n4"><button className="font-size-7 text-black-2 font-weight-bold mb-4" >iOS Developer</button></h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li><button className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                      <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                      <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
                    </button></li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="card-btn-group">
                  <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3" href="#"><i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4" /> Save it</a>
                </div>
              </div>
              {/* End Feature One */}
            </div>
            <div className="col-12 col-lg-4 col-md-6 px-xxl-7" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
              {/* Start Feature One */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <a href="#"><img src="./image/l1/png/feature-brand-4.png" alt="" /></a>
                </div>
                <a href="#" className="font-size-3 d-block mb-0 text-gray">Uber</a>
                <h2 className="mt-n4"><button className="font-size-7 text-black-2 font-weight-bold mb-4" >Creative Director </button></h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li><button className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                      <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                      <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
                    </button></li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="card-btn-group">
                  <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3" href="#"><i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4" /> Save it</a>
                </div>
              </div>
              {/* End Feature One */}
            </div>
            <div className="col-12 col-lg-4 col-md-6 px-xxl-7" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
              {/* Start Feature One */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <a href="#"><img src="./image/l1/png/feature-brand-5.png" alt="" /></a>
                </div>
                <a href="#" className="font-size-3 d-block mb-0 text-gray">Facebook</a>
                <h2 className="mt-n4"><button className="font-size-7 text-black-2 font-weight-bold mb-4" >Marketing Manager </button></h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li><button className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                      <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                      <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
                    </button></li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="card-btn-group">
                  <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3" href="#"><i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4" /> Save it</a>
                </div>
              </div>
              {/* End Feature One */}
            </div>
            <div className="col-12 col-lg-4 col-md-6 px-xxl-7" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
              {/* Start Feature One */}
              <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                <div className="d-block mb-7">
                  <a href="#"><img src="./image/l1/png/feature-brand-6.png" alt="" /></a>
                </div>
                <a href="#" className="font-size-3 d-block mb-0 text-gray">Oculus</a>
                <h2 className="mt-n4"><button className="font-size-7 text-black-2 font-weight-bold mb-4" >Software Engineer</button></h2>
                <ul className="list-unstyled mb-1 card-tag-list">
                  <li><button className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                      <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                      <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
                    </button></li>
                  <li><button className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                      <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
                    </button></li>
                </ul>
                <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="card-btn-group">
                  <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
                  <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3" href="#"><i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4" /> Save it</a>
                </div>
              </div>
              {/* End Feature One */}
            </div>
          </div>
        </div>
      </div>
      {/* featuredJobOne Area */}
      {/* ContentTwo Area */}
      {/* content-2 section */}
      <section className="py-13 py-lg-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-5 col-md-10 col-sm-11" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
              <div className="position-relative pr-lg-20 pr-md-15 pr-9">
                {/* content img start */}
                <img src="image/l1/jpg/content-1-img2.jpg" alt="" className="w-100 rounded-4" />
                {/* content img end */}
                {/* abs-content start */}
                <div className="pos-abs-br mb-10 ">
                  <div className="card bg-white shadow-2 border-0">
                    <div className="card-header bg-dodger-2 text-white text-center border-0">
                      Applicants List
                    </div>
                    <div className="card-body mb-n5">
                      {/* media start */}
                      <div className="media mb-5 pr-9">
                        {/* media img start */}
                        <div className="mr-3 mt-2">
                          <img src="image/l1/png/media-img-1.png" className="circle-40" alt="" />
                        </div>
                        {/* media img start */}
                        {/* media body start */}
                        <div className="media-body pl-4">
                          <h6 className="mb-0 font-size-4 text-black-2">Davir Mark</h6>
                          <p className="mb-0 font-size-3 text-gray">Product Designer</p>
                        </div>
                        {/* media body start */}
                      </div>
                      {/* media end */}
                      {/* media start */}
                      <div className="media mb-5 pr-9">
                        {/* media img start */}
                        <div className="mr-3 mt-2">
                          <img src="image/l1/png/media-img-2.png" className="circle-40" alt="" />
                        </div>
                        {/* media img start */}
                        {/* media body start */}
                        <div className="media-body pl-4">
                          <h6 className="mb-0 font-size-4 text-black-2">Asley Jonshon</h6>
                          <p className="mb-0 font-size-3 text-gray">Web Developer</p>
                        </div>
                        {/* media body start */}
                      </div>
                      {/* media end */}
                      {/* media start */}
                      <div className="media mb-5 pr-9">
                        {/* media img start */}
                        <div className="mr-3 mt-2">
                          <img src="image/l1/png/media-img-3.png" className="circle-40" alt="" />
                        </div>
                        {/* media img start */}
                        {/* media body start */}
                        <div className="media-body pl-4">
                          <h6 className="mb-0 font-size-4 text-black-2">Richar Henricks</h6>
                          <p className="mb-0 font-size-3 text-gray">UI Designer</p>
                        </div>
                        {/* media body start */}
                      </div>
                      {/* media end */}
                    </div>
                  </div>
                </div>
                {/* abs-content end */}
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-xs-10" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
              {/* content-2 start */}
              <div className="content-2 pl-lg-10 pl-0 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-11 pr-md-13 pr-xl-15 pr-xxl-25 pr-0">
                {/* content-2 section title start */}
                <p className="text-dodger font-size-4 font-weight-semibold mb-8">
                  Looking for an expert for your company?
                </p>
                <h2 className="font-size-9 mb-8">
                  Get applications from the world best talents.
                </h2>
                <p className="text-default-color font-size-5 mb-12">
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                </p>
                {/* content-2 section title end */}
                <a className="btn btn-green btn-h-60 text-white w-180 rounded-5 text-uppercase" href="#">Post a Job</a>
              </div>
              {/* content-2 end */}
            </div>
          </div>
        </div>
      </section>
      {/* ContentTwo Area */}
      {/* footer area function start */}
      {/* cta section */}
      <footer className="footer bg-ebony-clay dark-mode-texts">
        <div className="container">
          {/* Cta section */}
          <div className="pt-11 pt-lg-20 pb-13 pb-lg-20 border-bottom border-width-1 border-default-color-2">
            <div className="row justify-content-center ">
              <div className="col-xl-7 col-lg-12" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
                {/* cta-content start */}
                <div className="pb-xl-0 pb-9 text-xl-left text-center">
                  <h2 className="text-white font-size-8 mb-4">Most comprehensive job portal</h2>
                  <p className="text-hit-gray font-size-5 mb-0">We must explain to you how all this mistaken idea of denouncing</p>
                </div>
                {/* cta-content end */}
              </div>
              <div className="col-xl-5 col-lg-12" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
                {/* cta-btns start */}
                <div className="btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4">
                  <a className="btn btn-outline-gallery btn-xl mx-4 mt-6 text-uppercase" href="#" data-toggle="modal" data-target="#login">Log in</a>
                  <a className="btn btn-green btn-h-60 btn-xl mx-4 mt-6 text-uppercase" href="#" data-toggle="modal" data-target="#signup">Register</a>
                </div>
                {/* cta-btns end */}
              </div>
            </div>
          </div>
        </div>
        <div className="container  pt-12 pt-lg-19 pb-10 pb-lg-19">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-lg-0 mb-9">
              {/* footer logo start */}
              <img src="image/logo-main-white.png" alt="" className="footer-logo mb-14" />
              {/* footer logo End */}
              {/* media start */}
              <div className="media mb-11">
                <img src="image/l1/png/message.png" className="align-self-center mr-3" alt="" />
                <div className="media-body pl-5">
                  <p className="mb-0 font-size-4 text-white">Contact us at</p>
                  <a className="mb-0 font-size-4 font-weight-bold" href="mailto:support@uxtheme.net">support@uxtheme.net</a>
                </div>
              </div>
              {/* media start */}
              {/* widget social icon start */}
              <div className="social-icons">
                <ul className="pl-0 list-unstyled d-flex align-items-end ">
                  <li className="d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color">Follow us on:</li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3"><a href="#" className="hover-color-primary heading-default-color"><i className="fab fa-facebook-f font-size-3 pt-2" /></a></li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3"><a href="#" className="hover-color-primary heading-default-color"><i className="fab fa-twitter font-size-3 pt-2" /></a></li>
                  <li className="d-flex flex-column justify-content-center px-3 mr-3"><a href="#" className="hover-color-primary heading-default-color"><i className="fab fa-linkedin-in font-size-3 pt-2" /></a></li>
                </ul>
              </div>
              {/* widget social icon end */}
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget2 mb-md-0 mb-13">
                    {/* footer widget title start */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Company</p>
                    {/* footer widget title end */}
                    {/* widget social menu start */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >About us</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Contact us</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Careers</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Press</button></li>
                    </ul>
                    {/* widget social menu end */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget3 mb-sm-0 mb-13">
                    {/* footer widget title start */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Product</p>
                    {/* footer widget title end */}
                    {/* widget social menu start */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Features </button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Pricing</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >News</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Help desk</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Support</button></li>
                    </ul>
                    {/*widget social menu end */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget4 mb-sm-0 mb-13">
                    {/* footer widget title start */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Services</p>
                    {/* footer widget title end */}
                    {/* widget social menu start */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Digital Marketing</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >SEO for Business</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Avasta Dash</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >UI Design</button></li>
                    </ul>
                    {/* widget social menu end */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-3 col-xs-6">
                  <div className="footer-widget widget4">
                    {/* footer widget title start */}
                    <p className="widget-title font-size-4 text-gray mb-md-8 mb-7">Legal</p>
                    {/* footer widget title end */}
                    <ul className="widget-links pl-0 list-unstyled list-hover-primary">
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Privacy Policy</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Terms &amp; Conditions</button></li>
                      <li className="mb-6"><button className="heading-default-color font-size-4 font-weight-normal" >Return Policy</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area function end */}
    </div>
    {/* Vendor Scripts */}
    {/* Plugin's Scripts */}
    {/* Activation Script */}
    {/*  */}
  </div>

  );
};
