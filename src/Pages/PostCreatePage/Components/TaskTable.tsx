import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';

const TaskTable = (props) => {
  const {taskClicked, setTaskClicked} = props
  return (
    <>
      <div className="row col-12 pb-5">
        <h4 className="col-2 font-size-6 font-weight-semibold mb-6 pl-0">Tasks</h4>
        <div className="col-2">
          <button onClick={() => {
            window.scrollTo(0, 0);
            setTaskClicked(!taskClicked)
          }} className="btn btn-primary text-uppercase">
            <span className="mr-5 d-inline-block">+</span>
            Add Task
          </button>
        </div>
      </div>
      <table className="table table-striped col-12">
        <thead style={{backgroundColor:"rgba(0, 176, 116, 0.7)"}} className="font-size-4 text-white">
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Title</th>
            <th scope="col">Created</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TaskTable;
