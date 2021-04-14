import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <div className="dashboard-sidebar-wrapper" style={{ paddingTop:"10vh"}}>
      <div className="pt-20" style={{textAlign:"center"}}>
        <a className="mb-4" href="#"><img className="circle-79" src={process.env.PUBLIC_URL + "/resources/image/l3/png/pro-img.png"} alt="" /></a>
        <p>Welcome Filip </p>
      </div>
      <ul className="list-unstyled dashboard-layout-sidebar pt-15">
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(0)} className={(props.page === 0 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-briefcase mr-7" />Active Challanges<span className="ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center">14</span></a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(1)} className={(props.page === 1 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-user mr-7" />Submitted Challanges</a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(2)} className={(props.page === 2 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="icon icon-layout-11 mr-7" />Statistics</a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(3)} className={(props.page === 3 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-clock mr-7" />Task Submissions</a></li>
        <li style={{cursor: 'pointer'}} onClick={()=>props.setPage(4)} className={(props.page === 4 ? "active" : "")}><a className="px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center"><i className="fas fa-cog mr-7" />Settings </a></li>
      </ul>
    </div>
  );
};

export default Dashboard;