import React from 'react';
import {Link} from 'react-router-dom';

const SubmittedRow = (props) => {
  return (
    <tr className="border border-color-2">
      <th scope="row" className="pl-6 border-0 py-7 pr-0">
        <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
          <div className="circle-36 mr-6">
            <img src="./image/table-one-profile-image-1.png" alt="" className="w-100" />
          </div>
          <h4 className="font-size-4 mb-0 font-weight-semibold">Google</h4>
        </a>
      </th>
      <td className="table-y-middle py-7 min-width-px-235 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Software Developer</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">12 July, 2020</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">28 July, 2020</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">92%</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <div><Link to="/application-detail" className="font-size-3 font-weight-bold text-uppercase">View</Link></div>
      </td>
    </tr>
  );
};

export default SubmittedRow;
