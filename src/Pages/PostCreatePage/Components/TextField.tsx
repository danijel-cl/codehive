import { Form } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '@material-ui/core/Input';

export const TextField = ({name, placeholder, defaultValue}) => {
  const { errors, control } = useFormContext();

  return (
    <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        as={<input className="form-control" />}
        placeholder={placeholder}
        defaultValue={defaultValue}
        control={control}
        name={name}
      />
    </Form.Item>
  );
};