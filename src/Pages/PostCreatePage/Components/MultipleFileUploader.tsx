import { Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const MultipleFileUploader = (props) => {
  const { taskTitles, taskIndex, multipleFiles, setMultipleFiles} = props
  let defaultFiles: UploadFile[] = [];
  if(taskIndex !== null) {
    taskTitles[taskIndex].tests?.forEach((file: UploadFile) => {
      defaultFiles.push(file)
    })
    setMultipleFiles(taskTitles[taskIndex].tests)
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
    setMultipleFiles(files)
  };

  return (
    <Upload multiple onChange={handleChange} action="https://www.mocky.io/v2/5cc8019d300000980a055e76" fileList={multipleFiles !== [] ? multipleFiles : defaultFiles} style={fileUploadContainer}>
      <button style={{width: '65%'}} onClick={handleClick} className="btn btn-primary text-uppercase">
        Upload files
      </button>
    </Upload>
  );
};