import React from 'react';

import ProjectArrowLink from '@/components/ProjectArrowLink';

import { Container, Title, LinkWrapper } from './styles';

interface ProjectThumbProps {
  name: string;
  title: string;
  thumb: string;
  href: string;
}

const ProjectThumb: React.FC<ProjectThumbProps> = ({
  name,
  title,
  thumb,
  href,
}) => {
  return (
    <Container>
      <Title>
        <img src={title} alt={name} />
      </Title>

      <img src={thumb} alt={name} />

      <LinkWrapper>
        <ProjectArrowLink direction="right" href={href} />
      </LinkWrapper>
    </Container>
  );
};

export default ProjectThumb;
