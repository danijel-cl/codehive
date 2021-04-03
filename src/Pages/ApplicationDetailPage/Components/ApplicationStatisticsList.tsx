import React from 'react';

import { ProgressBar } from 'react-bootstrap';

const ApplicationStatisticsList = (props) => {
  const stats = [{
    name:"Python",
    score:95
  },{
    name:"Javascript",
    score:95
  },{
    name:"React",
    score:95
  },{
    name:"Django",
    score:95
  }]
  return (
    <div className="row col-11 pl-5 pr-5">
      {stats.map((stat, index) => (
        <div key={index} className="col-4 pb-15 d-flex align-items-center">
          <div className="col-4">
            <p className="mb-0">{stat.name}</p>
          </div>
          <div className="col-6 pr-0" style={{height:"10px"}}>
            <ProgressBar now={95} style={{height:"7px"}}/>
          </div>
          <div className="col-2">
            <p className="mb-0">{stat.score}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatisticsList;
