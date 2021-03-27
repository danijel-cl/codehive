import React from 'react';

const Dashboard = (props) => {
  return (
    <div className="dashboard-sidebar-wrapper pt-11" id="sidebar">
      <div className="brand-logo px-11">
        <a href="">
          <img src="image/logo-main-black.png" alt="" />
        </a>
      </div>
      <div className="my-15 px-11">
        <a href="#" className="btn btn-primary btn-xl w-100 text-uppercase"><span className="mr-5 d-inline-block">+</span>Post a new job</a>
      </div>
      <ul className="list-unstyled dashboard-layout-sidebar">
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(0)} className={(props.page === 0 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="icon icon-layout-11 mr-7" />Dashboard</a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(1)} className={(props.page === 1 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-briefcase mr-7" />Posted Jobs</a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(2)} className={(props.page === 2 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-user mr-7" />Applicants <span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">14</span></a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(3)} className={(props.page === 3 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-cog mr-7" />Settings</a></li>
      </ul>
    </div>
  );
};

export default Dashboard;
