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
      <img src={thumb} alt={name} />

      <Title>
        <img src={title} alt={name} />
      </Title>

      <LinkWrapper>
        <ProjectArrowLink direction="right" href={href} />
      </LinkWrapper>
    </Container>
  );
};

export default ProjectThumb;
