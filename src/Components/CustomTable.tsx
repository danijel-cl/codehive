import { Table } from "antd";
import React from "react";
import { styled } from "../utils/css";

type IProps = {
  dataSource: any;
  columns: any;
}

const tableClassname = styled.cssClassName`
  .ant-table-wrapper {
    border-radius: 6px;
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

  .ant-table {
    border-bottom: 3px inset;
  }

  .ant-table-thead th {
    background-color:#9c2906;
    color: #F8F8F8;
    height: 40px;
    font-size: 17px;
    font-weight: 600;
  }

  .ant-table-thead tr {
    height: 70px;
  }

  td {
    color: #585858;
  }

  .ant-table-tbody tr {
    height: 80px;
    font-weight: 600;
    font-size:16px;
  }

  .ant-table-tbody > tr:hover > td {
    background-color:rgba(191, 111, 111, 0.4);
    color: #202020;
  }

  .ant-table-tbody tr:nth-of-type(odd) {
    background-color: #E5E5E8;
  }

  .ant-table-tbody tr:first-of-type {
    height: 0 !important;
  }
  .ant-table-thead tr th:first-of-type {
    padding-left: 50px;
  }

  .ant-table-tbody tr td:first-of-type {
    padding-left: 50px;
  }
  .ant-pagination {
    display: none;
  }
  }
`;

export const CustomTable = ({dataSource, columns}: IProps) => {
  return (
    <div className={tableClassname}>
      <Table dataSource={dataSource} columns={columns} scroll={{ x: 1000 }} />
    </div>
  );
}
