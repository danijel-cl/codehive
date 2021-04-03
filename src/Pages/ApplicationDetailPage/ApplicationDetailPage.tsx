import CandidateTasks from "./Components/CandidateTasks"
import UserDetail from "./Components/UserDetail"
import { useState } from "react"

export const ApplicationDetailPage = () => {
  const candidateName = "Filip Radović";
  const [choice, setChoice] = useState(false);
  const updateChoice = (e, bool) => {
    e.preventDefault();
    setChoice(bool)
  };
  const renderChoice = () => {
    if (choice) {
      return <UserDetail />
    } else {
      return <CandidateTasks />
    }
  }
  return (
    <div className="site-wrapper overflow-hidden ">
      <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 mt-13 dark-mode-texts">
              <div className="mb-9">
                <a className="d-flex align-items-center ml-4">
                  <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                  </i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="bg-white rounded-4 pt-11 shadow-9">
                <div className="d-xs-flex align-items-center pl-xs-12 mb-8 text-center text-xs-left">
                  <div>
                    <h2 className="mt-xs-n5">
                      <a className="font-size-6 text-black-2 font-weight-semibold">{candidateName}</a>
                    </h2>
                  </div>
                </div>
                <ul className="nav border-bottom border-mercury pl-12" id="myTab" role="tablist">
                  <li className="tab-menu-items nav-item pr-12">
                    <a onClick={(e) => updateChoice(e,false)} className={`text-uppercase font-size-3 font-weight-bold text-default-color py-3 ${!choice ? 'active':''}`}>Candidate Tasks</a>
                  </li>
                  <li className="tab-menu-items nav-item pr-12">
                    <a onClick={(e) => updateChoice(e,true)} className={`text-uppercase font-size-3 font-weight-bold text-default-color py-3 ${choice ? 'active':''}`}>Candidate Profile</a>
                  </li>
                </ul>
                {renderChoice()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
