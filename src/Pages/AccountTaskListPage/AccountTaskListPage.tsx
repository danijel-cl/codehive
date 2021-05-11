import Dashboard from "../../Components/Dashboards/AccountDashboard"
import TaskList from "./Components/TaskList"

export const AccountTaskListPage = (props) => {
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <Dashboard page={2}/>
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container" style={{ minHeight:"85vh" }}>
          <div className="mb-18">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  )
}
