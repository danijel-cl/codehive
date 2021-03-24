import React from 'react';

const GridPost = () => {
  return (
    <div className="col-12 col-lg-6">
      {/* Start Feature One */}
      <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
        <div className="d-block mb-7">
          <a href="#"><img src={process.env.PUBLIC_URL +"/resources/image/l1/png/feature-brand-1.png"} alt="" /></a>
        </div>
        <a href="#" className="font-size-3 d-block mb-0 text-gray">Google INC</a>
        <h2 className="mt-n4"><a className="font-size-7 text-black-2 font-weight-bold mb-4" href="./jobdetails.html">Product Designer</a></h2>
        <ul className="list-unstyled mb-1 card-tag-list">
          <li><a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
              <i className="icon icon-pin-3 mr-2 font-weight-bold" /> Berlyn
            </a></li>
          <li><a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
              <i className="fa fa-briefcase mr-2 font-weight-bold" /> Full-time
            </a></li>
          <li><a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
              <i className="fa fa-dollar-sign mr-2 font-weight-bold" /> 80K-90K
            </a></li>
        </ul>
        <p className="mb-7 font-size-4 text-gray">We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
        <div className="card-btn-group">
          <a className="btn btn-green text-uppercase btn-medium rounded-3" href="#">Apply Now</a>
        </div>
      </div>
      {/* End Feature One */}
    </div>
  );
};

export default GridPost;
