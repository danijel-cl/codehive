import React from 'react';
import {Link} from "react-router-dom";
import CheckBoxList from "./CheckBoxList"
import ReactSlider from "./ReactSlider"

export const TabSearch = (props) => {

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
    <div className="tab-pane active animate__animated animate__slower animate__fadeIn">
      <div className="col-12 bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 mt-9 mt-xl-0">
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row">
            <div className="col-12">
              <div className="media">
                <h3 className="pl-0 col-8 font-size-6 mb-0">Search</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts overflow-y-scroll" style={{maxHeight:"68vh"}}>
          <div className="row">
            <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
              <div className="col-12">
                <CheckBoxList name="Job Type" items={jobTypes} />
              </div>
              <div className="col-12">
                <CheckBoxList name="Experience Level" items={experienceTypes} />
              </div>
              <div className="col-12">
                <ReactSlider />
              </div>
              <div className="col-12">
                <CheckBoxList name="Posted Time" items={postedTypes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSearch;
