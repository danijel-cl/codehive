import Navbar from "../../Components/Navbar";
import ActiveList from "./Components/ActiveList"
import SubmittedList from "./Components/SubmittedList"
import TaskList from "./Components/TaskList"
import Category from "./Components/Category"
import Dashboard from "./Components/Dashboard"
import ScrollToTop from "../../Components/ScrollToTop";
import Statistics from "./Components/Statistics"
import UpdateForm from "./Components/UpdateForm"
import {useState} from "react"

export const AccountPage = (props) => {
  const [page, setPage] = useState(0);
  const renderPage = () => {
    if(page === 0){
      return <Statistics />;
    } else if (page===1) {
      return (
        <div className="mb-14">
          <ActiveList />
        </div>
      );
    } else if (page===2) {
      return (
        <div className="mb-18">
          <SubmittedList />
        </div>
      );
    }else if (page===3) {
      return (
        <div className="mb-18">
          <TaskList />
        </div>
      );
    } else {
      return (
        <div className="mb-18">
          <UpdateForm />
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
