import React, {useState} from 'react';
import { Upload, Form } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

export const FormUploader = ({name}) => {

  const { errors, control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Please input file"}}
        render={({ onChange, value }) => (
          <Upload maxCount={1} onChange={onChange} data={value} beforeUpload={() => false} className="pb-3">
            <button className="btn btn-primary text-uppercase">
              Upload a file
            </button>
          </Upload>
        )}
      />
      {errors[name] && <p className="pt-2">{errors[name].message}</p>}
    </>
  );
};

export default FormUploader;
