import React, { useState } from 'react';
import { PostCreateForm } from './Components/PostCreateForm';
import { TaskCreateForm } from './Components/TaskCreateForm';

export const PostCreatePage = (props) => {
  const [taskClicked, setTaskClicked] = useState(false);
  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="bg-white rounded-4 border border-mercury shadow-9">
                {taskClicked ? <TaskCreateForm taskClicked={taskClicked} setTaskClicked={setTaskClicked} /> : <PostCreateForm taskClicked={taskClicked} setTaskClicked={setTaskClicked} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
