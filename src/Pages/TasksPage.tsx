import Task from "../Components/Task"
import Navbar from "../Components/Navbar";
import TabPane from "../Components/TabPane";
import React, { useState, useEffect } from 'react';


export const TasksPage = () => {
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
    <div className="site-wrapper overflow-hidden ">
        <Navbar />
        <div className="bg-default-1 pb-13 pb-xl-30 pb-13 mt-12 mt-lg-20 pt-15 pt-lg-15 position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-12">
                <h2 className="font-size-8 mb-6">Task List</h2>
              </div>
            </div>
            <div className="row justify-content-center position-static">
              <div className="col-12 col-xxl-8 col-xl-7 col-lg-10">
                {/* Left Section */}
                <div className="Left">
                  <div className="justify-content-center search-nav-tab nav nav-tabs border-bottom-0" id="search-nav-tab" role="tablist">
                    {tasks.map((task, index) => (
                      <Task task={task} index={index} key = {index}/>
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
              <div className="col-12 col-xxl-4 col-xl-5 col-lg-10 position-static">
                <div className="tab-content" id="serachlist-tab">
                  <TabPane task= {tasks[0]}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
