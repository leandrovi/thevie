import React from 'react';
import { NextComponentType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import ProjectThumb from '@/components/ProjectThumb';

import projects from '@/utils/projectsResume';

// Styles
const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const Work: NextComponentType = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe - Work</title>
      </Head>

      <Main>
        {projects.map(project => (
          <ProjectThumb
            key={project.id}
            name={project.name}
            title={project.titleImgSrc}
            thumb={project.thumbImgSrc}
            href={project.projectHref}
          />
        ))}
      </Main>
    </Layout>
  </>
);

Work.getInitialProps = async () => {
  return { transitionType: 'fade' };
};

export default Work;
