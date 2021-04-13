import React from 'react';
import {Link} from "react-router-dom";

export const TabPost = (props) => {
  const postPosition = "Software Developer"
  const postCompany = "AirBnb"
  const postDate = "19 June 2020"
  const postSalaray = "80"
  const postCurrency = "Kuna/h"
  const postPositionType = "Full-Time"
  const postPositionCity = "New York City"
  const postPositionAddress = "777 Brockton Avenue"
  const postPositionLevel = "Junior"
  const postCompanyType = "B2B & B2C"
  const postSoftSkills = ["Slack","English","German"]
  const postTehnicalSkills = ["Python", "Django","Docker","HTML","CSS"]
  const postDescription = "Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers\
                           changing the future of how people find, buy and service their vehicles."
  const postRoleDescription = "We’re looking for a passionate individual to design beautiful and functional products for our\
    customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development\
    squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life.\n\n\
    We are serious about remote work. You can work for from anywhere."
  const postTasks = ["Contribute new controls or design improvements","Take ownership of the successful delivery of features",
  "Help set and achieve quarterly goals","Ship a TON of product improvements and features"]
  return (
    <div key={Math.random()} className="tab-pane active animate__animated animate__slower animate__fadeIn">
      <div className="bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 mt-9 mt-xl-0">
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row">
            <div className="col-12">
              <div className="media">
                <div className="col-12">
                  <div>
                    <h3 style={{display: "inline-block"}} className="pl-0 col-8 font-size-6 mb-0">{props.post.position}</h3>
                    <Link to="/posts/id/tasks/id" className="btn btn-green col-4 text-uppercase rounded-3">Solve</Link>
                  </div>
                  <span className="font-size-4 text-gray line-height-2">{postCompany}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts overflow-y-scroll" style={{maxHeight:"67vh"}}>
          <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
            <div className="row mb-7">
              <div className="col-12">
                <p className="font-size-5 text-gray mb-3">Job specifications</p>
              </div>
              <div className="col-md-6 mb-md-0 mb-6 pb-6">
                <div className="media justify-content-md-start">
                  <div className="image mr-5 mt-1">
                    <i style={{color:"#00b074"}} className="fa fa-dollar-sign"/>
                  </div>
                  <p className="font-size-5 text-gray mb-0">{postSalaray} {postCurrency}</p>
                </div>
              </div>
              <div className="col-md-6 mb-md-0 mb-6 pb-6">
                <div className="media justify-content-md-start">
                  <div className="image mr-5 mt-1">
                    <i style={{color:"#00b074"}} className="fa fa-briefcase"/>
                  </div>
                  <p className="font-size-5 text-gray mb-0">{postPositionType}</p>
                </div>
              </div>
              <div className="col-12 mb-md-0 mb-6">
                <div className="media justify-content-md-start">
                  <div className="image mr-5 mt-1">
                    <i style={{color:"#00b074"}} className="fa fa-thumbtack"/>
                  </div>
                  <p className="font-size-5 text-gray mb-0">{postPositionLevel}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="font-size-5 text-gray mb-3">Job Adress</p>
              </div>
              <div className="col-md-6 pl-lg-0">
                <div className="media col-md-12">
                  <div className="image mr-5 mt-1">
                    <i style={{color:"#00b074"}} className="fa fa-building"/>
                  </div>
                  <p className="font-size-5 text-gray mb-0">
                    {postPositionCity}
                  </p>
                </div>
              </div>
              <div className="col-md-6 pl-lg-0">
                <div className="media col-md-12">
                  <div className="image mr-5 mt-1">
                    <i style={{color:"#00b074"}} className="fas fa-location-arrow"></i>
                  </div>
                  <p className="font-size-5 text-gray mb-0">
                    {postPositionAddress}
                  </p>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-12">
                <div className="tags">
                  <p className="font-size-5 text-gray mb-3">Technical Skills</p>
                  <ul className="d-flex list-unstyled flex-wrap">
                    {postSoftSkills.map((skill, index)=>(
                      <li style={{  display:"inline"}} key={index} className="align-items-center bg-regent-opacity-15 mr-3 h-px-33 text-centernrounded-3 px-3 pt-1 font-size-3 text-black-2">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-md-12">
                <div className="tags">
                  <p className="font-size-5 text-gray mb-3">Soft Skills</p>
                  <ul className="d-flex list-unstyled flex-wrap">
                    {postSoftSkills.map((skill, index)=>(
                      <li style={{  display:"inline"}} key={index} className="align-items-center bg-regent-opacity-15 mr-3 h-px-33 text-centernrounded-3 px-3 pt-1 font-size-3 text-black-2">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
            <div className="row">
              <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                <div>
                  <p className="font-size-5 font-weight-semibold text-black-2 mb-7">Job Description</p>
                  <p className="font-size-4 text-black-2 mb-7">{postDescription}</p>
                </div>
                <div>
                  <span className="font-size-4 font-weight-semibold text-black-2 mb-7">Your Role:</span>
                  <p style={{whiteSpace:"pre-line"}} className="font-size-4 text-black-2 mb-7">{postRoleDescription}</p>
                  <span className="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>
                  <ul className="list-unstyled">
                    {postTasks.map((task, index)=>(
                      <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
                        <span className="d-inline-block mr-7">•</span>{task}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6" to="/posts/:id/tasks">Apply to this job</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPost;
