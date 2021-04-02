import React from 'react';
import Job from "./Job"

const InterviewList = (props) => {
  const jobs = [1,2]
  return (
    <div className="row">
      {jobs.map((job, index) => (
        <Job key={index} id={index} job={job} />
      ))}
    </div>
  );
};

export default InterviewList;
