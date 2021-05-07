import { Upload } from 'antd';
import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FileUploader = ({name}) => {

  const { errors, control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Please input file"}}
        render={({ onChange, value }) => (
          <Upload maxCount={1} onChange={onChange} data={value}>
            <a type="button" style={{width: '65%'}} className="btn btn-primary text-uppercase">
              Upload a file
            </a>
          </Upload>
        )}
      />
      <p className="pt-3"> {errors[name] && errors[name].message}</p>
    </>
  );
};
