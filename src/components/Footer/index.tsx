import React from 'react';
import { NextComponentType } from 'next';
import Link from 'next/link';

import { Container } from './styles';

const Footer: NextComponentType = () => {
  return (
    <Container>
      <a href="https://zeit.co" target="_blank" rel="noopener noreferrer">
        Powered by leandrovi
      </a>

      <Link href="/">
        <a>Voltar para home</a>
      </Link>
    </Container>
  );
};

export default Footer;
