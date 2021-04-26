import React, { useEffect, useState } from 'react';

import { Form } from 'antd';
import * as yup from 'yup';

import { FileUploader } from './FileUploader';
import { Link } from 'react-router-dom';
import { styled } from '../utils/css';
import TagInput from './TagInput';
import { MultipleFileUploader } from './MultipleFileUploader';
import { UploadFile } from 'antd/lib/upload/interface';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitError } from '../../../shared/SubmitError';
import { TextField } from './TextField';

const backContainer = styled.cssStyle`
  position: absolute;
  left: 14px;
  top: -59px;
`;

const buttonContainer = styled.cssStyle`
  border: none;
  outline: none;
`;

export const TaskCreateForm = (props) => {
  const [fileState, setFileState] = useState(undefined)
  const [multipleFiles, setMultipleFiles] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState<string>();
  const [skills, setSkills] = useState([]);
  const {taskClicked, setTaskClicked, taskTitles, setTaskTitles, taskIndex, setTaskIndex} = props

  const schema = yup.object().shape({
    code: yup.object().required('This is a required field.'),
    language: yup.string().required('This is a required field.'),
    title: yup.string().required('This is a required field.'),
    description: yup.string().required('This is a required field.'),
    tests: yup.array().required('This is a required field.'),
    tags: yup.array().required('This is a required field.')
  });
  const methods = useForm({
    defaultValues: {
      code: {},
      tests: [],
      language: '',
      title: '',
      description: '',
      tags: [],
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    values.code = fileState
    values.tests = multipleFiles
    if(taskIndex !== null) {
      taskTitles[taskIndex] = values
      console.log(values)
      setTaskTitles(taskTitles, onBack())
      setTaskIndex(null)
    } else {
      console.log(values)
      setTaskTitles([...taskTitles, values], onBack())
    }

  }

  const onBack = () => {
    setTaskIndex(null, setTaskClicked(!taskClicked))
  };

  return (
    <>
      <div style={backContainer} className="row justify-content-center">
        <div className="col-12 dark-mode-texts">
          <div className="mb-9">
            <button style={buttonContainer} type="button" className="d-flex align-items-center ml-4" onClick={onBack} > <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
            </i><span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span></button>
          </div>
        </div>
      </div>
      <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
        <h3 className="font-size-6 mb-0">Create Task</h3>
      </div>
        <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
          <div className="row pl-5 pr-5">
            <FormProvider {...methods}>
              <Form>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <div className="pb-10 col-6">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Code</h4>
                    <div className="pl-0 col-10">
                      <FileUploader fileState={fileState} setFileState={setFileState} name="code" />
                    </div>
                  </div>
                  <div className="pb-10 col-6">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Tests</h4>
                    <div className="pl-0 col-10">
                      <MultipleFileUploader name="tests" multipleFiles={multipleFiles} setMultipleFiles={setMultipleFiles} />
                    </div>
                  </div>
                  <div className="pb-10 col-6">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Title</h4>
                    <div className="col-10 pl-0">
                      <TextField name="title" defaultValue={taskTitles[taskIndex]?.title} placeholder="Title"/>
                    </div>
                  </div>
                  <div className="pb-10 col-6">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Description</h4>
                    <div className="col-10 pl-0">
                      <TextField name="description" defaultValue={taskTitles[taskIndex]?.description} placeholder="Description"/>
                    </div>
                  </div>
                  <div className="pb-10 col-6">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Language</h4>
                    <div className="col-10 pl-0">
                      <TextField name="language" defaultValue={taskTitles[taskIndex]?.language} placeholder="Language"/>
                    </div>
                  </div>
                  <div className="pb-10 col-6">
                    <h4 className="font-size-6 font-weight-semibold mb-6">Tags</h4>
                    <div className="pl-0 col-10">
                      <TagInput name="tags" defaultValue={taskTitles[taskIndex]?.tags} skills={skills} setSkills={setSkills} taskIndex={taskIndex} taskTitles={taskTitles} />
                    </div>
                  </div>
                  <div className="col-12 my-15">
                    <button className="btn btn-primary btn-xl w-10 text-uppercase" onClick={methods.handleSubmit(onSubmit)} ><span className="mr-5 d-inline-block">+</span>Create Task</button>
                  </div>
                </div>
              </Form>
            </FormProvider>
            {errorMessage && <SubmitError message={errorMessage} />}
          </div>
        </div>
      </>
  );
};