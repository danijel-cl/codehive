import React, {useState} from 'react';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const MultipleFileUploader = () => {
  const empty: string[] = []
  const [fileState, setFileState] = useState(empty)
  
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById('multiFileButton')?.click();
  };

  const handleChange = (e) => {
    const fileName = e.target.value.split('\\');
    setFileState([...fileState, fileName[fileName.length - 1]]);
  };

  return (
    <div style={fileUploadContainer}>
      <button style={{width: '65%'}} onClick={handleClick} className="btn btn-primary text-uppercase">
        Upload a file
      </button>
      <input type="file" onChange={handleChange} id="multiFileButton" style={{display:'none'}} /> 
      <span>{fileState.map((f) => <span>{f}</span>)}</span>
    </div>
  );
};