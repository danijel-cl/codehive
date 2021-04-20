import React, {useState} from 'react';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const FileUploader = (props) => {
  const {taskClicked, setTaskClicked, taskTitles, taskIndex, setTaskIndex} = props
  const [fileState, setFileState] = useState(taskIndex? taskTitles[taskIndex].code : '')
  let defaultFile = '';
  // if(taskIndex !== null) {
  //   defaultFile = taskTitles[taskIndex].code.split('\\');
  //   defaultFile = defaultFile[defaultFile.length - 1]
  // }
  
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById('fileButton')?.click();
  };

  const handleChange = (e) => {
    const fileName = e.target.value.split('\\');
    setFileState(fileName[fileName.length - 1]);
  };

  return (
    <div style={fileUploadContainer}>
      <button style={{width: '65%'}} onClick={handleClick} className="btn btn-primary text-uppercase">
        Upload a file
      </button>
      <input type="file" onChange={handleChange} id="fileButton" style={{display:'none'}} /> 
      <span>{fileState? fileState : defaultFile}</span>
    </div>
  );
};