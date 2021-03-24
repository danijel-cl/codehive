import React from 'react';
import Aos from 'aos';
import StyledSelect from "../Components/Select";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

export const HomePage = () => {
  Aos.init();

  return (
    <div>
        <Navbar />
        <div className="site-wrapper overflow-hidden ">
          <div className="position-relative z-index-1 bg-squeeze pt-26 dark-mode-texts">
            <div className="pos-abs-tr h-100">
              <img src="../../image/patterns/globe-pattern.png" alt="" className="h-100" />
            </div>
            <div className="container position-static">
              <div className="row position-relative align-items-center position-static">
                <div className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-23 pb-lg-33 pb-md-28 pb-xs-26 pb-29 pt-md-20" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
                  <div className="row">
                    <div className="col-xxl-8 col-xl-7 col-md-8 col-sm-10">
                      <div className="text-primary font-size-5 font-weight-semibold mb-7">
                        #4923 jobs are available right now
                      </div>
                      <h1 className="font-size-11 mb-9 text-black-2">Find the most exciting jobs.</h1>
                      <p className="font-size-5">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative to</p>
                    </div>
                  </div>
                </div>
                {/* Hero Form */}
                <div className="col-lg-11 col-12 translateY-50 pos-abs-bl">
                  <form action="/" className="search-form" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
                    <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
                      <div className="filter-inputs">
                        <div className="form-group position-relative">
                          <input className="form-control focus-reset pl-13" type="text" id="keyword" placeholder="Type Job title, keywords" />
                          <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-zoom-2 text-primary font-weight-bold" /></span>
                        </div>
                        {/* .select-city starts */}
                        <div className="pl-13 form-group position-relative">
                          <StyledSelect />
                          <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-pin-3 text-primary font-weight-bold" /></span>
                        </div>
                        {/* ./select-city ends */}
                      </div>
                      <div className="button-block">
                        <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Hero Form */}
              </div>
            </div>
          </div>
          {/* Hero Area */}
          {/* category Area */}
          <div className="pb-13 pb-lg-25 bg-gradient-2">
            {/* Company Area Start */}
            <div className="pt-29 pt-lg-30 pb-10 pb-lg-22">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title mb-9 text-center">
                      <h5 className="font-size-5 font-weight-normal text-gray">
                        Get hired in top companies
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Company Area End */}
            <div>
              <div className="container">
                <hr className="pt-13 pt-lg-20" />
                {/* Section Top */}
                <div className="row align-items-center justify-content-center">
                  {/* Section Title */}
                  <div className="col-12 col-xl-6 col-lg-7 col-md-9">
                    <div className="text-center mb-12 mb-lg-17">
                      <h2 className="font-size-10 font-weight-bold mb-8">Explore by category</h2>
                      <p className="font-size-5 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-6">Leverage agile frameworks to provide a
                        robust synopsis for high level overviews to start.</p>
                    </div>
                  </div>
                </div>
                {/* End Section Top */}
                <div className="row justify-content-center" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-blue square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-briefcase" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Business Development</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-spray square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-headset" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Customer Service</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-coral square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-layer-group" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Development</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-red square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-pen-nib" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Design</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-orange square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-rocket" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Marketing &amp; Management</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-yellow square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-location-arrow" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Sales &amp; Communication</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-turquoise square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="icon icon-sidebar-2" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Project Management</h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                  {/* Single Category */}
                  <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                    <a href="#" className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
                      <div className="text-white bg-green square-70 rounded-4 mb-7 font-size-7 text-center mx-auto">
                        <i className="fa fa-user" />
                      </div>
                      {/* Category Content */}
                      <div>
                        <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">Human Resource </h5>
                        <p className="font-size-4 font-weight-normal text-gray"><span>415</span> Vacancy</p>
                      </div>
                    </a>
                  </div>
                  {/* End Single Category */}
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="text-center pt-5 pt-lg-13">
                      <a className="btn btn-outline-black-2 btn-lg text-uppercase" href="#">Explore All</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ContentTwo Area */}
        </div>
        {/* Vendor Scripts */}
        {/* Plugin's Scripts */}
        {/* Activation Script */}
        {/*  */}
        <Footer />
      </div>
  );
};
