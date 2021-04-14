import React from 'react';

const JobRow = (props) => {
  return (
    <tr className="shadow-8">
      <th scope="row" className="pl-6 py-8 min-width-px-235">
        <div>
          <a href="jobdetails.html" className="font-size-4 mb-0 font-weight-semibold text-black-2">Senior Project Manager</a>
        </div>
      </th>
      <td className="table-y-middle py-7 min-width-px-135">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Full-Time</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-125">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">New York</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-155">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">12 July, 2020</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-205">
        <h3 className="font-size-4 font-weight-bold text-black-2 mb-0">47</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-80">
        <a className="font-size-3 font-weight-bold text-green text-uppercase">Edit</a>
      </td>
      <td className="table-y-middle py-7 min-width-px-100">
        <a className="font-size-3 font-weight-bold text-red-2 text-uppercase">Delete</a>
      </td>
    </tr>
  );
};

export default JobRow;
