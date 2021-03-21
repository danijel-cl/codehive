import Axios from 'axios';

const axiosAnonymous = Axios.create({ baseURL: 'http://127.0.0.1:8000' });
const axiosAuthenticated = Axios.create({ baseURL: 'http://127.0.0.1:8000' });

axiosAuthenticated.interceptors.request.use(function (config) {
  const token = localStorage.getItem('logtoken');
  config.headers.Authorization = 'Bearer ' + token;

  return config;
});

export type confirmPassParams = {
  token: string;
  password: string;
};

export type LoginParams = {
  username: string;
  password: string;
};

export type RegParams = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  password: string;
};

export const http = {
  login: async (loginParams: LoginParams) => {
    const response = await axiosAnonymous.post('/api/users/login', loginParams);

    return response.data;
  },
  register: async (regParams: RegParams) => {
    const response = await axiosAnonymous.post('/api/users/', regParams);

    return response.data;
  },
  activateAccount: async (email: string) => {
    const response = await axiosAnonymous.post('/api/users/account-activate', email);

    return response.data;
  },
  confirmAccount: async (token: string) => {
    const response = await axiosAnonymous.post('/api/users/account-activate-confirm', token);

    return response.data;
  },
  resetPassword: async (email: string) => {
    const response = await axiosAnonymous.post('/api/users/password-reset', email);

    return response.data;
  },
  confirmPassword: async (passParams: confirmPassParams) => {
    const response = await axiosAnonymous.post('/api/users/password-reset-confirm', passParams);

    return response.data;
  },
}