import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as yup from 'yup';
import { cacheKeys } from '../api/api';
import { LoginParams } from '../api/http';
import { http } from '../api/http';

import { TextField } from '../Components/TextField';
import { SubmitError } from '../shared/SubmitError';
import { useNavigation } from '../shared/hooks/useNavigation';
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


const logoContainer = styled.cssStyle`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
`;

const formContainer = styled.cssStyle`
  width: 100%;
  display: flex;
  flex-direction: column
`;

const buttonContainer = styled.cssStyle`
  width: 100%;
  height: 36px;
  margin-bottom: 24px;
  margin-top: 10px;
  text-transform: uppercase;
  background-color: lightblue;
  cursor: pointer;
`;

const forgotContainer = styled.cssStyle`
  color: blue;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;


export const LoginPage = () => {
  const queryClient = useQueryClient();
  const { toRecoverPassword } = useNavigation();
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (user: LoginParams) => {
    console.log('jsbjsjjs')
    setErrorMessage(undefined);
    let data;

    try {
      data = await http.login(user);
    } catch (error) {
      setErrorMessage('Login failed. Check your credentials');
    }

    if (data && data.token) {
      localStorage.setItem('logtoken', data.token);
      queryClient.refetchQueries(cacheKeys.me);
      console.log(data.token)
    }
  };

  const recoverPassword = () => {
    toRecoverPassword();
  };

  const schema = yup.object().shape({
    username: yup.string().required('This is a required field.'),
    password: yup.string().required('This is a required field.'),
  });
  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <div style={loginPageContainer}>
      <div style={logoContainer}>
      </div>
      <div style={loginContainer}>
        <p style={loginPageTitle}>Log in</p>
        <FormProvider {...methods}>
          <Form style={formContainer}>
            <TextField type="text" name="username" placeholder="Username" />
            <TextField type="password" name="password" placeholder="Password" />
            <button style={buttonContainer} onClick={methods.handleSubmit(onSubmit)} >log in</button>
          </Form>
        </FormProvider>
        {errorMessage && <SubmitError message={errorMessage} />}
        <a style={forgotContainer} onClick={recoverPassword}>
          Forgot password?
        </a>
      </div>
    </div>
  );
};
