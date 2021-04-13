import React, { useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './Components/CheckBoxList';
import RichEditor from './Components/RichEditor';
import ReactSelect from './Components/ReactSelect';
import TagInput from './Components/TagInput';
import ReactSlider from '../PostListPage/Components/ReactSlider';
import { styled } from '../../utils/css';

export const PostCreatePage = (props) => {
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
                  <div className="row">
                    <div className="col-12">
                      <CheckBoxList name="Job Type" items={jobTypes} />
                      <div className="pl-0 col-8">
                        <ReactSlider />
                      </div>
                      <div className="pl-0 pb-10 col-6">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Currency</h4>
                        <ReactSelect />
                      </div>
                      <CheckBoxList name="Experience Level" items={experienceTypes} />
                      <div className="pl-0 pb-10 col-6">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Job Location</h4>
                        <ReactSelect />
                      </div>
                      <div className="pl-0 pb-10 col-6">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Soft skills</h4>
                        <TagInput />
                      </div>
                      <div className="pl-0 pb-10 col-6">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Tehnical skills</h4>
                        <TagInput />
                      </div>
                      <div className="pb-10">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Job Description</h4>
                        <div className="col-12 pl-0">
                          <RichEditor />
                        </div>
                      </div>
                      <div className="pb-10">
                        <h4 className="font-size-6 font-weight-semibold mb-6">Your Role</h4>
                        <div className="col-12 pl-0">
                          <RichEditor />
                        </div>
                      </div>
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
