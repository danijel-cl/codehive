import React from 'react';
import JobRow from './JobRow'
import StyledSelect from "./ReactSelect"

const JobsList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">Posted Jobs (4)</h3>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
            <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
            <div className="h-px-48">
              <div className="pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                <StyledSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
        <div className="table-responsive ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="pl-0 border-0 font-size-4 font-weight-normal">Name</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Job Type</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">City</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Created on</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Total Applicants</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal" />
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal" />
              </tr>
            </thead>
            <tbody>
              <JobRow />
              <JobRow />
              <JobRow />
              <JobRow />
              <JobRow />
              <JobRow />
              <JobRow />
              <JobRow />
            </tbody>
          </table>
        </div>
      </div>
  </div>
  );
};

export default JobsList;