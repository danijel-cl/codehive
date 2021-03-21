import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as yup from 'yup';
import { cacheKeys } from '../api/api';
import { RegParams } from '../api/http';
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

export const RegistrationPage = () => {
  const queryClient = useQueryClient();
  const { toAccountActivation } = useNavigation();
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (user: RegParams) => {
    console.log(user)
    setErrorMessage(undefined);
    let data;

    try {
      data = await http.register(user);
    } catch (error) {
      setErrorMessage('Registration failed. Check your credentials');
    }

    if (data && data.token) {
      await http.activateAccount(user.email);
      activateAccount()
      localStorage.setItem('regtoken', data.token);
      queryClient.refetchQueries(cacheKeys.me);
    }
  };

  const activateAccount = () => {
    toAccountActivation();
  };

  const schema = yup.object().shape({
    first_name: yup.string().required('This is a required field.'),
    last_name: yup.string().required('This is a required field.'),
    email: yup.string().required('This is a required field.'),
    company: yup.boolean().required('This is a required field.'),
    password: yup.string().required('This is a required field.'),
  });
  const methods = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      company: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <div style={loginPageContainer}>
      <div style={logoContainer}>
      </div>
      <div style={loginContainer}>
        <p style={loginPageTitle}>Register</p>
        <FormProvider {...methods}>
          <Form style={formContainer}>
            <TextField type="text" name="first_name" placeholder="First Name" />
            <TextField type="text" name="last_name" placeholder="Last Name" />
            <TextField type="text" name="email" placeholder="E-mail" />
            <TextField type="text" name="company" placeholder="Company" />
            <TextField type="password" name="password" placeholder="Password" />
            <button style={buttonContainer} onClick={methods.handleSubmit(onSubmit)} >register</button>
          </Form>
        </FormProvider>
        {errorMessage && <SubmitError message={errorMessage} />}
      </div>
    </div>
  );
};
