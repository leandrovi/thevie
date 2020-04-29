import React from 'react';
import { NextComponentType } from 'next';
import Link from 'next/link';

import { Container } from './styles';

const Header: NextComponentType = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/work/fusics">
            <a>Fusics</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
