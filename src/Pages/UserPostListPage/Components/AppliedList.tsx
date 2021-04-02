import React from 'react';
import Job from "./Job"

const AppliedList = (props) => {
  const jobs = [1,2,3,4,5,6]
  return (
    <div className="row">
      {jobs.map((job, index) => (
        <Job key={index} id={index} job={job} />
      ))}
    </div>
  );
};

export default AppliedList;
