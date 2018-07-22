import React from 'react';
import styled from 'styled-components';
import { NavBar, BrandLogo } from './styled-components';
import logoUrl from '../../assets/logo.png';

const Navigation = ({ className }) => (
  <div className={className}>
    <NavBar>
      <BrandLogo logoUrl={logoUrl} link="google.com" />
    </NavBar>
  </div>
);

export default styled(Navigation)`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid crimson;
`;
