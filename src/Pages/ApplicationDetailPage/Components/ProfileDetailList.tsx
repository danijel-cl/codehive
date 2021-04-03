import React from 'react';

const ProfileDetailList = (props) => {
  const details = [1,2]
  const detailPosition =  "Senior UI/UX Designer"
  const detailCompany = "Google Inc"
  const detailDateFrom = "Jun 2017"
  const detailDateTo = "April 2020"
  const detailLocation = "New York, USA"
  return (
    <>
      {details.map((detail, index) => (
        <div className="w-100">
          <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
            <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
              <img src={process.env.PUBLIC_URL + "/resources/image/l1/png/feature-brand-1.png"} alt="" />
            </div>
            <div className="w-100 mt-n2">
              <h3 className="mb-0">
                <a className="font-size-6 text-black-2 font-weight-semibold" href="#">
                  {detailPosition}
                </a>
              </h3>
              <a href="#" className="font-size-4 text-default-color line-height-2">
                {detailCompany}
              </a>
              <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                <a className="font-size-3 text-gray mr-5">
                  {detailDateFrom} - {detailDateTo}
                </a>
                <a className="font-size-3 text-gray">
                  <span className="mr-4">
                    <img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-loaction-pin-black.svg"} />
                  </span>
                  {detailLocation}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileDetailList;
