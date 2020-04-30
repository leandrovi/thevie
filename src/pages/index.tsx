import React from 'react';
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

  max-width: 900px;
`;

const Home: React.FC<{}> = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe</title>
      </Head>

      <Main>
        <h1>Home page</h1>
      </Main>
    </Layout>
  </>
);

export default Home;
