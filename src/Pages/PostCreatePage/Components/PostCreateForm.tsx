import React, { useEffect, useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './CheckBoxList';
import RichEditor from './RichEditor';
import * as yup from 'yup';

import ReactSelect from './ReactSelect';
import TagInput from './TagInput';
import TaskTable from './TaskTable';
import ReactSlider from '../../PostListPage/Components/ReactSlider';
import { styled } from '../../../utils/css';
import { Form } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from './TextField';
import { experienceTypes } from '../../PostListPage/Components/TabSearch';

export const PostCreateForm = (props) => {
  let {taskClicked, setTaskClicked, taskTitles, setTaskTitles, setTaskIndex} = props;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const schema = yup.object().shape({
    // tasks: yup.array().required('This is a required field.'),
    salary_low: yup.string().required('This is a required field.'),
    salary_high: yup.string().required('This is a required field.'),
    position: yup.string().required('This is a required field.'),
    experience: yup.string().required('This is a required field.'),
    post_description: yup.string().required('This is a required field.'),
    location: yup.string().required('This is a required field.'),
    tasks_summary: yup.string().required('This is a required field.'),
    ends: yup.string().required('This is a required field.'),
    // company: yup.number().required('This is a required field.'),
    post_role_description: yup.string().required('This is a required field.'),
    currency: yup.string().required('This is a required field.'),
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

  return (
    <>
      <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
        <h3 className="font-size-6 mb-0">Create Post</h3>
      </div>
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row pl-5 pr-5">
          <FormProvider {...methods}>
            <Form>
              <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div className="pb-10 col-6">
                <h4 className="font-size-6 font-weight-semibold mb-6">Minimum salary</h4>
                  <div className="pl-0 col-10">
                    <TextField name="salary_low" defaultValue="" placeholder="Minimum salary"/>
                  </div>
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Maximum salary</h4>
                  <div className="pl-0 col-10">
                    <TextField name="salary_high" defaultValue="" placeholder="Maximum salary"/>
                  </div>
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Currency</h4>
                  <div className="pl-0 col-10">
                    <TextField name="currency" defaultValue="" placeholder="Currency"/>
                  </div>
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Position</h4>
                  <div className="pl-0 col-10">
                    <TextField name="position" defaultValue="" placeholder="Position"/>
                  </div>
                </div>
                <div className="pb-10 col-6">
                  <div className="pl-0 col-10">
                    <CheckBoxList title="Experience Level" name="experience" items={experienceTypes} />
                  </div>
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Location</h4>
                  <div className="pl-0 col-10">
                    <TextField name="location" defaultValue="" placeholder="Location"/>
                  </div>
                </div>
                <div className="pb-20 col-12">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Tasks summary</h4>
                  <RichEditor name="tasks_summary" />
                </div>
                <div className="pb-20 col-12">
                  <TaskTable
                    taskClicked={taskClicked}
                    setTaskClicked={setTaskClicked}
                    taskTitles={taskTitles}
                    setTaskTitles={setTaskTitles}
                    setTaskIndex={setTaskIndex}/>
                </div>
                <div className="pb-10 col-12">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Job Description</h4>
                  <RichEditor name="post_description" />
                </div>
                <div className="pb-10 col-12">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Your Role</h4>
                  <RichEditor name="post_role_description" />
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Ending date</h4>
                  <div className="pl-0 col-10">
                    <TextField name="ends" defaultValue="" placeholder="Ending date"/>
                  </div>
                </div>
                <div className="col-12 my-15">
                  <button className="btn btn-primary btn-xl w-10 text-uppercase" onClick={methods.handleSubmit(onSubmit)}><span className="mr-5 d-inline-block">+</span>Create Post</button>
                </div>
              </div>
            </Form>
          </FormProvider>
        </div>
      </div>
    </>
  )
}
