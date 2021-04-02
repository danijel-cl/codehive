import {Link} from "react-router-dom";
import InterviewList from "./Components/InterviewList"
import AppliedList from "./Components/AppliedList"

export const UserPostListPage = () => {
  return (
    <div className="site-wrapper overflow-hidden ">
      <div className="bg-default-2 pt-19 pt-lg-22 pb-7 pb-lg-23">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-13 dark-mode-texts">
              <div className="mb-9">
                <Link className="d-flex align-items-center ml-4" to="/"> <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
                  </i><span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-12 col-lg-12">
              <div>
                <h4 className="font-size-7 mb-9">Interview Interest</h4>
                <InterviewList />
              </div>
              <div className="mb-5">
                <h4 className="font-size-7 mb-9">Applied Jobs</h4>
                <AppliedList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
