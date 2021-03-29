import React from 'react';
import {Link} from 'react-router-dom';

const JobBoxes = () => {
  const items = [{
    name:"AirBnb",
    role:"Software Developer"
  },{
    name:"AirBnb",
    role:"Python Developer"
  },
  {
    name:"Facebook",
    role:"JavaScript Developer"
  },{
    name:"Google",
    role:"Ruby Developer"
  }]
  return (
    <ul className="list-unstyled">
      {items.map((item, index) => (
        <li className="border-bottom" key={index}>
          <Link className="media align-items-center py-9" to="/companies/id">
            <div className="mr-7">
              <img className="square-72 rounded-5" src={process.env.PUBLIC_URL + "/resources/image/l1/png/feature-brand-1.png"} alt="" />
            </div>
            <div className="mt-n4">
              <h4 className="mb-0 font-size-6 font-weight-semibold">{item.name}</h4>
              <p className="mb-0 font-size-4">{item.role}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default JobBoxes;
