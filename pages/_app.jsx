import { StrictMode } from 'react';

import '../styles/globals.css';

import "animate.css";


export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}
