import React from 'react';
import StyledSelect from "./ReactSelect"
import { CustomTable } from '../../../Components/CustomTable';
import { Button, Space } from 'antd';
import { styled } from '../../../utils/css';


const buttonContainer = styled.cssStyle`
  border: none;
  outline: none;
  color: rgba(0, 176, 116, 0.9);
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
`;

const dataSource = [
  {
    key: '1',
    timeSubmitted: '12 July, 2020',
    company: 'Google',
    position: 'Software developer',
    title: '2 weeks',
    integrationScore: '92%',
    task: 'VIEW',
  },
  {
    key: '2',
    timeSubmitted: '12 July, 2020',
    company: 'Google',
    position: 'Software developer',
    title: '2 weeks',
    integrationScore: '92%',
    task: 'VIEW',
  },
  {
    key: '3',
    timeSubmitted: '12 July, 2020',
    company: 'Google',
    position: 'Software developer',
    title: '2 weeks',
    integrationScore: '92%',
    task: 'VIEW',
  },
  {
    key: '4',
    timeSubmitted: '12 July, 2020',
    company: 'Google',
    position: 'Software developer',
    title: '2 weeks',
    integrationScore: '92%',
    task: 'VIEW',
  },
  {
    key: '5',
    timeSubmitted: '12 July, 2020',
    company: 'Google',
    position: 'Software developer',
    title: '2 weeks',
    integrationScore: '92%',
    task: 'VIEW',
  },
  {
    key: '6',
    timeSubmitted: '12 July, 2020',
    company: 'Google',
    position: 'Software developer',
    title: '2 weeks',
    integrationScore: '92%',
    task: 'VIEW',
  },
];

const columns = [
  {
    title: 'Time submitted',
    dataIndex: 'timeSubmitted',
  },
  {
    title: 'Company',
    dataIndex: 'company',
  },
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Integration score',
    dataIndex: 'integrationScore',
  },
  {
    title: 'Task',
    dataIndex: 'task',
    render: (text, record) => (
      <Space size="middle">
        <Button style={buttonContainer}>{text}</Button>
      </Space>
    ),
  },
];

const TaskList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">Submitted Tasks</h3>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
            <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
            <div className="h-px-48">
              <div className="pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                <StyledSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-8 pt-10 rounded pb-8 px-11">
      <CustomTable dataSource={dataSource} columns={columns} />
      </div>
  </div>
  );
};

export default TaskList;
