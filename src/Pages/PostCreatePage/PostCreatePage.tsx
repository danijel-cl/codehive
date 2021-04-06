import React, { useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './Components/CheckBoxList';
import RichEditor from './Components/RichEditor'
import ReactSlider from '../PostListPage/Components/ReactSlider';
import { experienceTypes, jobTypes, postedTypes } from '../PostListPage/PostListPage';
import { styled } from '../../utils/css';

export const PostCreatePage = (props) => {
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
                      <CheckBoxList name="Experience Level" items={experienceTypes} />
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
