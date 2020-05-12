import React from 'react';
import { NextComponentType } from 'next';
import Head from 'next/head';

import Layout from '@/components/Layout';
import WorkPageLayout from '@/components/WorkPageLayout';

import project from '@/utils/projects/fusics';

const Fusics: NextComponentType = () => (
  <>
    <Layout removePadding>
      <Head>
        <title>TheVÏe | {project.name}</title>
      </Head>

      <WorkPageLayout project={project} />
    </Layout>
  </>
);

Fusics.getInitialProps = async () => {
  return { transitionType: 'fade' };
};

export default Fusics;
