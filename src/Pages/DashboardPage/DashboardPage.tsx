import AppliedList from "./Components/AppliedList"
import JobList from "./Components/JobList"
import Dashboard from "./Components/Dashboard"
import Statistics from "./Components/Statistics"
import CompanyForm from "../CompanyCreatePage/Components/CompanyForm"
import {useState} from "react"

export const DashboardPage = (props) => {
  const [page, setPage] = useState(0);
  const renderPage = () => {
    if(page === 0){
      return <Statistics />;
    } else if (page===1) {
      return (
        <div className="mb-14">
          <AppliedList title="Applicants"/>
        </div>
      );
    } else if (page===2) {
      return (
        <div className="mb-18">
          <JobList />
        </div>
      );
    } else {
      return (
        <div className="mb-18">
          <CompanyForm />
        </div>
      );
    }
  }
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <Dashboard setPage={setPage} page={page}/>
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container" style={{ minHeight:"85vh" }}>
          {renderPage()}
        </div>
      </div>
    </div>
  )
}
