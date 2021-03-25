import Navbar from "../Components/Navbar";
import AppliedList from "../Components/AppliedList"
import JobList from "../Components/JobList"
import Category from "../Components/Category"
import Dashboard from "../Components/Dashboard"

export const DashboardPage = () => {
  const categoryClassNames = {
    category:"media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    icon:"text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7",
    text:"font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    subtext:"font-size-4 font-weight-normal text-gray mb-0"
  }
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      {/* Header start  */}
      {/* Navbar- */}
      <Navbar />
      {/* Header end */}
      <Dashboard />
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container">
          <div className="row mb-7">
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
              <Category
                classNames = {categoryClassNames}
                icon = "fas fa-mouse-pointer"
                text = "18.6%"
                subText = "Applied Rate"
              />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
              <Category
                classNames = {categoryClassNames}
                icon = "fas fa-mouse-pointer"
                text = "18.6%"
                subText = "Applied Rate"
              />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
              <Category
                classNames = {categoryClassNames}
                icon = "fas fa-mouse-pointer"
                text = "18.6%"
                subText = "Applied Rate"
              />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
              <Category
                classNames = {categoryClassNames}
                icon = "fas fa-mouse-pointer"
                text = "18.6%"
                subText = "Applied Rate"
              />
            </div>
          </div>
          <div className="mb-14">
            <AppliedList />
          </div>
          <div className="mb-18">
            <JobList />
          </div>
        </div>
      </div>
    </div>
  )
}
