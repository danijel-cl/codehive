import React from 'react';
import AppliedRow from './ApplicationTaskRow';

var thClassName = "border-0 font-size-4 font-weight-normal"

const ApplicationTaskList = (props) => {
  const rows = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="pt-7 pb-8 px-11">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className={"text-center "+thClassName}>Id</th>
              <th scope="col" className={thClassName}>Applied as</th>
              <th scope="col" className={thClassName}>Applied on</th>
              <th scope="col" className={thClassName}>Tests Passed</th>
              <th scope="col" className={thClassName}>Code Quality</th>
              <th scope="col" className={thClassName}/>
              <th scope="col" className={thClassName}/>
              <th scope="col" className={thClassName}/>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <AppliedRow key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTaskList;
