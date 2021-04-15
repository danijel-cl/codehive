import React, { useState } from 'react';
// import '../RichEditor.css';
// import CheckBoxList from './Components/CheckBoxList';
// import RichEditor from './Components/RichEditor';
// import ReactSelect from './Components/ReactSelect';
// import TagInput from './Components/TagInput';
// import TaskTable from './Components/TaskTable';
import ReactSlider from '../PostListPage/Components/ReactSlider';
import { styled } from '../../utils/css';
import { Form } from 'antd';
import TagInput from './Components/TagInput';
import { FileUploader } from './Components/FileUploader';

export const TaskCreatePage = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="site-wrapper" >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="bg-white rounded-4 border border-mercury shadow-9">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
