import React from 'react';
import { Link } from 'react-router-dom';

const TaskRow = (props) => {
  return (
    <tr className="shadow-8">
      <th scope="row" className="pl-10 border-0 py-8 min-width-px-235">
        <div>
          <a href="jobdetails.html" className="font-size-4 mb-0 font-weight-semibold text-black-2">2 weeks ago</a>
        </div>
      </th>
      <td className="table-y-middle py-7 min-width-px-135">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Google</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-125">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Software Developer</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-155">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Locate lorem ipsum dolor sunt</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-205">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">84%</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-80">
        <Link to="/posts/:id/tasks/:id" className="font-size-3 font-weight-bold text-green text-uppercase">View</Link>
      </td>
    </tr>
  );
};

export default TaskRow;
