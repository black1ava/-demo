import React from 'react';
import { render } from 'react-dom';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import App from './App';
import './App.css'

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);