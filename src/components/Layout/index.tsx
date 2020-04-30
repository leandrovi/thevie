import React, { useRef, useEffect, useState, useCallback } from 'react';
import { NextComponentType } from 'next';

// import { useScroll } from '@/hooks/useScroll';

import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Container } from './styles';

interface ContainerDimensions {
  width: number;
  height: number;
}

const Layout: NextComponentType = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollX, scrollY, scrollDirection } = useScroll();

  const [containerDimensions, setContainerDimensions] = useState<
    ContainerDimensions
  >({ width: 1000, height: 1000 });

  const updateDimensions = useCallback((width, height) => {
    setContainerDimensions({
      width,
      height,
    });
  }, []);

  useEffect(() => {
    const containerEl = containerRef.current;

    window.onresize = () => {
      updateDimensions(containerEl.clientWidth, containerEl.clientHeight);
    };
  }, [updateDimensions]);

  return (
    <>
      <Meta />
      {/* <FixedContainer dimensions={containerDimensions}> */}
      <Container ref={containerRef} position={0}>
        <Header bgHeight={200} hideNav={false} />

        {children}

        <Footer />
      </Container>
      {/* </FixedContainer> */}
    </>
  );
};

export default Layout;
