import Axios from 'axios';
import { serialize } from 'object-to-formdata';

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
  email: string;
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
  task: string;
  language: string;
  description: string;
  code: File;
  tests: File;
}

export type TasksParams = {
    [key:string]: TaskParams;
}

export type PostParams = {
  experience: string;
  position: string;
  description: string;
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
  createPost: async (post: PostParams, tasks) => {
    console.log("Post", post)
    console.log("Tasks", tasks)
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    console.log("serialize", serialize(post))
    const response = await axiosAuthenticated.post('/api/posts/',post);
    console.log(response.data.id)
    console.log(tasks)
    tasks.forEach((task)=>{
      task.post = response.data.id;
      axiosAuthenticated.post('/api/tasks/',serialize(task), config)
    })

    return response.data;
  },


}
