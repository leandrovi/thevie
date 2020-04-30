import React from 'react';
import Head from 'next/head';

import Layout from '@/components/Layout';
import HomeSlider from '@/components/HomeSlider';

const Home: React.FC<{}> = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe</title>
      </Head>

      <main>
        <HomeSlider />
      </main>
    </Layout>
  </>
);

export default Home;
