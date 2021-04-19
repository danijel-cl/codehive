import Dashboard from "./Components/Dashboard"
import Statistics from "./Components/Statistics"

export const AccountStatisticsPage = (props) => {
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <Dashboard page={3}/>
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
