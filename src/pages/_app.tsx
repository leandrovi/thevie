import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '@/styles/global';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
