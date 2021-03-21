import React from 'react';

import { styled } from '../utils/css';

const headerContainer = styled.cssStyle`
  background-color: cyan;
  height: 50px;
`;

export const Header = () => {
  return <div style={headerContainer}>Header</div>;
};
