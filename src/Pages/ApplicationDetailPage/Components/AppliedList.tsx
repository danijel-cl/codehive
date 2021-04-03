import React from 'react';
import AppliedRow from './AppliedRow';
import ReactSelect from './ReactSelect'

const AppliedList = (props) => {
  return (
    <div className="pt-7 pb-8 px-11">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="pl-0  border-0 font-size-4 font-weight-normal">Name</th>
              <th scope="col" className="border-0 font-size-4 font-weight-normal">Applied as</th>
              <th scope="col" className="border-0 font-size-4 font-weight-normal">Applied on</th>
              <th scope="col" className="border-0 font-size-4 font-weight-normal">Tests Passed</th>
              <th scope="col" className="border-0 font-size-4 font-weight-normal">Code Quality</th>
              <th scope="col" className="border-0 font-size-4 font-weight-normal" />
              <th scope="col" className="border-0 font-size-4 font-weight-normal" />
              <th scope="col" className="border-0 font-size-4 font-weight-normal" />
            </tr>
          </thead>
          <tbody>
            <AppliedRow />
            <AppliedRow />
            <AppliedRow />
            <AppliedRow />
            <AppliedRow />
            <AppliedRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedList;
