import React from 'react';
import { Link } from 'react-router-dom';

const AppliedRow = (props) => {
  return (
    <tr className="border border-color-2">
      <td className="table-y-middle py-7 pl-10">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">1</h3>
      </td>
      <td className="table-y-middle py-7 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">74%</h3>
      </td>
      <td className="table-y-middle py-7 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">82%</h3>
      </td>
      <td className="table-y-middle py-7 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">92%</h3>
      </td>
      <td className="table-y-middle py-7  pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">85%</h3>
      </td>
      <td className="table-y-middle py-7  pr-0">
        <div><Link to="posts/id/tasks/id" className="font-size-3 font-weight-bold text-black-2 text-uppercase">View Task</Link></div>
      </td>
    </tr>
  );
};

export default AppliedRow;
