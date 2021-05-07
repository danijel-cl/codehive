import Axios from 'axios';

const axiosAnonymous = Axios.create({ baseURL: 'http://127.0.0.1:8000' });
const axiosAuthenticated = Axios.create({ baseURL: 'http://127.0.0.1:8000' });

axiosAuthenticated.interceptors.request.use(function (config) {
  const token = localStorage.getItem('logtoken');
  console.log("Token", token)
  config.headers.Authorization = 'Token ' + token;

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

export type CompanyParams = {
  address: string;
  description: string;
  image: string;
  name: string;
  user: number;
}

export type SkillParams = {
  name: string;
  type: boolean;
}

export type SkillsParams = {
    [key:string]: SkillParams;
}

export type TaskParams = {
  name: string;
  description: string;
}

export type TasksParams = {
    [key:string]: TaskParams;
}

export type PostParams = {
  skills: SkillsParams;
  tasks: TasksParams;
  currency: string;
  ends: string;
  experience: string;
  location: string;
  position: string;
  salary_low: number;
  salary_high: number;
  post_description: string;
  post_role_description: string;
  type: string;
}

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
  getCompany: async (id: number) => {
    const response = await axiosAnonymous.get(`/api/company/${id}`);

    return response.data;
  },
  getAllSkills: async () => {
    const response = await axiosAnonymous.get('/api/skills');

    return response.data;
  },
  updateCompany: async (props) => {
    const {id, companyParams} = props
    const response = await axiosAnonymous.patch(`/api/company/${id}`, companyParams);

    return response.data;
  },
  deleteCompany: async (id: number) => {
    const response = await axiosAnonymous.delete(`/api/company/${id}`);

    return response.data;
  },
  getAllPosts: async () => {
    const response = await axiosAnonymous.get('/api/posts');

    return response.data;
  },
  createPost: async (post: PostParams) => {
    const response = await axiosAuthenticated.post('/api/posts', post);

    return response.data;
  },


}
