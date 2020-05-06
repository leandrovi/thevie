import React from 'react';
import { NextComponentType } from 'next';
import Head from 'next/head';
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

const Fusics: NextComponentType = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe - Fusics</title>
      </Head>

      <Main>
        <h1>Fusics Page</h1>
      </Main>
    </Layout>
  </>
);

Fusics.getInitialProps = async () => {
  return { transitionType: 'fade' };
};

export default Fusics;
