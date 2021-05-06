import { Form, Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { styled } from '../utils/css';

const textContainer = styled.cssStyle`
  margin-bottom: 0;
`;

const textfieldContainer = styled.cssStyle`
  width: 100%;
  height: 50px;
`;

const passwordClassName = styled.cssClassName`
  .ant-input-suffix {
    position: absolute;
    right: 18px;
    top: 8px;
  }
  .ant-input-password {
    width: 100%;
    height: 50px;
    padding: 0;
  }
  .ant-input {
    width: 100%;
    height: 44px;
    margin-top: 2px;
    padding-left: 16px;
    padding-right: 36px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    outline: none;
  }
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
      className={passwordClassName}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        as={type === 'password' ? <Input.Password className="form-control" /> : <input className="form-control" />}
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
