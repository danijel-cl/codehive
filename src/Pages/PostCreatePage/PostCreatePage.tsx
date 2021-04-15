import React, { useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './Components/CheckBoxList';
import RichEditor from './Components/RichEditor';
import ReactSelect from './Components/ReactSelect';
import TagInput from './Components/TagInput';
import TaskTable from './Components/TaskTable';
import ReactSlider from '../PostListPage/Components/ReactSlider';
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
                        <ReactSelect />
                      </div>
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Company Headquaters</h4>
                      <div className="pl-0 col-10">
                        <ReactSelect />
                      </div>
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
                        <TagInput />
                      </div>
                    </div>
                    <div className="pb-10 col-6">
                      <h4 className="font-size-6 font-weight-semibold mb-6">Tehnical skills</h4>
                      <div className="pl-0 col-10">
                        <TagInput />
                      </div>
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
