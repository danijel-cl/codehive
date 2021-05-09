import React from 'react';
import { CustomTable } from '../../../Components/CustomTable';
import StyledSelect from "./ReactSelect"
import { Button, Space } from 'antd';
import { styled } from '../../../utils/css';

const buttonContainer = styled.cssStyle`
  display: flex;
  flex-direction: row;
`;

const editButton = styled.cssStyle`
  color: rgba(0, 176, 116, 0.9);
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
`;

const deleteButton = styled.cssStyle`
  color: #FC3F3F;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
`;

const dataSource = [
  {
    key: '1',
    position: 'Senior project manager',
    jobType: 'Full-time',
    city: 'Zagreb',
    createdOn: '12 July, 2020',
    totalApplicants: '47',
  },
  {
    key: '2',
    position: 'Senior project manager',
    jobType: 'Full-time',
    city: 'Zagreb',
    createdOn: '12 July, 2020',
    totalApplicants: '47',
  },
  {
    key: '3',
    position: 'Senior project manager',
    jobType: 'Full-time',
    city: 'Zagreb',
    createdOn: '12 July, 2020',
    totalApplicants: '47',
  },
  {
    key: '4',
    position: 'Senior project manager',
    jobType: 'Full-time',
    city: 'Zagreb',
    createdOn: '12 July, 2020',
    totalApplicants: '47',
  },
  {
    key: '5',
    position: 'Senior project manager',
    jobType: 'Full-time',
    city: 'Zagreb',
    createdOn: '12 July, 2020',
    totalApplicants: '47',
  },
  {
    key: '6',
    position: 'Senior project manager',
    jobType: 'Full-time',
    city: 'Zagreb',
    createdOn: '12 July, 2020',
    totalApplicants: '47',
  },
];

const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Job type',
    dataIndex: 'jobType',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'Created on',
    dataIndex: 'createdOn',
  },
  {
    title: 'Total applicants',
    dataIndex: 'totalApplicants',
  },
  {
    title: '',
    render: (text, record) => (
      <Space style={buttonContainer} size="middle">
        <Button style={editButton}>Edit</Button>
        <Button style={deleteButton}>Delete</Button>
      </Space>
    ),
  },
];

const JobsList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">Posted Jobs</h3>
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
      <div className="bg-white shadow-8 pt-12 rounded-4 pb-9 px-11">
        <CustomTable dataSource={dataSource} columns={columns} />
      </div>
  </div>
  );
};

export default JobsList;
