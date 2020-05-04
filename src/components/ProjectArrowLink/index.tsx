import React from 'react';
import Link from 'next/link';

import { Container, Wrapper } from './styles';

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
    <Container>
      <Link href={href}>
        <a>
          <Wrapper direction={direction}>
            <p>{text}</p>

            <div>
              <span />
              <span />
            </div>
          </Wrapper>
        </a>
      </Link>
    </Container>
  );
};

export default ProjectArrowLink;
