import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { http } from '../api/http';

import { TextField } from '../Components/TextField';
import { styled } from '../utils/css';

const loginPageContainer = styled.cssStyle`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const loginContainer = styled.cssStyle`
  display: flex;
  flex-direction: column;
  width: 340px;
  margin-top: 96px;
`;

const loginPageTitle = styled.cssStyle`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.25px;
  text-align: left;
  width: 100%;
  margin-bottom: 16px;
`;

const loginPageH1 = styled.cssStyle`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  width: 100%;
  margin-bottom: 25px;
`;

const formContainer = styled.cssStyle`
  width: 100%;
`;

const buttonContainer = styled.cssStyle`
  width: 100%;
  height: 36px;
  background-color: lightblue;
  margin-bottom: 24px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
`;

export const RecoverPasswordPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Your e-mail is not valid.').required('This is a required field.'),
  });
  const methods = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    console.log(methods.getValues().email)
    await http.resetPassword(methods.getValues().email)
  }

  return (
    <div style={loginPageContainer}>
      <div style={loginContainer}>
        <p style={loginPageTitle}>Recover Password</p>
        <h1 style={loginPageH1}>Enter your e-mail and we'll send you a new password.</h1>
        <FormProvider {...methods}>
          <Form style={formContainer}>
            <TextField type="text" name="email" placeholder="Email address" />
            <button style={buttonContainer} onClick={(methods.handleSubmit(onSubmit))}>send</button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
};
