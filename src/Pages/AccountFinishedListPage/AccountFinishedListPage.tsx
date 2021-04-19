import Dashboard from "./Components/Dashboard"
import FinishedList from "./Components/FinishedList"

export const AccountFinishedListPage = (props) => {
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <Dashboard page={1}/>
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container" style={{ minHeight:"85vh" }}>
          <div className="mb-18">
            <FinishedList />
          </div>
        </div>
      </div>
    </div>
  )
}
