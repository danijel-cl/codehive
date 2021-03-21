import React from 'react';

import { styled } from '../utils/css';

const errorContainerStyle = styled.cssStyle`
  margin-top: 20px;
  height: 35px;
  background-color: white;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
`;

const errorMessageTextStyle = styled.cssStyle`
  margin-left: 10px;
  color: red;
  font-family: 'Roboto', sans-serif;
`;

type IProps = {
  message: string;
};

export const SubmitError = ({ message }: IProps) => {
  return (
    <div style={errorContainerStyle}>
      <div style={errorMessageTextStyle}>{message}</div>
    </div>
  );
};
