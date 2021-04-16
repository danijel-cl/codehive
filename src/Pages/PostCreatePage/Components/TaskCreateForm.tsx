import React, { useState } from 'react';

import { Form } from 'antd';
import { FileUploader } from './FileUploader';
import { Link } from 'react-router-dom';
import { styled } from '../utils/css';
import TagInput from './TagInput';

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
  const {taskClicked, setTaskClicked} = props
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
    <div style={backContainer} className="row justify-content-center">
           <div className="col-12 dark-mode-texts">
             <div className="mb-9">
               <button style={buttonContainer} className="d-flex align-items-center ml-4" onClick={() => setTaskClicked(!taskClicked)} > <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8">
               </i><span className="text-uppercase font-size-3 font-weight-bold text-gray">Back</span></button>
             </div>
           </div>
         </div>
    <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <h3 className="font-size-6 mb-0">Create Task</h3>
                </div>
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row pl-5 pr-5">
                  <Form
                      name="create_post"
                      onFinish={onFinish}
                      
                    >
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="code"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your code!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Code</h4>
                      <div className="pl-0 col-10">
                        <FileUploader />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="tests"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your tests!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Tests</h4>
                      <div className="pl-0 col-10">
                        <FileUploader />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="title"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your title!',
                          },
                        ]}
                      >

                      <h4 className="font-size-6 font-weight-semibold mb-6">Title</h4>
                      <div className="col-10 pl-0">
                        <input className="form-control" placeholder="Title"/>
                      </div>
                    </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="description"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your description!',
                          },
                        ]}
                      >

                      <h4 className="font-size-6 font-weight-semibold mb-6">Description</h4>
                      <div className="col-10 pl-0">
                        <input className="form-control" placeholder="Description"/>
                      </div>
                    </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="language"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your language!',
                          },
                        ]}
                      >

                      <h4 className="font-size-6 font-weight-semibold mb-6">Language</h4>
                      <div className="col-10 pl-0">
                        <input className="form-control" placeholder="Language"/>
                      </div>
                    </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="tags"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your tags!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Tags</h4>
                      <div className="pl-0 col-10">
                        <TagInput />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="col-12 my-15">
                      <a className="btn btn-primary btn-xl w-10 text-uppercase" type="submit"><span className="mr-5 d-inline-block">+</span>Create Task</a>
                    </div>
                    </div>
                    </Form>
                  </div>
                </div>
                </>
  );
};