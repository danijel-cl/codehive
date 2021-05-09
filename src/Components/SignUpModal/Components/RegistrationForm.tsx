import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as yup from 'yup';
import { cacheKeys } from '../../../api/api';
import { http } from '../../../api/http';

import { TextField } from './TextField';
import { SubmitError } from '../../../shared/SubmitError';
import { useNavigation } from '../../../shared/hooks/useNavigation';
import { styled } from '../utils/css';

const buttonContainer = styled.cssStyle`
    border: none;
    background-color: transparent;
`;

export const RegistrationForm = () => {
  const queryClient = useQueryClient();
  const { toAccountActivation } = useNavigation();
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (values: any) => {
    console.log(values)
    if(values.password !== values.password2) {
      setErrorMessage('Registration failed. Check your passwords.');
    } else {

      setErrorMessage(undefined);
      let data;
      
      try {
        data = await http.register({password: values.password, email: values.email});
        console.log(data)
      } catch (error) {
        setErrorMessage('Registration failed. Check your credentials');
      }
      
      if (data && data.token) {
        await http.activateAccount(values.email);
        // activateAccount()
        localStorage.setItem('regtoken', data.token);
        queryClient.refetchQueries(cacheKeys.me);
      }
    }
  };

  // const activateAccount = () => {
  //   toAccountActivation();
  // };

  const schema = yup.object().shape({
    email: yup.string().required('This is a required field.'),
    /* company: yup.boolean().required('This is a required field.'), */
    password: yup.string().required('This is a required field.'),
    password2: yup.string().required('This is a required field.'),
  });
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      password2: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <div>
    <FormProvider {...methods}>
      <Form action="/">
          <div className="form-group">
            <label htmlFor="email2" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">E-mail</label>
            <TextField type="text" name="email" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password2" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Password</label>
            <div className="position-relative">
              <TextField type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="font-size-4 text-black-2 font-weight-semibold line-height-reset">Confirm Password</label>
            <div className="position-relative">
              <TextField type="password" name="password2" placeholder="Password" />
            </div>
          </div>
          <div className="form-group d-flex flex-wrap justify-content-between mb-1">
            <label htmlFor="terms-check2" className="gr-check-input d-flex  mr-3">
              <input className="d-none" type="checkbox" id="terms-check2" />
              <span className="checkbox mr-5"></span>
              <span className="font-size-3 mb-0 line-height-reset d-block">Agree to the <button style={buttonContainer} className="text-primary">Terms & Conditions</button></span>
            </label>
            <button style={buttonContainer} className="font-size-3 text-dodger line-height-reset">Forget Password?</button>
          </div>
          <div className="form-group mb-8">
            <button className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase" onClick={methods.handleSubmit(onSubmit)} >Sign Up </button>
          </div>
        </Form>
        </FormProvider>
        {errorMessage && <SubmitError message={errorMessage} />}
      </div>
  );
};
