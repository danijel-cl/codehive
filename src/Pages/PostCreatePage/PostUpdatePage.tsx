import React, { useState, useEffect } from 'react';
import { PostCreateForm } from './Components/PostCreateForm';
import { TaskCreateForm } from './Components/TaskCreateForm';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import {http} from "../../api/http"

const textToEditorState = (text) =>{
  const contentState = convertFromRaw(JSON.parse(text))
  return EditorState.createWithContent(contentState)
}

export const PostUpdatePage = (props) => {
  const [postState, setPostState] = useState(null);
  const [taskStates, setTaskStates] = useState(Array());
  const [taskIndex, setTaskIndex] = useState(null);
  const [taskClicked, setTaskClicked] = useState(false);

  useEffect(() => {
    const id = props.match.params.id

    const fetchPost = () => http.getPost(id)
          .then((post) => {
            post.description = textToEditorState(post.description);
            setPostState(post);
          });

    const tasks = http.getPostTasks(id)
          .then((tasks)=>{
            tasks.forEach((task)=>{
              task.description = textToEditorState(task.description);
            })
            setTaskStates(tasks)
          })
  },[]);

  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
                {taskClicked ?
                <TaskCreateForm
                  setPostState = {setPostState}
                  taskStates={taskStates}
                  setTaskStates={setTaskStates}
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  taskIndex={taskIndex}
                  setTaskIndex={setTaskIndex} /> :
                <PostCreateForm
                  postState = {postState}
                  setPostState = {setPostState}
                  taskStates={taskStates}
                  setTaskStates={setTaskStates}
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  setTaskIndex={setTaskIndex}
                />
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
