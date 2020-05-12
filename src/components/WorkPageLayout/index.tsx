import React from 'react';

import { ProjectProps } from '@/utils/projects/interfaces';

import {
  Main,
  Header,
  TitleImage,
  DescriptionSection,
  GallerySection,
} from './styles';

interface WorkPageProps {
  project: ProjectProps;
}

const WorkPageLayout: React.FC<WorkPageProps> = ({ project }) => {
  return (
    <Main>
      <TitleImage>
        <img src={project.titleImgSrc} alt={project.name} />
      </TitleImage>

      <Header>
        <img src={project.thumbImgSrc} alt={project.name} />
      </Header>

      <DescriptionSection>
        <h4>About</h4>

        <div>
          <p>{project.textA}</p>
          <p>{project.textB}</p>
        </div>
      </DescriptionSection>
    </Main>
  );
};

export default WorkPageLayout;
