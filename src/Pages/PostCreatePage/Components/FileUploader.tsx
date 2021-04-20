import { Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React, {useState} from 'react';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const FileUploader = (props) => {
  const {fileState, setFileState, taskTitles, taskIndex, setTaskIndex} = props
  let defaultFile = '';
  if(taskIndex !== null) {
    console.log(fileState)
    defaultFile = taskTitles[taskIndex].code.split('\\');
    defaultFile = defaultFile[defaultFile.length - 1]
    console.log(defaultFile)
    setFileState(taskTitles[taskIndex].code)
  }
  
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Upload maxCount={1} style={fileUploadContainer}>
        <button style={{width: '65%'}} onClick={handleClick} className="btn btn-primary text-uppercase">
          Upload a file
        </button>
      </Upload>
      {defaultFile}
    </>
  );
};