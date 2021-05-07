import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'antd';
import { FormField } from './Fields/FormField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FileUploader } from './Fields/FileUploader';
import RichEditor from './Fields/RichEditor';

import {http} from "../../../api/http"

const backButtonContentStyle = "d-flex align-items-center ml-4"
const backButtonIconStyle = "icon icon-small-left bg-white circle-40 mr-5 font-size-7 \
                             text-black font-weight-bold shadow-8"
const backButtonTextStyle = "text-uppercase font-size-3 font-weight-bold text-gray"

const containerContentStyle = "bg-white rounded-4 border border-mercury shadow-9"
const upperContainerContentStyle = "pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom \
                                    border-width-1 border-default-color light-mode-texts"
const lowerContainerContentStyle = "pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 light-mode-texts"


const schema = yup.object().shape({
  code: yup.mixed().required('This is a required field.'),
  tests: yup.mixed().required('This is a required field.'),
  language: yup.string().required('This is a required field.'),
  title: yup.string().required('This is a required field.'),
});

export const TaskCreateForm = (props) => {
  const {taskClicked, setTaskClicked, taskTitles, setTaskTitles, taskIndex, setTaskIndex} = props

  const methods = useForm({
    defaultValues: {
      code: taskIndex !== null ? taskTitles[taskIndex].code : null,
      tests: taskIndex !== null ? taskTitles[taskIndex].tests : null,
      language: taskIndex !== null ? taskTitles[taskIndex].language : '',
      title: taskIndex !== null ? taskTitles[taskIndex].title : '',
      description: taskIndex !== null ? taskTitles[taskIndex].description : ''
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values)
    if(taskIndex !== null) {
      taskTitles[taskIndex] = values
      setTaskTitles(taskTitles, onBack())
      setTaskIndex(null)
    } else {
      setTaskTitles([...taskTitles, values], onBack())
    }
  }

  const onBack = () => {
    setTaskIndex(null, setTaskClicked(!taskClicked))
  };

  const codeUpload = <FileUploader name="code"/>

  const testsUpload = <FileUploader name="tests"/>

  const titleTextField = <input
    className="form-control col-10"
    placeholder="title"
  />

  const languageTextField = <input
    className="form-control col-10"
    placeholder="language"
  />

  const description = <RichEditor name="description"/>

  return (
    <>
      <div className="row justify-content-center pt-5 pl-5">
        <div className="col-12 dark-mode-texts">
          <div className="mb-9">
            <a className={backButtonContentStyle} onClick={onBack}>
              <i className={backButtonIconStyle}></i>
              <span className={backButtonTextStyle}>Back</span>
            </a>
          </div>
        </div>
      </div>
      <div className={containerContentStyle}>
        <div className={upperContainerContentStyle}>
          <h3 className="font-size-6 mb-0">Create Task</h3>
        </div>
        <div className={lowerContainerContentStyle}>
          <div className="row pl-5 pr-5">
            <FormProvider {...methods}>
              <Form>
                <div className="row">
                  <div className="pb-10 col-6">
                    <FileUploader name="code"/>
                  </div>
                  <div className="pb-10 col-6">
                    <FileUploader name="tests"/>
                  </div>
                  <div className="pb-10 col-6">
                    <FormField
                      name="title"
                      component={titleTextField}
                    />
                  </div>
                  <div className="pb-10 col-6">
                    <FormField
                      name="language"
                      component={languageTextField}
                    />
                  </div>
                  <div className="pb-10 col-12">
                    <FormField
                      name="description"
                      component={<RichEditor />}
                    />
                  </div>
                  <div className="col-12 my-15">
                    <button
                      className="btn btn-primary btn-xl w-10 text-uppercase"
                      onClick={methods.handleSubmit(onSubmit)} >
                      <span className="mr-5 d-inline-block">+</span>Create Task
                    </button>
                  </div>
                </div>
              </Form>
            </FormProvider>
          </div>
        </div>
      </div>
      </>
  );
};
