/* Package imports */
import Aos from 'aos';
import React, { useState } from 'react';
/* Component imports */
import Category from "./Components/Category"
import ReactSelect from "./Components/ReactSelect";
import Search from "./Components/Search"

export const HomePage = () => {
  Aos.init();
  return (
    <div className="site-wrapper overflow-hidden">
      <div className="position-relative z-index-1 bg-squeeze pt-26 dark-mode-texts">
        <div className="pos-abs-tr h-100">
          <img src={process.env.PUBLIC_URL + "resources/image/patterns/globe-pattern.png"} alt="" className="h-100" />
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
                  <p className="font-size-5">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-11 col-12 translateY-50 pos-abs-bl">
              <form action="/" className="search-form" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
                <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
                  <div className="filter-inputs">
                    <Search />
                    <div className="pl-13 form-group position-relative">
                      <ReactSelect />
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-pin-3 text-primary font-weight-bold" /></span>
                    </div>
                  </div>
                  <div className="button-block">
                    <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-13 pb-lg-25 bg-gradient-2">
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
        <div>
          <div className="container">
            <hr className="pt-13 pt-lg-20" />
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-xl-6 col-lg-7 col-md-9">
                <div className="text-center mb-12 mb-lg-17">
                  <h2 className="font-size-10 font-weight-bold mb-8">Explore by category</h2>
                  <p className="font-size-5 px-5 px-lg-7 px-xl-9 px-xxl-15 mb-6">Leverage agile frameworks to provide a
                    robust synopsis for high level overviews to start.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-briefcase"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-turquoise"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-headset"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-red"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-layer-group"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-spray"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-pen-nib"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-green"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-rocket"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-blue"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-comment"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-coral"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-location-arrow"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-yellow"
                />
              </div>
              <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-8">
                <Category
                  icon = "fa fa-user"
                  text = "Human Resource"
                  subText = "415 Vacancy"
                  color = "bg-orange"
                />
              </div>
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
    </div>
  );
};
