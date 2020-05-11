import React from 'react';
import { NextComponentType } from 'next';
import Head from 'next/head';

import Layout from '@/components/Layout';
import WorkPageLayout from '@/components/WorkPageLayout';

import project from '@/utils/projects/lor';

const Lor: NextComponentType = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe | {project.name}</title>
      </Head>

      <WorkPageLayout project={project} />
    </Layout>
  </>
);

Lor.getInitialProps = async () => {
  return { transitionType: 'fade' };
};

export default Lor;
