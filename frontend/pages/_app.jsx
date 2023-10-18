/* eslint-disable react/prop-types  */
/* eslint-disable react/jsx-props-no-spreading */
import { StrictMode } from 'react';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}
