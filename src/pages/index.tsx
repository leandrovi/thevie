import React from 'react';
import { NextComponentType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import HomeSlider from '@/components/HomeSlider';

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Home: NextComponentType = () => (
  <>
    <Layout hideFooter>
      <Head>
        <title>TheVÏe</title>
      </Head>

      <Main>
        <HomeSlider />
      </Main>
    </Layout>
  </>
);

Home.getInitialProps = async () => {
  return { transitionType: 'fade' };
};

export default Home;
