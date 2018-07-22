import React from 'react';
import styled from 'styled-components';
import { NavBar } from './styled-components';

const Navigation = ({ className, children }) => (
  <div className={className}>
    <NavBar>Navigaion</NavBar>
    {children}
  </div>
);

export default styled(Navigation)`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid crimson;
`;
