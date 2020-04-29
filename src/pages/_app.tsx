import React from 'react';
import App, { AppProps } from 'next/app';
import { PageTransition } from 'next-page-transitions';

import GlobalStyle from '@/styles/global';

import InitialAnimation from '@/components/InitialAnimation';

interface MyAppState {
  loading: boolean;
}

export default class MyApp extends App<AppProps, {}, MyAppState> {
  static async getInitialProps({ Component, ctx }): Promise<any> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props: AppProps) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    const { loading } = this.state;

    return (
      <>
        <GlobalStyle />

        <PageTransition timeout={1000} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>

        <InitialAnimation visible={loading} />

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
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
