import { Form } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '@material-ui/core/Input';

import { styled } from '../utils/css';

const textContainer = styled.cssStyle`
  margin-bottom: 0;
`;

const textfieldContainer = styled.cssStyle`
  width: 100%;
  height: 50px;
`;

type IProps = {
  type: string;
  placeholder: string;
  name: string;
  icon?: any;
  defaultValue?: any;
};

export const TextField = ({ type, name, placeholder, icon, defaultValue }: IProps) => {
  const { errors, control } = useFormContext();

  return (
    <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      style={textContainer}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        as={type === 'password' ? <input className="form-control" type='password' /> : <input className="form-control" />}
        type={type}
        style={textfieldContainer}
        defaultValue={defaultValue}
        placeholder={placeholder}
        control={control}
        name={name}
        id={name}
      />
    </Form.Item>
  );
};
