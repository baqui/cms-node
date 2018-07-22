import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import mainMuiTheme from '../styles/mainMuiTheme';
import Navigation from '../components/Navigation/Navigation';

const MainMuiLayout = ({ children }) => (
  <MuiThemeProvider theme={mainMuiTheme}>
    <Navigation />
    {children}
  </MuiThemeProvider>
);

export default MainMuiLayout;
