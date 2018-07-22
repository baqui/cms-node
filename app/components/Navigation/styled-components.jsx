import React from 'react';
import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 22;
  height: ${p => (p.height ? p.height : '56px')};
  background: ${p => (p.background ? p.background : 'white')};
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.32);
`;

const Brand = ({ className, logoUrl, link }) => (
  <div className={className}>
    <a href={link} title="brand-link">
      <img src={logoUrl} alt="logo" />
    </a>
  </div>
);

export const BrandLogo = styled(Brand)`
  display: inline-block;
  height: 100%;
  a {
    display: inline-block;
    height: 100%;
  }
  img {
    display: inline-block;
    height: 100%;
    width: auto;
    box-sizing: border-box;
    padding: 10px 25px;
  }
`;
