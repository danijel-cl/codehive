<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

=======
import CheckBoxList from './CheckBoxList';
import RichEditor from './RichEditor';
import * as yup from 'yup';

import TaskTable from './TaskTable';
>>>>>>> c8183fe804ce99500e67dde17c42ce214344f9df
import { FormProvider, useForm } from 'react-hook-form';
import { FormField } from './Fields/FormField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RichEditor from './Fields/RichEditor';
import ReactSelect from './Fields/ReactSelect';

import TaskTable from './TaskTable';

import {http} from "../../../api/http"

export const PostCreateForm = (props) => {
  let {taskClicked, setTaskClicked, taskTitles, setTaskTitles, setTaskIndex} = props;
<<<<<<< HEAD

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

=======
  
>>>>>>> c8183fe804ce99500e67dde17c42ce214344f9df
  const schema = yup.object().shape({
    position: yup.string().required('This is a required field.'),
    experience: yup.string().required('This is a required field.'),
    description: yup.string().required('This is a required field.'),
  });

  const methods = useForm({
    defaultValues: {
      company: 1
    },
    resolver: yupResolver(schema),
  });


  const onSubmit = (values) => {
    console.log(values)
  }

  const selectPosition = <ReactSelect query={http.getAllSkills} placeholder="Position..."/>
  const selectExperience = <ReactSelect query={http.getAllSkills} placeholder="Experience..."/>
  const description = <RichEditor name="description"/>

  return (
    <div className="bg-white rounded-4 border border-mercury shadow-9">
      <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
        <h3 className="font-size-6 mb-0">Create Post</h3>
      </div>
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row pl-5 pr-5">
          <FormProvider {...methods}>
              <div className="pb-10 col-5">
                <FormField
                  name="position"
                  component = {selectPosition}
                />
              </div>
              <div className="pb-10 offset-1 col-5">
                <FormField
                  name="experience"
                  component = {selectExperience}
                />
              </div>
              <div className="pb-15 col-12">
                <FormField
                  name="description"
                  component = {description}
                />
              </div>
              <div className="pb-20 col-12">
                <TaskTable
                  taskClicked={taskClicked}
                  setTaskClicked={setTaskClicked}
                  taskTitles={taskTitles}
                  setTaskTitles={setTaskTitles}
                  setTaskIndex={setTaskIndex}
                />
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
