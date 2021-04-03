import React from 'react';
import {Link} from 'react-router-dom';

const CompanyRow = (props) => {
  return (
    <li className="border-bottom">
      <Link to="/companies/:id" className="media align-items-center py-9">
        <div className="mr-7">
          <img className="square-72 rounded-5" src={process.env.PUBLIC_URL + "/resources/image/l1/png/feature-brand-4.png"} alt="" />
        </div>
        <div className="mt-n4">
          <h4 className="mb-0 font-size-6 font-weight-semibold">
            {props.company.name}
          </h4>
          <p className="mb-0 font-size-4">
            { props.company.label }
          </p>
        </div>
      </Link>
    </li>
  );
};

export default CompanyRow;
