import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainMuiLayout from '../layouts/MainMuiLayout';
import '../styles/normalize';
import HtmlEditor from '../components/forms/HtmlEditor/HtmlEditor';

const app_container = document.getElementById('app');

render(
  <Provider store={store}>
    <MainMuiLayout>
      <HtmlEditor />
    </MainMuiLayout>
  </Provider>,
  app_container
);
