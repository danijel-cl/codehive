import { Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const MultipleFileUploader = (props) => {
  const { taskTitles, taskIndex, fileState, setFileState} = props
  let defaultFiles: UploadFile[] = [];
  if(taskIndex !== null) {
    taskTitles[taskIndex].tests?.forEach((file: UploadFile) => {
      defaultFiles.push(file)
    })
    setFileState(taskTitles[taskIndex].tests)
  }

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleChange = (info) => {
    let files = [...info.fileList]
    files = files.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileState(files)
  };

  return (
    <Upload multiple onChange={handleChange} fileList={fileState !== [] ? fileState : defaultFiles} style={fileUploadContainer}>
      <button style={{width: '65%'}} onClick={handleClick} className="btn btn-primary text-uppercase">
        Upload files
      </button>
    </Upload>
  );
};