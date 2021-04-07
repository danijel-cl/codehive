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
      <div className="bg-white shadow-8 pt-7 rounded pb-9 px-11">
        <div className="table-responsive ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="pl-0 border-0 font-size-4 font-weight-normal">Time Submitted</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Company</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Position</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Title</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-normal">Integration score</th>
                <th scope="col" className="pl-4 border-0 font-size-4 font-weight-semibold">Task</th>
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
