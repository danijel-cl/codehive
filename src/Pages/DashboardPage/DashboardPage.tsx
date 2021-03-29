import Navbar from "../../Components/Navbar";
import AppliedList from "./Components/AppliedList"
import JobList from "./Components/JobList"
import Category from "./Components/Category"
import Dashboard from "./Components/Dashboard"
import ScrollToTop from "../../Components/ScrollToTop";
import StatisticsPage from "./Components/Statistics"
import {useState} from "react"

export const DashboardPage = () => {
  const [page, setPage] = useState(0);
  const renderPage = () => {
    if(page === 0){
      return <StatisticsPage />;
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
