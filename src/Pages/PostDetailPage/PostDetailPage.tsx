import PostBoxes from "./Components/PostBoxes"
import {Link} from "react-router-dom";

export const PostDetailPage = () => {
  const postPosition = "Software Developer"
  const postCompany = "AirBnb"
  const postDate = "19 June 2020"
  const postSalaray = "80-90K"
  const postCurrency = "$"
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
    <div className="site-wrapper overflow-hidden ">
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-11 mt-4 dark-mode-texts">
              <div className="mb-9">
                <Link className="d-flex align-items-center ml-10" to="/posts">
                  <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                    Back to jobs
                  </span>
                </Link>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                <div className="bg-white rounded-4 border border-mercury shadow-9">
                  <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={process.env.PUBLIC_URL + "/resources/image/l2/png/featured-job-logo-1.png"} />
                          </div>
                          <div>
                            <h3 className="font-size-6 mb-0">{postPosition}</h3>
                            <span className="font-size-3 text-gray line-height-2">{postCompany}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                        <div className="media justify-content-md-end">
                          <p className="font-size-4 text-gray mb-0">{postDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row mb-7">
                      <div className="col-md-4 mb-md-0 mb-6">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={process.env.PUBLIC_URL + "/resources//image/svg/icon-dolor.svg"}/>
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">{postSalaray} {postCurrency}</p>
                        </div>
                      </div>
                      <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-briefcase.svg"}/>
                          </div>
                          <p className="font-weight-semibold font-size-5 text-black-2 mb-0">{postPositionType}</p>
                        </div>
                      </div>
                      <div className="col-md-4 pl-lg-0">
                        <div className="media justify-content-md-start">
                          <div className="image mr-5">
                            <img src={process.env.PUBLIC_URL + "/resources/image/svg/icon-location.svg"} alt="" />
                          </div>
                          <p className="font-size-5 text-gray mb-0">{postPositionAddress} <br className="d-md-none d-lg-block d-block" />
                            {postPositionCity}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-lg-0 mb-10">
                        <div>
                          <span className="font-size-4 d-block mb-4 text-gray">Career Level</span>
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">{postPositionLevel}</h6>
                        </div>
                        <div className="tags">
                          <p className="font-size-4 text-gray mb-0">Soft Skills</p>
                          <ul className="list-unstyled mr-n3 mb-0">
                            {postSoftSkills.map((skill, index)=>(
                              <li key={index} className="d-block font-size-4 text-black-2 mt-2">
                                <span className="d-inline-block mr-2">•</span>{skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
                        <div>
                          <span className="font-size-4 d-block mb-4 text-gray">Type of corporation</span>
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">{postCompanyType}</h6>
                        </div>
                        <div className="tags">
                          <p className="font-size-4 text-gray mb-3">Technical Skills</p>
                          <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                            {postTehnicalSkills.map((skill, index)=>(
                              <li key={index} className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4 pl-lg-0">
                        <div>
                          <span className="font-size-4 d-block mb-4 text-gray">Company size</span>
                          <h6 className="font-size-5 text-black-2 font-weight-semibold mb-0">11-50 employees</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                    <div className="row">
                      <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                        <div>
                          <p className="font-size-4 font-weight-semibold text-black-2 mb-7">Job Description</p>
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
              <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="pt-11 pt-lg-0 pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">Similar jobs</h4>
                  <PostBoxes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
