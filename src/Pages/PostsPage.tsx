import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import Widget from "../Components/Widget"
import Slider from "../Components/Slider"
import StyledSelect from "../Components/Select"
import GridPostList from "../Components/GridPostList"
import RowPostList from "../Components/RowPostList"

export const PostsPage = () => {
  const jobTypes = [
    { name: 'Full Time' },
    { name: 'Part Time' },
    { name: 'Contract' },
    { name: 'Internship' },
    { name: 'Temporary' },
  ];

  const experienceTypes = [
    { name: 'All' },
    { name: 'Senior' },
    { name: 'Mid' },
    { name: 'Junior' },
  ];

  const postedTypes = [
    { name: 'Anytime' },
    { name: 'Last week' },
    { name: 'Last 2 weeks' },
    { name: 'Last month' },
  ];
  return (
    <div className="site-wrapper overflow-hidden ">
    {/* Header start  */}
    {/* Navbar- */}
    <Navbar />
    {/* Login Modal */}
    {/* Sign Up Modal */}
    {/* Header end */}
    {/* Main Content Start */}
    <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-xs-8">
            {/* Sidebar Start */}
            <Widget name="Job Type" items={jobTypes} />
            <Slider />
            <Widget name="Experience Level" items={experienceTypes} />
            <Widget name="Posted Time" items={postedTypes} />
            {/* Sidebar End */}
          </div>
          <div className="col-12 col-md-8 col-xs-12 ">
            {/* form */}
            <form action="/" className="search-form search-2-adjustment ml-lg-0 ml-md-15">
              <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                <div className="filter-inputs">
                  <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                    <input className="form-control focus-reset pl-13" type="text" id="keyword" placeholder="UI Designer" />
                    <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                      <i className="icon icon-zoom-2 text-primary font-weight-bold" />
                    </span>
                  </div>
                  {/* .select-city starts */}
                  <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                    <div  className="pl-13">
                      <StyledSelect />
                    </div>
                    <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                      <i className="icon icon-pin-3 text-primary font-weight-bold" />
                    </span>
                  </div>
                  {/* ./select-city ends */}
                </div>
                <div className="button-block">
                  <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
                </div>
              </div>
            </form>
            <div className="pt-12 ml-lg-0 ml-md-15">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="font-size-4 font-weight-normal text-default-color">
                  <span className="heading-default-color">120</span>
                  results for <span className="heading-default-color">UI Designer</span>
                </h5>
                <div className="d-flex align-items-center result-view-type">
                  <button className="heading-default-color pl-5 font-size-6 hover-text-hitgray no-border-button active">
                    <i className="fa fa-list-ul" />
                  </button>
                  <button className="heading-default-color pl-5 font-size-6 hover-text-hitgray no-border-button">
                    <i className="fa fa-th-large" />
                  </button>
                </div>
              </div>
              <GridPostList />
              <RowPostList />
              <div className="text-center pt-5 pt-lg-13">
                <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center" href="#">Load More <i className="fas fa-sort-down ml-3 mt-n2 font-size-4" />
                </a>
              </div>
            </div>
            {/* form end */}
          </div>
        </div>
      </div>
    </div>
    {/* Main Content end */}
    {/* footer area function start */}
    <Footer />
    {/* footer area function end */}
  </div>
  )
}
