import React from 'react';
import TaskRow from './TaskRow'
import StyledSelect from "./ReactSelect"

const TaskList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">Submitted Tasks</h3>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
            <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
            <div className="h-px-48">
              <div className="pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                <StyledSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-8 pt-10 rounded pb-8 px-11">
        <div className="table-responsive" style={{ borderRadius:"5px"}}>
          <table className="table table-striped table-borderless table-hover">
            <thead style={{backgroundColor:"rgba(0, 176, 116, 0.7)"}} className="font-size-4 text-white">
              <tr>
                <th scope="col" className="py-6">Time Submitted</th>
                <th scope="col" className="py-6">Company</th>
                <th scope="col" className="py-6">Position</th>
                <th scope="col" className="py-6">Title</th>
                <th scope="col" className="py-6">Integration score</th>
                <th scope="col" className="py-6">Task</th>
              </tr>
            </thead>
            <tbody>
              <TaskRow />
              <TaskRow />
              <TaskRow />
              <TaskRow />
              <TaskRow />
              <TaskRow />
              <TaskRow />
              <TaskRow />
            </tbody>
          </table>
        </div>
      </div>
  </div>
  );
};

export default TaskList;
