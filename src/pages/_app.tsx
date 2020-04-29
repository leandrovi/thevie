import React from 'react';
import App from 'next/app';

import { PageTransition } from 'next-page-transitions';

import GlobalStyle from '@/styles/global';

import Header from '@/components/Header';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }): Promise<any> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <PageTransition
          skipInitialTransition
          timeout={300}
          classNames="page-transition"
        >
          <>
            <Header />
            <Component {...pageProps} key={router.route} />
            <GlobalStyle />
          </>
        </PageTransition>

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 300ms, transform 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </>
    );
  }
}
