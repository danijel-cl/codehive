import React, { useState } from 'react';
import CheckBoxList from "./Components/CheckBoxList"
import ReactSlider from "./Components/ReactSlider"
import StyledSelect from "./Components/Select"
import GridPostList from "./Components/GridPostList"
import RowPostList from "./Components/RowPostList"
import Search from "./Components/Search"

export const posts =[{
  "position":"Product Designer",
},{
  "position":"Software Developer",
},{
  "position":"Data Scientist",
},{
  "position":"DevOps Engineer",
}];

export const jobTypes = [
  { name: 'Full Time' },
  { name: 'Part Time' },
  { name: 'Contract' },
  { name: 'Internship' },
  { name: 'Temporary' },
];

export const experienceTypes = [
  { name: 'All' },
  { name: 'Senior' },
  { name: 'Mid' },
  { name: 'Junior' },
];

export const postedTypes = [
  { name: 'Anytime' },
  { name: 'Last week' },
  { name: 'Last 2 weeks' },
  { name: 'Last month' },
];
export const PostListPage = () => {

  const [choice, setChoice] = useState(true);

  const updateChoice = (e, bool) => {
    e.preventDefault();
    setChoice(bool)
  };

  const renderPosts = () => {
    if (choice) {
      return <RowPostList posts = {posts} />
    } else {
      return <GridPostList posts = {posts} />
    }
  }
  return (
    <div className="site-wrapper overflow-hidden ">
    {/* Main Content Start */}
    <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-xs-8">
            {/* Sidebar Start */}
            <CheckBoxList name="Job Type" items={jobTypes} />
            <ReactSlider />
            <CheckBoxList name="Experience Level" items={experienceTypes} />
            <CheckBoxList name="Posted Time" items={postedTypes} />
            {/* Sidebar End */}
          </div>
          <div className="col-12 col-md-8 col-xs-12 ">
            {/* form */}
            <form action="/" className="search-form search-2-adjustment ml-lg-0 ml-md-15">
              <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                <div className="filter-inputs">
                  <Search />
                  {/* .select-city starts */}
                  <div className="form-group position-relative w-lg-50 w-xl-5 w-xxl-50">
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
                  <span className="heading-default-color">120&nbsp;</span>results for <span className="heading-default-color">UI Designer</span>
                </h5>
                <div className="d-flex align-items-center result-view-type">
                  <a onClick={(e) => updateChoice(e,true)} className={`heading-default-color pl-5 font-size-6 hover-text-hitgray no-border-button ${choice ? 'active':''}`} style={{ cursor: 'pointer'}}>
                    <i className="fa fa-list-ul" />
                  </a>
                  <a onClick={(e) => updateChoice(e,false)} className={`heading-default-color pl-5 font-size-6 hover-text-hitgray no-border-button ${!choice ? 'active':''}`} style={{ cursor: 'pointer'}}>
                    <i className="fa fa-th-large" />
                  </a>
                </div>
              </div>
              {renderPosts()}
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
  </div>
  )
}
