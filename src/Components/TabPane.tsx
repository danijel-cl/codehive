import React from 'react';

export const TabPane = (props) => {
  return (
    <div className="tab-pane fade show active">
      <div className=" bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 overflow-y-scroll mt-9 mt-xl-0">
        {/* Single Featured Job */}
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row">
            <div className="col-12">
              {/* media start */}
              <div className="media">
                {/* media logo end */}
                {/* media texts start */}
                <div>
                  <h3 className="font-size-6 mb-0">{props.task.name}</h3>
                  <span className="font-size-3 text-gray line-height-2">AirBnb</span>
                </div>
                {/* media texts end */}
              </div>
              {/* media end */}
            </div>
          </div>
        </div>
        {/* End Single Featured Job */}
        <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts">
          <div className="row">
            <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
              <div>
                <p className="mb-4 font-size-4 text-gray">Job Description</p>
                <p className="font-size-4 text-black-2 mb-7">Gubagoo is a fast growing provider of messaging and commerce
                  solutions for automotive dealers changing the future of how people find, buy and service their
                  vehicles.</p>
              </div>
              <div>
                <span className="font-size-4 font-weight-semibold text-black-2 mb-7">Your Role:</span>
                <p className="font-size-4 text-black-2 mb-7">We’re looking for a passionate individual to design beautiful
                  and functional products for our customers at Gubagoo. We move very fast and you will be expected to
                  contribute to a cross-functional product development squad, that includes product managers and
                  developers, to deliver the UX and UI for the team to bring to life.</p>
                <p className="font-size-4 text-black-2 mb-7">We are serious about remote work. You can work for from
                  anywhere.</p>
                <span className="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>
                <ul className="list-unstyled">
                  <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
                    <span className="d-inline-block mr-7">•</span>Contribute new controls or design improvements to our
                  </li>
                  <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                    <span className="d-inline-block mr-7">•</span>Take ownership of the successful delivery of features
                  </li>
                  <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                    <span className="d-inline-block mr-7">•</span>Help set and achieve quarterly goals
                  </li>
                  <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                    <span className="d-inline-block mr-7">•</span>Ship a TON of product improvements and features
                  </li>
                </ul>
                <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6" href="#">Apply to
                  this job</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;
