import React from 'react';
import AppliedList from "./AppliedList"
import StatisticsList from "./StatisticsList"

const CandidateTasks = (props) => {
  return (
    <>
      <div className="tab-content pl-12 pt-10 pb-7 pr-12 pr-xxl-24" id="myTabContent">
        <div className="tab-pane fade show active pb-12" id="home" role="tabpanel" aria-labelledby="home-tab">
          <h3 className="font-size-6 mb-0">Candidate Skills Overview</h3>
        </div>
        <div className="col-12 pb-10">
          <p>Candidate Skills </p>
        </div>
        <StatisticsList />
        <div className="col-12 pb-10">
          <p>Candidate Measures </p>
        </div>
        <StatisticsList />
      </div>
      <div className="tab-content pl-12 pt-10 pb-7 pr-12 pr-xxl-24" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row mb-11 align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <h3 className="font-size-6 mb-0">Application Task List</h3>
            </div>
          </div>
          <AppliedList/>
        </div>
      </div>
      <div className="tab-content pl-12 pt-10 pb-7 pr-12 pr-xxl-24" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row mb-11 align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <h3 className="font-size-6 mb-0">Community Task List</h3>
            </div>
          </div>
          <AppliedList/>
        </div>
      </div>
    </>
  );
};

export default CandidateTasks;
