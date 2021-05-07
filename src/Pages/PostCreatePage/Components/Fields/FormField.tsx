import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'antd';

export const FormField = ({name, component}) => {
  const { errors, control } = useFormContext();
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <h4 className="font-size-6 font-weight-semibold mb-6">{title}</h4>
      <Form.Item
        validateStatus={errors[`${name}`] ? 'error' : 'success'}
        help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
        <Controller
          as={component}
          control={control}
          name={name}
        />
      </Form.Item>
    </>
  );
};
