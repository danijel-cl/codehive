import React from 'react';
import {Link} from "react-router-dom";

const GridPost = (props) => {
  const postCompany = "Google INC";
  const postCity = "Berlin"
  const postPositionType = "Full-time"
  const postSalary = "80K-90K"
  const postSummary = "We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled."
  const postPosition = "Software Developer"
  return (
    <div className="col-12 col-lg-6">
      <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
        <div className="d-block mb-7">
          <a href="#"><img src={process.env.PUBLIC_URL +"/resources/image/l1/png/feature-brand-1.png"} alt="" /></a>
        </div>
        <Link to="/companies/:id" className="font-size-3 d-block mb-0 text-gray">{postCompany}</Link>
        <h2 className="mt-n4"><Link className="font-size-7 text-black-2 font-weight-bold mb-4" to={`/posts/${props.id}`}>{postPosition}</Link></h2>
        <ul className="list-unstyled mb-1 card-tag-list">
          <li>
            <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> {postCity}
            </a>
          </li>
          <li>
            <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
              <i className="fa fa-briefcase mr-2 font-weight-bold" /> {postPositionType}
            </a>
          </li>
          <li>
            <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
              <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> {postSalary}
            </a>
          </li>
        </ul>
        <p className="mb-7 font-size-4 text-gray">{postSummary}</p>
        <div className="card-btn-group">
          <Link to={`/posts/${props.id}`} className="btn btn-green text-uppercase btn-medium rounded-3">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default GridPost;
