import React, { useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './Components/CheckBoxList';
import RichEditor from './Components/RichEditor';
import ReactSelect from './Components/ReactSelect';
import TagInput from './Components/TagInput';
<<<<<<< HEAD
import TaskTable from './Components/TaskTable';
import ReactSlider from '../PostListPage/Components/ReactSlider';
=======
import ReactSlider from './Components/ReactSlider';
>>>>>>> 9b21428133ba7093f7e98a88f26214ad6f35ddd0
import { styled } from '../../utils/css';
import { Form } from 'antd';

export const PostCreatePage = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const jobTypes = [
    { name: 'Full Time' },
    { name: 'Part Time' },
    { name: 'Contract' },
    { name: 'Internship' },
    { name: 'Temporary' },
  ];

  const experienceTypes = [
    { name: 'All' },
    { name: 'Senior' },
    { name: 'Mid' },
    { name: 'Junior' },
  ];

  const postedTypes = [
    { name: 'Anytime' },
    { name: 'Last week' },
    { name: 'Last 2 weeks' },
    { name: 'Last month' },
  ];
  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="bg-white rounded-4 border border-mercury shadow-9">
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                  <h3 className="font-size-6 mb-0">Create Post</h3>
                </div>
                <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
<<<<<<< HEAD
                  <div className="row pl-5 pr-5">
                    <div className="col-8">
                      <ReactSlider />
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Currency</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
                      <div className="pl-0 col-10">
=======
                  <div className="row">
                    <div className="col-12">
                    <Form
                      name="create_post"
                      onFinish={onFinish}
                    >
                      <Form.Item
                        name="jobType"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your job type!',
                          },
                        ]}
                      >
                        <CheckBoxList name="Job Type" items={jobTypes} />                        
                      </Form.Item>
                      <div className="pl-0 col-8">
                      <Form.Item
                        name="salaryRange"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your salary range!',
                          },
                        ]}
                      >
                        <ReactSlider />
                        </Form.Item>
                      </div>
                      <div className="pl-0 pb-10 col-6">
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
>>>>>>> 9b21428133ba7093f7e98a88f26214ad6f35ddd0
                        <ReactSelect />
                        </Form.Item>
                      </div>
<<<<<<< HEAD
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
                      <div className="pl-0 col-10">
=======
                      <Form.Item
                        name="expLevel"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your experience level!',
                          },
                        ]}
                      >
                        <CheckBoxList name="Experience Level" items={experienceTypes} />
                      </Form.Item>
                      <div className="pl-0 pb-10 col-6">
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
>>>>>>> 9b21428133ba7093f7e98a88f26214ad6f35ddd0
                        <ReactSelect />
                        </Form.Item>
                      </div>
<<<<<<< HEAD
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Job Location</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Soft skills</h4>
                      <div className="pl-0 col-10">
=======
                      <div className="pl-0 pb-10 col-6">
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
                        <TagInput />
                        </Form.Item>
                      </div>
                      <div className="pl-0 pb-10 col-6">
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
>>>>>>> 9b21428133ba7093f7e98a88f26214ad6f35ddd0
                        <TagInput />
                        </Form.Item>
                      </div>
<<<<<<< HEAD
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Tehnical skills</h4>
                      <div className="pl-0 col-10">
                        <TagInput />
=======
                      <div className="pb-10">
                      <Form.Item
                        name="jobDesc"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your job description!',
                          },
                        ]}
                      >
                        <h4 className="font-size-6 font-weight-semibold mb-6">Job Description</h4>
                        <div className="col-12 pl-0">
                          <RichEditor />
                        </div>
                        </Form.Item>
                      </div>
                      <div className="pb-10">
                      <Form.Item
                        name="yourRole"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please select your job description!',
                          },
                        ]}
                      >
                        <h4 className="font-size-6 font-weight-semibold mb-6">Your Role</h4>
                        <div className="col-12 pl-0">
                          <RichEditor />
                        </div>
                        </Form.Item>
>>>>>>> 9b21428133ba7093f7e98a88f26214ad6f35ddd0
                      </div>
                    </Form>
                    </div>
                    <div className="pb-20 col-12">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Tips for solving tasks</h4>
                      <RichEditor />
                    </div>
                    <div className="pb-20 col-12">
                      <TaskTable />
                    </div>
                    <div className="pb-10 col-12">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Job Description</h4>
                      <RichEditor />
                    </div>
                    <div className="pb-10 col-12">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Your Role</h4>
                      <RichEditor />
                    </div>
                    <div className="col-12 my-15">
                      <a className="btn btn-primary btn-xl w-10 text-uppercase"><span className="mr-5 d-inline-block">+</span>Create Post</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
