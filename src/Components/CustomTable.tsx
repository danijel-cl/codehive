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
  .ant-table-thead {
    background-color:rgba(0, 176, 116, 0.7);
    color: white;
    height: 40px;
  }

  .ant-table-thead tr {
    height: 45px;
    font-weight: 600;
  }

  .ant-table-tbody tr {
    height: 60px;
    font-weight: 600;
  }

  .ant-table-tbody tr:nth-of-type(odd) {
    background-color: #F4F5F8;
  }

  .ant-table-tbody tr:first-of-type {
    height: 0 !important;
  }
  .ant-table-thead tr th:first-of-type {
    padding-left: 30px;
  }

  .ant-table-tbody tr td:first-of-type {
    padding-left: 30px;
  }
  .ant-pagination {
    display: none;
  }
  }
`;

export const CustomTable = ({dataSource, columns}: IProps) => {
  return (
    <div className={tableClassname}>
      <Table dataSource={dataSource} columns={columns} scroll={{ x: 1300 }} />
    </div>
  );
}