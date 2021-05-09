import React from 'react';
import { CustomTable } from '../../../Components/CustomTable';
import ReactSelect from './ReactSelect'

const dataSource = [
  {
    key: '1',
    company: 'Google',
    appliedAs: 'Software developer',
    appliedOn: '12 July, 2020',
    endedOn: '28 July, 2020',
    testsPassed: '92%',
    challenge: 'VIEW',
  },
  {
    key: '2',
    company: 'Google',
    appliedAs: 'Software developer',
    appliedOn: '12 July, 2020',
    endedOn: '28 July, 2020',
    testsPassed: '92%',
    challenge: 'VIEW',
  },
  {
    key: '3',
    company: 'Google',
    appliedAs: 'Software developer',
    appliedOn: '12 July, 2020',
    endedOn: '28 July, 2020',
    testsPassed: '92%',
    challenge: 'VIEW',
  },
  {
    key: '4',
    company: 'Google',
    appliedAs: 'Software developer',
    appliedOn: '12 July, 2020',
    endedOn: '28 July, 2020',
    testsPassed: '92%',
    challenge: 'VIEW',
  },
  {
    key: '5',
    company: 'Google',
    appliedAs: 'Software developer',
    appliedOn: '12 July, 2020',
    endedOn: '28 July, 2020',
    testsPassed: '92%',
    challenge: 'VIEW',
  },
  {
    key: '6',
    company: 'Google',
    appliedAs: 'Software developer',
    appliedOn: '12 July, 2020',
    endedOn: '28 July, 2020',
    testsPassed: '92%',
    challenge: 'VIEW',
  },
];

const columns = [
  {
    title: 'Company',
    dataIndex: 'company',
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
    title: 'Ended on',
    dataIndex: 'endedOn',
  },
  {
    title: 'Tests Passed',
    dataIndex: 'testsPassed',
  },
  {
    title: 'Challenge',
    dataIndex: 'challenge',
  },
];


const FinishedList = (props) => {
  return (
    <div>
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">Finished Challenges</h3>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
            <p className="font-size-4 mb-0 mr-6 py-2">Filter by Company:</p>
            <div className="h-px-48">
              <div className="pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2">
                <ReactSelect />
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

export default FinishedList;
