import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { useFormContext } from 'react-hook-form';

const TaskTable = (props) => {
  const {taskClicked, setTaskClicked, taskStates, setTaskStates, setTaskIndex, setPostState} = props

  const { getValues } = useFormContext();

  const removeTask = (e, index) => {
    e.preventDefault()
    setTaskStates(taskStates.filter((title, i) => i !== index))
  }

  const editTask = (e, index) => {
    e.preventDefault()
    window.scrollTo(0, 0);
    setPostState(getValues())
    setTaskIndex(index, setTaskClicked(!taskClicked))
  }
  return (
    <>
      <div className="row col-12 pb-5">
        <h4 className="col-2 font-size-6 font-weight-semibold mb-6 pl-0">Tasks</h4>
        <div className="col-2">
          <button type="button" onClick={() => {
            window.scrollTo(0, 0);
            setPostState(getValues())
            setTaskClicked(!taskClicked)
          }} className="btn btn-primary text-uppercase">
            <span className="mr-5 d-inline-block">+</span>
            Add Task
          </button>
        </div>
      </div>
      { taskStates.length !== 0 &&
        <table className="table table-striped col-12">
          <thead style={{backgroundColor:"rgba(0, 176, 116, 0.7)"}} className="font-size-4 text-white">
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Title</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {taskStates.map((task, index) => {
              return (
              <tr>
                <th scope="row">{index}</th>
                <td>{task.title}</td>
                <td><button onClick={(e) => editTask(e, index)} className="text-green font-weight-semibold">EDIT</button></td>
                <td><button onClick={(e) => removeTask(e, index)} className="text-red font-weight-semibold">REMOVE</button></td>
              </tr>
              )
            })}
          </tbody>
        </table>
      }
    </>
  );
}

export default TaskTable;
