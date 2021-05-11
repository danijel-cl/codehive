import React from 'react';
import {Link} from "react-router-dom";
import TaskDescription from "./TaskDescription";

export const TabPane = (props) => {
  const {task, post} = props;
  const taskCompany = "AirBnb"
  return (
    <div key={Math.random()} className="tab-pane active animate__animated animate__slower animate__fadeIn">
      <div className="bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl ml-xl-8 mt-9 mt-xl-0">
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row">
            <div className="col-12">
              <div className="media">
                <div>
                  {/* <h3 className="font-size-6 mb-0">{props.task.name}</h3> */}
                  <span className="font-size-3 text-gray line-height-2">{post?.company.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pl-sm-9 pl-6 pb-10 light-mode-texts overflow-y-scroll" style={{maxHeight:"67vh"}}>
          <div className="row">
            <div className="col-xxl-12 col-xl-9 pr-xxl-18 pr-xl-0 pr-11">
              <TaskDescription task={task} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;
