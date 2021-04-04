import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import React, { useState } from 'react';
// import '../RichEditor.css';
import CheckBoxList from './PostListPage/Components/CheckBoxList';
import ReactSlider from './PostListPage/Components/ReactSlider';
import { experienceTypes, jobTypes, postedTypes } from './PostListPage/PostListPage';
import { styled } from '../utils/css';

const modalContainer = styled.cssStyle`
  width: 800px;
`;

export const PostForm = (props) => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  return (
    <div className="site-wrapper overflow-hidden " >
      <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="row ">
              <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                <div className="bg-white rounded-4 border border-mercury shadow-9" style={modalContainer}>
                  <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                    <h3 className="font-size-6 mb-0">Create Post</h3>
                  </div>
                  <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                    <div className="row">
                    <div className="col-12 col-xs-8">
                      <CheckBoxList name="Job Type" items={jobTypes} />
                      <ReactSlider />
                      <CheckBoxList name="Experience Level" items={experienceTypes} />
                      <CheckBoxList name="Posted Time" items={postedTypes} />
                      <h4 className="font-size-6 font-weight-semibold mb-6">Technical Skills</h4>
                      <textarea name="techskill" placeholder="Technical Skills" />
                    </div>  
                        {/* <div className="RichEditor-root">
                      <Editor editorState={editorState} onChange={setEditorState} wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class" />
                            </div> */}
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