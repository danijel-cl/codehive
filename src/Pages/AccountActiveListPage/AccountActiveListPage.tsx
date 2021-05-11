import Dashboard from "../../Components/Dashboards/AccountDashboard"
import Statistics from "./Components/ActiveList"

export const AccountActiveListPage = (props) => {
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <Dashboard page={0}/>
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container" style={{ minHeight:"85vh" }}>
          <div className="mb-18">
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  )
}
