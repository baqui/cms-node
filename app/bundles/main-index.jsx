import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainMuiLayout from '../layouts/MainMuiLayout';
import '../styles/normalize';
import LoginPanel from '../containers/LoginPanel/LoginPanel';

const app_container = document.getElementById('app');

render(
  <Provider store={store}>
    <MainMuiLayout>
      <LoginPanel />
    </MainMuiLayout>
  </Provider>,
  app_container
);
