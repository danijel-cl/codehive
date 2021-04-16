import React, { useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './CheckBoxList';
import RichEditor from './RichEditor';
import ReactSelect from './ReactSelect';
import TagInput from './TagInput';
import TaskTable from './TaskTable';
import ReactSlider from '../../PostListPage/Components/ReactSlider';
import { styled } from '../../../utils/css';
import { Form } from 'antd';

export const PostCreateForm = (props) => {
  let {taskClicked, setTaskClicked} = props;
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <h3 className="font-size-6 mb-0">Create Post</h3>
                </div>
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <div className="row pl-5 pr-5">
                  <Form
                      name="create_post"
                      onFinish={onFinish}
                      
                    >
                      <Form.Item
                        name="salaryrange"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your salary range!',
                          },
                        ]}
                      >

                    <div className="col-8">
                      <ReactSlider />
                    </div>
                    </Form.Item>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="currency"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your currency!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Currency</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="companyHead"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your company headquarters!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="companyH"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your company headquarters!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="jobLoc"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your job location!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Job Location</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="softSkills"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your soft skills!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Soft skills</h4>
                      <div className="pl-0 col-10">
                        <TagInput />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-6">
                    <Form.Item
                        name="techSkills"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your technical skills!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Technical skills</h4>
                      <div className="pl-0 col-10">
                        <TagInput />
                      </div>
                      </Form.Item>
                    </div>
                    <div className="pb-20 col-12">
                    <Form.Item
                        name="tipsSolvingTasks"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your tips for solving tasks!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Tips for solving tasks</h4>
                      <RichEditor />
                      </Form.Item>
                    </div>
                    <div className="pb-20 col-12">
                      <TaskTable taskClicked={taskClicked} setTaskClicked={setTaskClicked} />
                    </div>
                    <div className="pb-10 col-12">
                    <Form.Item
                        name="jobDesc"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your tips for job description!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Job Description</h4>
                      <RichEditor />
                      </Form.Item>
                    </div>
                    <div className="pb-10 col-12">
                    <Form.Item
                        name="yourRole"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your tips for your role!',
                          },
                        ]}
                      >
                      <h4 className="font-size-6 font-weight-semibold mb-6">Your Role</h4>
                      <RichEditor />
                      </Form.Item>
                    </div>
                    <div className="col-12 my-15">
                      <a className="btn btn-primary btn-xl w-10 text-uppercase"><span className="mr-5 d-inline-block">+</span>Create Post</a>
                    </div>
                    </div>
                    </Form>
                  </div>
                </div>
              </>
  )
}
