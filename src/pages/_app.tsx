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

        {!loading && (
          <PageTransition
            timeout={1000}
            classNames={`page-transition-${pageProps.transitionType}`}
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        )}

        <InitialAnimation visible={loading} />

        <style jsx global>{`
          .page-transition-fade-enter {
            opacity: 0;
          }
          .page-transition-fade-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-fade-exit {
            opacity: 1;
          }
          .page-transition-fade-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }

          .transition-slide-enter {
            transform: translateX(-100%);
          }
          .transition-slide-enter-active {
            transform: translateX(0);
            transition: transform 500ms ease-out;
          }
          .transition-slide-exit {
            transform: translateX(0);
          }
          .transition-slide-exit-active {
            transform: translateX(100%);
            transition: transform 500ms ease-in;
          }
        `}</style>
      </>
    );
  }
}
