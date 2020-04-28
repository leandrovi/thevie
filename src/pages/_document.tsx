import React from 'react';
import Document, {
  DocumentProps,
  DocumentContext,
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
      <html lang="en-US">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          {/* <meta property="og:site_name" content={SITE_NAME}/>
          <meta property="og:title" content={SITE_TITLE}/>
          <meta property="og:description" content={SITE_DESCRIPTION}/>
          <meta property="og:image" content={SITE_IMAGE}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content={SITE_NAME}/>
          <meta name="twitter:title" content={SITE_TITLE}/>
          <meta name="twitter:description" content={SITE_DESCRIPTION}/>
          <meta property="twitter:image" content={SITE_IMAGE}/> */}
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,600&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" type="image/png" href="/favicon.png" />

          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
