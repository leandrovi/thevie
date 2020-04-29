import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import Title from '@/components/Title';

// Styles
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC<{}> = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe</title>
      </Head>

      <Main>
        <Title />
      </Main>
    </Layout>
  </>
);

export default Home;
