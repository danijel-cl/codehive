import React, { useState } from 'react';
import { PostCreateForm } from './Components/PostCreateForm';
import { TaskCreateForm } from './Components/TaskCreateForm';

export const PostCreatePage = (props) => {
  const [taskIndex, setTaskIndex] = useState(null)
  const [taskTitles, setTaskTitles] = useState(Array())
  const [taskClicked, setTaskClicked] = useState(false);
  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
                {taskClicked ?
                <TaskCreateForm
                  taskTitles={taskTitles}
                  setTaskTitles={setTaskTitles}
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  taskIndex={taskIndex}
                  setTaskIndex={setTaskIndex} /> :
                <PostCreateForm
                  taskTitles={taskTitles}
                  setTaskTitles={setTaskTitles}
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  setTaskIndex={setTaskIndex} />
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
