import React from 'react';
import ApplicationTaskList from "./ApplicationTaskList"
import ApplicationStatisticsList from "./ApplicationStatisticsList"

const tabContentClassName = "tab-content pl-12 pt-10 pb-7 pr-12 pr-xxl-24"
const tavPaneClassName = "tab-pane fade show active"

const Application = (props) => {
  return (
    <>
      <div className={tabContentClassName}>
        <div className={tavPaneClassName}>
          <h3 className="font-size-6 mb-0 pb-10">Candidate Skills Overview</h3>
        </div>
        <div className="col-12 pb-10">
          <p>Candidate Skills </p>
        </div>
        <ApplicationStatisticsList />
        <div className="col-12 pb-10">
          <p>Candidate Measures </p>
        </div>
        <ApplicationStatisticsList />
      </div>
      <div className={tabContentClassName}>
        <div className={tavPaneClassName}>
          <div className="row mb-11 align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <h3 className="font-size-6 mb-0">Application Task List</h3>
            </div>
          </div>
          <ApplicationTaskList/>
        </div>
      </div>
      <div className={tabContentClassName}>
        <div className={tavPaneClassName}>
          <div className="row mb-11 align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <h3 className="font-size-6 mb-0">Community Task List</h3>
            </div>
          </div>
          <ApplicationTaskList/>
        </div>
      </div>
    </>
  );
};

export default Application;
