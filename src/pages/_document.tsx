import React from 'react';
import Document, {
  DocumentProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// import {
//   DEV, FB_TRACKING_ID, SENTRY_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE,
//   SITE_NAME, SITE_TITLE
// } from '../src/constants/env'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const sheet = new ServerStyleSheet();
    let page;

    try {
      page = ctx.renderPage(App => props =>
        sheet.collectStyles(<App {...props} />),
      );

      const initialProps = await Document.getInitialProps(ctx);

      const styleTags = sheet.getStyleElement();

      return {
        ...page,
        ...initialProps,
        styles: styleTags,
      };
    } finally {
      sheet.seal();
    }
  }

  render(): React.ReactElement {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
