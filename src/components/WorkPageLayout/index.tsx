import React from 'react';

import { ProjectProps } from '@/utils/projects/interfaces';

import { Main } from './styles';

interface WorkPageProps {
  project: ProjectProps;
}

const WorkPageLayout: React.FC<WorkPageProps> = ({ project }) => {
  return (
    <Main>
      <h1>{project.name}</h1>
      <p>Opa</p>
    </Main>
  );
};

export default WorkPageLayout;
