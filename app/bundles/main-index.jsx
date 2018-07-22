import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainMuiLayout from '../layouts/MainMuiLayout.jsx';

const app_container = document.getElementById('app');

render(
  <Provider store={store}>
    <MainMuiLayout>Bundle content</MainMuiLayout>
  </Provider>,
  app_container
);
