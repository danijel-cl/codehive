import React from 'react';
import { Link } from "react-router-dom";
import ReactSelect from './ReactSelect'
import { Button, Space } from 'antd';
import { styled } from '../../../utils/css';
import { CustomTable } from '../../../Components/CustomTable';

const buttonContainer = styled.cssStyle`
  display: flex;
  flex-direction: row;
`;

const viewButton = styled.cssStyle`
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: transparent;
  color: #505050;
`;

const editButton = styled.cssStyle`
  color: rgba(0, 176, 116, 0.9);
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: transparent;
`;

const deleteButton = styled.cssStyle`
  color: #FC3F3F;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: transparent;
`;

const dataSource = [
  {
    key: '1',
    name: 'John Doe',
    appliedAs: 'Senior project manager',
    appliedOn: '12 July, 2020',
    testsPassed: '92%',
    codeQuality: '85%',
  },
  {
    key: '2',
    name: 'John Doe',
    appliedAs: 'Senior project manager',
    appliedOn: '12 July, 2020',
    testsPassed: '92%',
    codeQuality: '85%',
  },
  {
    key: '3',
    name: 'John Doe',
    appliedAs: 'Senior project manager',
    appliedOn: '12 July, 2020',
    testsPassed: '92%',
    codeQuality: '85%',
  },
  {
    key: '4',
    name: 'John Doe',
    appliedAs: 'Senior project manager',
    appliedOn: '12 July, 2020',
    testsPassed: '92%',
    codeQuality: '85%',
  },
  {
    key: '5',
    name: 'John Doe',
    appliedAs: 'Senior project manager',
    appliedOn: '12 July, 2020',
    testsPassed: '92%',
    codeQuality: '85%',
  },
  {
    key: '6',
    name: 'John Doe',
    appliedAs: 'Senior project manager',
    appliedOn: '12 July, 2020',
    testsPassed: '92%',
    codeQuality: '85%',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Applied as',
    dataIndex: 'appliedAs',
  },
  {
    title: 'Applied on',
    dataIndex: 'appliedOn',
  },
  {
    title: 'Tests passed',
    dataIndex: 'testsPassed',
  },
  {
    title: 'Code quality',
    dataIndex: 'codeQuality',
  },
  {
    title: '',
    render: (text, record) => (
      <Space style={buttonContainer} size="middle">
        <Button style={viewButton}>
          <Link to={"/application-detail"}>
            View
          </Link>
        </Button>
        <Button style={editButton}>Contact</Button>
        <Button style={deleteButton}>Reject</Button>
      </Space>
    ),
  },
];

const AppliedList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">{props.title}</h3>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
            <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
            <div className="h-px-48">
              <div className="pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                <ReactSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-13 rounded-4 pb-8 px-11">
        <CustomTable dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default AppliedList;
