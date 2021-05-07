import React, {useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import FormUploader from '../../../Components/Form/FormUploader';
import FormEditor from '../../../Components/Form/FormEditor';
import FormInput from '../../../Components/Form/FormInput';

import {http} from "../../../api/http"

const backButtonContentStyle = "d-flex align-items-center ml-4"
const backButtonIconStyle = "icon icon-small-left bg-white circle-40 mr-5 font-size-7 \
                             text-black font-weight-bold shadow-8"
const backButtonTextStyle = "text-uppercase font-size-3 font-weight-bold text-gray"

const containerContentStyle = "bg-white rounded-4 border border-mercury shadow-9 pl-10 pr-10"
const upperContainerContentStyle = "pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom \
                                    border-width-1 border-default-color light-mode-texts"
const lowerContainerContentStyle = "pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 light-mode-texts"


const schema = yup.object().shape({
  code: yup.mixed().required('This is a required kebab field.'),
  tests: yup.mixed().required('This is a required field.'),
  language: yup.string().required('This is a kebab required field.'),
  title: yup.string().required('This is a required field.'),
  description: yup.object().nullable().required('This is a required kebab field.'),
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

  return (
    <>
      <div className="row justify-content-center pt-5">
        <div className="col-12 dark-mode-texts">
          <div className="mb-9">
            <a className={ backButtonContentStyle } onClick={onBack}>
              <i className={ backButtonIconStyle }></i>
              <span className={ backButtonTextStyle }>Back</span>
            </a>
          </div>
        </div>
      </div>
      <div className={ containerContentStyle }>
        <div className={ upperContainerContentStyle }>
          <h3 className="font-size-6 mb-0">Create Task</h3>
        </div>
        <div className={ lowerContainerContentStyle }>
          <div className="row pl-5 pr-5">
            <FormProvider {...methods}>
              <div className="row">
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Code</h4>
                  <FormUploader name="code"/>
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Tests</h4>
                  <FormUploader name="tests"/>
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Title</h4>
                  <FormInput name="title" />
                </div>
                <div className="pb-10 col-6">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Language</h4>
                  <FormInput name="language" />
                </div>
                <div className="pb-10 col-12">
                  <h4 className="font-size-6 font-weight-semibold mb-6">Description</h4>
                  <FormEditor name="description"/>
                </div>
                <div className="col-12 my-15">
                  <button
                    className="btn btn-primary btn-xl w-10 text-uppercase"
                    onClick={methods.handleSubmit(onSubmit)}>
                    <span className="mr-5 d-inline-block">+</span>Create Task
                  </button>
                </div>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
      </>
  );
};
