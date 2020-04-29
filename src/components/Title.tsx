import React from 'react';

import palette from '@/styles/palette';

const Title: React.FC<{}> = () => (
  <>
    <h1 className="title">
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
    <style jsx>
      {`
        .title a {
          color: ${palette.grayShades.white};
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}
    </style>
  </>
);

export default Title;
