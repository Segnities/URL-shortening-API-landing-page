/* eslint-disable react/prop-types  */
/* eslint-disable react/jsx-props-no-spreading */
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import AuthStateLayout from '../components/AuthStateLayout';
import UrlsLayout from '../components/UrlsLayout';

import {store} from '../store';

import '../styles/globals.css';

export default function App({
  Component,
  pageProps
}) {
  return (
    <StrictMode>
      <Provider store={store}>
      <AuthStateLayout>
        <UrlsLayout>
        <Component {...pageProps} />
        </UrlsLayout>
      </AuthStateLayout>
      </Provider>
    </StrictMode>
  );
}
