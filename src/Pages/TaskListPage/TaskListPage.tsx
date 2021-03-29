import Task from "./Components/Task"
import Navbar from "../../Components/Navbar";
import TabPane from "./Components/TabPane";
import ScrollToTop from "../../Components/ScrollToTop";
import React, { useState, useEffect } from 'react';


export const TaskListPage = () => {
  const tasks = [{
    "name": "JavaScript"
  },{
    "name": "React"
  },{
    "name": "CSS"
  },{
    "name": "HTML"
  },{
    "name": "Python"
  },{
    "name": "Django"
  }]

  const [activeTask, setActiveTask] = useState(0);

  return (
    <div className="site-wrapper">
        <ScrollToTop />
        <Navbar />
        <div className="bg-default-1 pb-13 pb-xl-30 pb-13 mt-12 mt-lg-20 pt-15 pt-lg-15 position-relative">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-8">
                <h2 className="font-size-8 mb-6">Task List</h2>
              </div>
            </div>
            <div className="row justify-content-center position-static">
              <div className="offset-2 col-6">
                {/* Left Section */}
                <div className="Left">
                  <div className="justify-content-center search-nav-tab nav nav-tabs border-bottom-0" id="search-nav-tab" role="tablist">
                    {tasks.map((task, index) => (
                      <Task task={task} index ={index} action = {setActiveTask} activeTask={activeTask} key = {index}/>
                    ))}
                  </div>
                  <div className="text-center pt-5 pt-lg-13">
                    <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center" href="#">Load More <i className="fas fa-sort-down ml-3 mt-n2 font-size-4" />
                    </a>
                  </div>
                </div>
                {/* form end */}
              </div>
              {/* Right Section */}
              <div className="col-4">
                <div className="tab-content" style={{position: "sticky",top: "10vh"}}>
                  <TabPane task= {tasks[activeTask]}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
