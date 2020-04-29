import React from 'react';
import { NextComponentType } from 'next';

import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Container } from './styles';

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Meta />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
