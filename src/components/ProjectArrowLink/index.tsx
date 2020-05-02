import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface ProjectArrowLinkProps {
  href: string;
  direction: 'left' | 'right';
  text?: string;
}

const ProjectArrowLink: React.FC<ProjectArrowLinkProps> = ({
  href,
  direction,
  text = 'View project',
}) => {
  return (
    <Container direction={direction}>
      <Link href={href}>
        <a>{text}</a>
      </Link>

      <div>
        <span />
        <span />
      </div>
    </Container>
  );
};

export default ProjectArrowLink;
