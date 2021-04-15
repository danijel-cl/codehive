import React, {useRef} from 'react';

export const FileUploader = () => {
  const hiddenFileInput = useRef();
  
  const handleClick = event => {
  };

  const handleChange = event => {
  };

  return (
    <>
      <a onClick={handleClick} className="btn btn-primary text-uppercase">
        Upload a file
      </a>
      <input type="file" onChange={handleChange} style={{display:'none'}} /> 
    </>
  );
};