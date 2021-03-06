import Task from "./Components/Task"
import TabPane from "./Components/TabPane";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { http, TaskParams } from "../../api/http";
import { PostType } from "../../types/PostType";
import { textToHtml } from '../../Components/Form/FormEditor';

export const TaskListPage = () => {
  const { id } = useParams<any>();
  const [error, setError] = useState(null);
  const [post, setPost] = useState<PostType>();
  const [tasks, setTasks] = useState<TaskParams[]>([]);
  const [content, setContent] = useState(null)

  useEffect(() => {
    http.getTasks(id)
      .then(
        (data) => {
          data.forEach(d => d.description = textToHtml(d.description))
          console.log(data)
          setTasks(data);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  useEffect(() => {
    http.getPost(id)
      .then(
        (data) => {
          data.description = textToHtml(data.description)
          console.log(data)
          setPost(data);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])


  const [activeTask, setActiveTask] = useState(0);
  const postSubmissions = 10;
  const postCompletion = "90%";
  const postTaskDescription = "A talented professional with an academic background in IT and proven\
    commercial development experience as C++ developer since 1999. Has a sound knowledge of the software\
    development life cycle. Was involved in more than 140 software development outsourcing projects.Has a \
    sound knowledge of the software development life cycle. Was involved in more than 140 software \
    development outsourcing projects."
  const postDifficulty = "Moderate"
  return (
    <div className="site-wrapper">
        <div className="bg-default-1 pb-13 mt-12 mt-lg-20 pt-15 pt-lg-15 position-relative">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-1 col-6 pb-10">
                <div className="bg-white shadow-9 rounded-4" style={{height:"25vh", overflow: "auto"}}>
                  <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                    <div className="border-bottom border-width-1 border-default-color pb-2">
                      <h3 className="font-size-6 mb-0">Hi Filip</h3>
                      <span className="font-size-5 text-gray line-height-2 pb-2">What we are looking for:</span>
                    </div>
                    <div
                      className="font-size-4 mb-8 pt-4"
                      dangerouslySetInnerHTML={{__html: post?.description||"<p>Loading..</p>"}}
                    />
                  </div>
                </div>
              </div>
              <div className="col-4 pb-10 pl-10">
                <div className="bg-white shadow-9 rounded-4" style={{height:"25vh", overflow: "auto"}}>
                  <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                    <div className="border-bottom border-width-1 border-default-color">
                      <h3 className="font-size-6 mb-0">{post?.company?.name}</h3>
                      <span className="font-size-4 text-gray line-height-2 pb-2">{post?.position}</span>
                    </div>
                    <p className="font-size-4 mb-3 mt-5 text-gray">Submissions:    {postSubmissions}</p>
                    <p className="font-size-4 mb-3 mt-5 text-gray">Completion ratio:    {postCompletion}</p>
                    <p className="font-size-4 mb-3 mt-5 text-gray">Avarage difficulty:    {postDifficulty}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10">
                <h2 className="font-size-7 mb-6">Task List</h2>
              </div>
            </div>
            <div className="row justify-content-center position-static">
              <div className="col-6">
                <div className="Left">
                  <div className="justify-content-center search-nav-tab nav nav-tabs border-bottom-0" id="search-nav-tab" role="tablist">
                    {tasks.map((task, index) => (
                      <Task task={task} index ={index} action = {setActiveTask} activeTask={activeTask} key = {index}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tab-content" style={{position: "sticky",top: "14vh"}}>
                  <TabPane task={tasks[activeTask]} post={post}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
