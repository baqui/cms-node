import React from 'react';
import styled from 'styled-components';

export const Panel = styled.div`
  width: 600px;
  min-height: 100%;
  background-color: white;
  position: relative;
  padding: 40px 70px;
  box-sizing: border-box;
`;

export const Menu = styled.div`
  & > * {
    display: inline-block;
  }

  & > * + * {
    margin-left: 15px;
  }
`;

export const Toolbar = styled(Menu)`
  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
`;

export const Button = styled.span`
  cursor: pointer;
  color: ${p =>
    p.reversed ? (p.active ? 'white' : '#aaa') : p.active ? 'black' : '#ccc'};
`;

const IconComponent = ({ className, iconName, ...rest }) => (
  <i className={`material-icons ${className}`} {...rest} />
);

export const Icon = styled(IconComponent)`
  font-size: 18px;
  vertical-align: text-bottom;
`;

export const Spacer = styled.div`
  height: 20px;
  background-color: #eee;
  margin: 20px -20px;
`;
