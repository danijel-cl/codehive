import Navbar from "../Components/Navbar";
import AppliedList from "../Components/AppliedList"
import JobList from "../Components/JobList"
import Category from "../Components/Category"
import Dashboard from "../Components/Dashboard"
import ScrollToTop from "../Components/ScrollToTop";
import {useState} from "react"

export const DashboardPage = () => {
  const [page, setPage] = useState(0);
  const categoryClassNames = {
    category:"media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    icon:"text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7",
    text:"font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    subtext:"font-size-4 font-weight-normal text-gray mb-0"
  }
  const renderPage = () => {
    if(page === 0){
      return (
        <div className="row mb-7">
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
            <Category
              classNames = {categoryClassNames}
              icon = "fas fa-mouse-pointer"
              text = "18.6%"
              subText = "Applied Rate"
            />
          </div>
        </div>
      );
    } else if (page===1) {
      return (
        <div className="mb-14">
          <AppliedList />
        </div>
      );
    } else {
      return (
        <div className="mb-18">
          <JobList />
        </div>
      );
    }
  }
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      {/* Header start  */}
      {/* Navbar- */}
      <ScrollToTop />
      <Navbar />
      {/* Header end */}
      <Dashboard setPage={setPage} page={page}/>
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container" style={{ minHeight:"85vh" }}>
          {renderPage()}
        </div>
      </div>
    </div>
  )
}
