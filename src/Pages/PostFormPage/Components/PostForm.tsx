import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormEditor, editorStateToText, textToEditorState } from '../../../Components/Form/FormEditor';
import FormSelect from '../../../Components/Form/FormSelect';

import TaskTable from './TaskTable';

import {http} from "../../../api/http"


export const PostForm = (props) => {

  let history = useHistory();

  const id = props.id

  const schema = yup.object().shape({
    position: yup.object().nullable().required('This is a required field.'),
    experience: yup.object().nullable().required('This is a required field.'),
    description: yup.object().nullable().required('This is a required field.'),
  });

  const methods = useForm({
    defaultValues: {
      position: props.postState !== null ? props.postState.position : '',
      experience: props.postState !== null ? props.postState.experience : '',
      description: props.postState !== null ? props.postState.description : ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    let tasks = props.taskStates.map(task => Object.assign({}, task))
    let post = Object.assign({}, values)
    post["description"] = editorStateToText(post["description"])
    post["experience"] = post["experience"].value
    post["position"] = post["position"].value
    tasks.map((task)=>{
      task["description"] = editorStateToText(task["description"])
      if (typeof task["code"] !== 'string'){
        task["code"] = task["code"].fileList[0]["originFileObj"]
      }else{
        delete task["code"];
      }
      if (typeof task["test"] !== 'string'){
        task["test"] = task["test"].fileList[0]["originFileObj"]
      }else{
        delete task["test"];
      }
      history.push("/companies/:id/dashboard")
    })
    if(id){
      http.updatePost(id, post, tasks)
    }else{
      http.createPost(post, tasks)
    }
  }

  useEffect(() => {
    if (id && !props.postState){
      http.getPost(id).then(
        (post) => {
            post.description = textToEditorState(post.description);
            props.setPostState(post);
            methods.setValue("description", post.description);
            methods.setValue("experience", {
              "value": post.experience ,
              "label":post.experience
            });
            methods.setValue("position", {
              "value": post.position ,
              "label":post.position
            });

      });
      http.getTasks(id).then(
        (tasks)=>{
           tasks.forEach(
             (task)=>{
                task.description = textToEditorState(task.description);
              }
           )
           props.setTaskStates(tasks)
        }
      )
    }
  },[]);

  return (
    <div className="bg-white rounded-4 border border-mercury shadow-9 pl-10 pr-10">
      <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
        <h3 className="font-size-6 mb-0">Create Post</h3>
      </div>
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row pl-5 pr-5">
          <FormProvider {...methods}>
            <div className="pb-15 col-12">
              <h4 className="font-size-6 font-weight-semibold mb-6">Description</h4>
              <FormEditor name="description"/>
            </div>
            <div className="pb-10 col-5">
              <h4 className="font-size-6 font-weight-semibold mb-6">Position</h4>
              <FormSelect query={http.getAllSkills} name="position"/>
            </div>
            <div className="pb-20 offset-1 col-5">
              <h4 className="font-size-6 font-weight-semibold mb-6">Experience</h4>
              <FormSelect query={http.getAllSkills} name="experience"/>
            </div>
            <div className="pb-20 col-12">
              <TaskTable {...props} />
            </div>
            <div className="col-12 my-15">
              <button className="btn btn-primary btn-xl w-10 text-uppercase" onClick={methods.handleSubmit(onSubmit)}><span className="mr-5 d-inline-block">+</span>Create Post</button>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}
