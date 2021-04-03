import Application from "./Components/Application"
import Profile from "./Components/Profile"
import { useState } from "react"
import { Link } from "react-router-dom";

export const ApplicationDetailPage = (props) => {

  const candidateName = "Filip Radović";

  const [choice, setChoice] = useState(false);

  const updateChoice = (e, bool) => {
    e.preventDefault();
    setChoice(bool)
  };

  const renderChoice = () => {
    if (choice) {
      return <Profile />
    } else {
      return <Application />
    }
  }
  return (
    <div className="site-wrapper overflow-hidden ">
      <div className="bg-default-2 pt-16 pt-lg-22 pb-lg-27">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 mt-13 dark-mode-texts">
              <div className="mb-9">
                <Link to={{ pathname: '/companies/:id/dashboard', state: { initialPage: 1} }} className="d-flex align-items-center ml-4">
                  <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                  </i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="bg-white rounded-4 pt-11 shadow-9">
                <div className="row pl-12 pb-8">
                  <a className="col-9 font-size-6 text-black-2 font-weight-semibold">{candidateName}</a>
                  <a className="col-1 font-weight-semibold">CONTACT</a>
                  <a className="col-1 text-red font-weight-semibold">REJECT</a>
                </div>
                <ul className="nav border-bottom border-mercury pl-12" id="myTab" role="tablist">
                  <li className="tab-menu-items nav-item pr-12">
                    <a style={{cursor:"pointer"}} onClick={(e) => updateChoice(e,false)} className={`text-uppercase font-size-3 font-weight-bold text-default-color py-3 ${!choice ? 'active':''}`}>
                      Candidate Tasks
                    </a>
                  </li>
                  <li className="tab-menu-items nav-item pr-12">
                    <a style={{cursor:"pointer"}} onClick={(e) => updateChoice(e,true)} className={`text-uppercase font-size-3 font-weight-bold text-default-color py-3 ${choice ? 'active':''}`}>
                      Candidate Profile
                    </a>
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
