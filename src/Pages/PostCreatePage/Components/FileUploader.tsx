import { Form, Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { styled } from '../../../utils/css';

const fileUploadContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
`;

export const FileUploader = ({name}) => {
  const { errors, control } = useFormContext();
  
  return (
    <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => {
          return (
            <Upload maxCount={1} style={fileUploadContainer}>
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