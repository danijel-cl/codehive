import React from 'react';
import {Link} from 'react-router-dom';

const AppliedRow = (props) => {
  return (
    <tr className="border border-color-2">
      <th scope="row" className="pl-6 border-0 py-7 pr-0">
        <a href="candidate-profile.html" className="media min-width-px-235 align-items-center">
          <div className="mr-6">
            <img className="circle-36 w-100" src={process.env.PUBLIC_URL + "/resources/image/table-one-profile-image-1.png"}/>
          </div>
          <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">Nicolas Bradley</h4>
        </a>
      </th>
      <td className="table-y-middle py-7 min-width-px-235 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">Senior Project Manager</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">12 July, 2020</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">92%</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">85%</h3>
      </td>
      <td className="table-y-middle py-7 min-width-px-170 pr-0">
        <div><Link to="/application-detail" className="font-size-3 font-weight-bold text-black-2 text-uppercase">View Application</Link></div>
      </td>
      <td className="table-y-middle py-7 min-width-px-110 pr-0">
        <div><a href="contact.html" className="font-size-3 font-weight-bold text-green text-uppercase">Contact</a></div>
      </td>
      <td className="table-y-middle py-7 min-width-px-100 pr-0">
        <div><a className="font-size-3 font-weight-bold text-red-2 text-uppercase">Reject</a></div>
      </td>
    </tr>
  );
};

export default AppliedRow;
