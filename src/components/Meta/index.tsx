import React from 'react';
import { NextComponentType } from 'next';
import Head from 'next/head';

// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

import palette from '@/styles/palette';

const Meta: NextComponentType = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      />

      {/* <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME}/>
      <meta property="og:title" content={SITE_TITLE}/>
      <meta property="og:description" content={SITE_DESCRIPTION}/>
      <meta property="og:image" content={SITE_IMAGE}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content={SITE_NAME}/>
      <meta name="twitter:title" content={SITE_TITLE}/>
      <meta name="twitter:description" content={SITE_DESCRIPTION}/>
      <meta property="twitter:image" content={SITE_IMAGE}/>

      <meta name="msapplication-TileColor" content=`${palette.grayShades.black}` />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content=`${palette.grayShades.black}` />

      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta
        name="format-detection"
        content="telephone=no, address=no, email=no"
      />

      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color=`${palette.grayShades.black}`
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,600&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
  );
};
export default Meta;
