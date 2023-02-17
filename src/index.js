import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import GlobalStyle from './globalStyle';
import { Fragment } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <GlobalStyle/>
    <Router/>
  </Fragment>
);
