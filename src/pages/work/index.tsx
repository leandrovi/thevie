import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@/components/Layout';

// Styles
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Work: React.FC<{}> = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe - Work</title>
      </Head>

      <Main>
        <h1>Work Page</h1>

        <ul>
          <li>
            <Link href="/work/fusics">
              <a>Fusics</a>
            </Link>
          </li>
        </ul>
      </Main>
    </Layout>
  </>
);

export default Work;
