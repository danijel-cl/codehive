import React, {useState} from 'react';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const FileUploader = () => {
  const [fileState, setFileState] = useState('')
  
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById('fileButton')?.click();
    // document.getElementById('fileButton').onchange = () =>{      
    //   this.setState({
    //       fileUploadState:document.getElementById('fileButton')?.nodeValue
    //           });
    //       }
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
      <span>{fileState}</span>
    </div>
  );
};