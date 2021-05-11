import Dashboard from "../../Components/Dashboards/AccountDashboard"
import {AccountForm} from "./Components/AccountForm"

export const AccountUpdatePage = (props) => {
  const id = localStorage.getItem('user-id')||null;
  return (
    <div className="site-wrapper overflow-hidden bg-default-2">
      <Dashboard page={4}/>
      <div className="dashboard-main-container mt-25 mt-lg-31" id="dashboard-body">
        <div className="container" style={{ minHeight:"85vh" }}>
          <div className="mb-18">
            <AccountForm
              id={id}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
