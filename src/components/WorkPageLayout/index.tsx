import React from 'react';

import { ProjectProps } from '@/utils/projects/interfaces';

import ProductGallery from './ProductGallery';

import {
  Main,
  Header,
  HeaderImg,
  HeaderTitle,
  FixedBackgroundTitle,
  DescriptionSection,
  GallerySection,
} from './styles';

interface WorkPageProps {
  project: ProjectProps;
}

const WorkPageLayout: React.FC<WorkPageProps> = ({ project }) => {
  return (
    <Main>
      <FixedBackgroundTitle>
        <img src={project.titleImgSrc} alt={project.name} />
      </FixedBackgroundTitle>

      <Header>
        <HeaderImg>
          <img src={project.thumbImgSrc} alt={project.name} />
        </HeaderImg>

        <HeaderTitle>
          <img src={project.titleImgSrc} alt={project.name} />
        </HeaderTitle>
      </Header>

      <DescriptionSection>
        <h4>About</h4>

        <div>
          <p>{project.textA}</p>
          <p>{project.textB}</p>
        </div>
      </DescriptionSection>

      <GallerySection>
        <ProductGallery images={project.imagesSrcs} />
      </GallerySection>
    </Main>
  );
};

export default WorkPageLayout;
