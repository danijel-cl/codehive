import { Form, Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const FileUploader = (props) => {
  const {name, fileState, setFileState} = props
  const { errors, control } = useFormContext();
  const handleupload = (info) => {
    console.log(info.fileList)
    setFileState(info.fileList);
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
            <Upload maxCount={1} onChange={handleupload} fileList={fileState} style={fileUploadContainer}>
              <button type="button" style={{width: '65%'}} className="btn btn-primary text-uppercase">
                Upload a file
              </button>
            </Upload>
          )
        }}
      />
    </Form.Item>
  );
};