import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as yup from 'yup';
import { cacheKeys } from '../../../api/api';
import { LoginParams } from '../../../api/http';
import { http } from '../../../api/http';

import { TextField } from './TextField';
import { SubmitError } from '../../../shared/SubmitError';
import { styled } from '../utils/css';
// import { useNavigation } from '../../../shared/hooks/useNavigation';

const buttonContainer = styled.cssStyle`
    border: none;
    background-color: transparent;
`;

export const LoginForm = () => {
  const queryClient = useQueryClient();
  // const { toRecoverPassword } = useNavigation();
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (user: LoginParams) => {
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
      window.location.reload()
    }
  };

  // const recoverPassword = () => {
  //   toRecoverPassword();
  // };

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
    <div>
      <FormProvider {...methods}>
        <Form action="/">
          <div className="form-group">
            <label htmlFor="email" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
            <TextField type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
            <div className="position-relative">
              <TextField type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <div className="form-group d-flex flex-wrap justify-content-between">
            <label htmlFor="terms-check" className="gr-check-input d-flex  mr-3">
              <input className="d-none" type="checkbox" id="terms-check" />
              <span className="checkbox mr-5"></span>
              <span className="font-size-3 mb-0 line-height-reset mb-1 d-block">Remember password</span>
            </label>
            <button style={buttonContainer} className="font-size-3 text-dodger line-height-reset">Forget Password</button>
          </div>
          <div className="form-group mb-8">
            <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase" onClick={methods.handleSubmit(onSubmit)} >Log in</button>
          </div>
          <p className="font-size-4 text-center heading-default-color">Don’t have an account? <button style={buttonContainer} className="text-primary">Create a free account</button></p>
        </Form>
      </FormProvider>
      {errorMessage && <SubmitError message={errorMessage} />}
    </div>
  );
};
