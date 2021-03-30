import React from 'react';
import {Link} from "react-router-dom";

export const TabPane = (props) => {
  const taskCompany = "AirBnb"
  const taskDescription = "We’re looking for a passionate individual to design beautiful\
    and functional products for our customers at Gubagoo. We move very fast and you will\
    be expected to contribute to a cross-functional product development squad, that \
    includes product managers and developers, to deliver the UX and UI for the team to \
    bring to life.\n\nWe are serious about remote work. You can work for from anywhere."
  const taskObjectives = [
    "Contribute new controls or design improvements to our site",
    "Take ownership of the successful delivery of features",
    "Help set and achieve quarterly goals",
    "Ship a TON of product improvements and features"
  ]
  return (
    <div key={Math.random()} className="tab-pane active animate__animated animate__slower animate__fadeIn">
      <div className="bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 overflow-y-scroll mt-9 mt-xl-0">
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row">
            <div className="col-12">
              <div className="media">
                <div>
                  <h3 className="font-size-6 mb-0">{props.task.name}</h3>
                  <span className="font-size-3 text-gray line-height-2">{taskCompany}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts">
          <div className="row">
            <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
              <div>
                <span className="font-size-4 font-weight-semibold text-black-2 mb-7">Task description:</span>
                <p className="font-size-4 text-black-2 mb-7" style={{ whiteSpace:"pre-line"}}>
                  {taskDescription}
                </p>
                <span className="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>
                <ul className="list-unstyled">
                  {taskObjectives.map((objective, index) => (
                    <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
                      <span className="d-inline-block mr-7">•</span>{objective}
                    </li>
                  ))}
                </ul>
                <Link to="/posts/id/tasks/id" className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">Solve task</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;
