import React from 'react';
import { Link } from 'react-router-dom';

const LinkClass = "px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"

const Dashboard = (props) => {
  return (
    <div className="dashboard-sidebar-wrapper" style={{ paddingTop:"10vh"}}>
      <div className="pt-20" style={{textAlign:"center"}}>
        <a className="mb-4" ><img className="circle-79" src={process.env.PUBLIC_URL + "/resources/image/l3/png/pro-img.png"} alt="" /></a>
        <p className = "welcome_letters">Welcome Filip </p>
      </div>
      <ul className="list-unstyled dashboard-layout-sidebar pt-15">
        <li style={{cursor: 'pointer'}} className={(props.page === 0 ? "active" : "")}><Link to="/users/:id/account/active" className={LinkClass}><i className="fas fa-briefcase mr-7" />Active Challanges</Link></li>
        <li style={{cursor: 'pointer'}} className={(props.page === 1 ? "active" : "")}><Link to="/users/:id/account/finished" className={LinkClass}><i className="fas fa-user mr-7" />Finished Challanges</Link></li>
        <li style={{cursor: 'pointer'}} className={(props.page === 2 ? "active" : "")}><Link to="/users/:id/account/tasks" className={LinkClass}><i className="fas fa-clock mr-7" />Task Submissions</Link></li>
        <li style={{cursor: 'pointer'}} className={(props.page === 3 ? "active" : "")}><Link to="/users/:id/account/statistics" className={LinkClass}><i className="icon icon-layout-11 mr-7" />Statistics</Link></li>
        <li style={{cursor: 'pointer'}} className={(props.page === 4 ? "active" : "")}><Link to="/users/:id/account/update" className={LinkClass}><i className="fas fa-cog mr-7" />Settings </Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
