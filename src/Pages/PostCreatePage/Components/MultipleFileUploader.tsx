import { Form, Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const MultipleFileUploader = (props) => {
  const {name, multipleFiles, setMultipleFiles} = props
  const { errors, control } = useFormContext();
  const handleupload = (info) => {
    setMultipleFiles(info.fileList);
  }

  return (
    <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => {
          return (
            <Upload multiple onChange={handleupload} style={fileUploadContainer}>
              <button type="button" style={{width: '65%'}} className="btn btn-primary text-uppercase">
                Upload files
              </button>
            </Upload>
          )
        }}
      />
    </Form.Item>
  );
};