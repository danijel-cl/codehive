import React, { useState } from 'react';
import { PostForm } from './Components/PostForm';
import { TaskForm } from './Components/TaskForm';

export const PostFormPage = (props) => {
  const [postState, setPostState] = useState(null)
  const [taskStates, setTaskStates] = useState(Array())
  const [taskIndex, setTaskIndex] = useState(null)
  const [taskClicked, setTaskClicked] = useState(false);
  const id = props.match.params.id||null
  
  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
                {taskClicked ?
                <TaskForm
                  setPostState = {setPostState}
                  taskStates={taskStates}
                  setTaskStates={setTaskStates}
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  taskIndex={taskIndex}
                  setTaskIndex={setTaskIndex}
                  id={id}
                /> :
                <PostForm
                  postState = {postState}
                  setPostState = {setPostState}
                  taskStates={taskStates}
                  setTaskStates={setTaskStates}
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  setTaskIndex={setTaskIndex}
                  id={id}
                />
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
