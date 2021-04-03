import React from 'react';
import {Link} from "react-router-dom";

import RowPostTags from "./RowPostTags"

const RowPost = (props) => {
  const postCompany = "AirBnb"
  const postSalary = "80-90K"
  const postCurrency = "$"
  const postLocation = "Berlyn, UK"
  const postPositionType = "Full-time"
  const postDate = "2017/01/01"
  return (
      <div className="mb-8 mt-5">
        <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
          <div className="row">
            <div className="col-md-6">
              <div className="media align-items-center">
                <div className="square-72 d-block mr-8">
                  <img src={process.env.PUBLIC_URL +"/resources/image/l2/png/featured-job-logo-1.png"} alt="" />
                </div>
                <div>
                  <h3 className="mb-0">
                    <Link to={`/posts/${props.id}`} className="font-size-6 heading-default-color">
                      {props.post.position}
                    </Link>
                  </h3>
                  <Link to="/companies/:id" className="font-size-3 text-default-color line-height-2">
                    {postCompany}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-right pt-7 pt-md-5">
              <div className="media justify-content-md-end">
                <div className="image mr-5 mt-2">
                  <img src={process.env.PUBLIC_URL +"/resources/image/svg/icon-fire-rounded.svg"} alt="" />
                </div>
                <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                  <span className="text-black-2 pr-4">
                    {postSalary}
                  </span>
                  {postCurrency}
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-8">
            <div className="col-md-6">
              <RowPostTags />
            </div>
            <div className="row col-md-6 d-flex align-items-center">
              <div className="col-4 font-size-small text-black-2">
                <span className="font-weight-semibold">
                  <img className="mr-4" src={process.env.PUBLIC_URL +"/resources/image/svg/icon-loaction-pin-black.svg"} alt="" />
                  {postLocation}
                </span>
              </div>
              <div className="col-4 font-size-small text-black-2">
                <span className="font-weight-semibold">
                  <img className="mr-4" src={process.env.PUBLIC_URL +"/resources/image/svg/icon-suitecase.svg"} alt="" />
                  {postPositionType}
                </span>
              </div>
              <div className="col-4 font-size-small text-black-2">
                <span className="font-weight-semibold">
                  <img className="mr-4" src={process.env.PUBLIC_URL +"/resources/image/svg/icon-clock.svg"} alt="" />
                  {postDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RowPost;
