import React from 'react';

const Job = (props) => {
  const postCompany = "Google"
  const postPosition = "Software Developer"
  const postLocation = "New York"
  const postPositionType = "Part-time"
  return (
    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
        <div className="media align-items-center">
          <div className="square-52 bg-orange-2 mr-8 rounded">
            <a href="#"><img src="./image/svg/icon-thunder.svg" alt="" /></a>
          </div>
          <div>
            <a href="#" className="font-size-3 text-default-color line-height-2">{postCompany}</a>
            <h3 className="font-size-6 mb-0"><a className="heading-default-color font-weight-semibold" href="#">{postPosition}</a></h3>
          </div>
        </div>
        <div className="d-flex pt-17">
          <ul className="list-unstyled mb-1 d-flex flex-wrap">
            <li>
              <a href="#" className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                <i className="icon icon-pin-3 mr-2 font-weight-bold" /> {postLocation}
              </a>
            </li>
            <li>
              <a href="#" className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4">
                <i className="fa fa-briefcase mr-2 font-weight-bold" /> {postPositionType}
              </a>
            </li>
          </ul>
          <a href="javascript:" className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  ">
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
