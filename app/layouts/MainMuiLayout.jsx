import React from 'react';
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import mainMuiTheme from '../styles/mainMuiTheme';
import Navigation from '../components/Navigation/Navigation';
import AbstractBackground from '../assets/abstract-banner.jpg';

const MainMuiLayout = ({ children, className }) => (
  <MuiThemeProvider theme={mainMuiTheme}>
    <div className={className}>
      <Navigation />
      {children}
    </div>
  </MuiThemeProvider>
);

export default styled(MainMuiLayout)`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${AbstractBackground});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
