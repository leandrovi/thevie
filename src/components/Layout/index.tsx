import React, { useRef, useState, useCallback } from 'react';

// import { useScroll } from '@/hooks/useScroll';

import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';

import { Container } from './styles';

interface LayoutProps {
  hideFooter?: boolean;
}

// interface ContainerDimensions {
//   width: number;
//   height: number;
// }

const Layout: React.FC<LayoutProps> = ({ hideFooter = false, children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = useCallback((open: boolean) => {
    setShowMenu(open);
  }, []);

  const handleRouteChange = useCallback(() => {
    toggleMenu(false);
  }, [toggleMenu]);

  /**
   * Smooth scroll functions
   */
  // const [containerDimensions, setContainerDimensions] = useState<
  //   ContainerDimensions
  // >({ width: 1000, height: 1000 });

  // const updateDimensions = useCallback((width, height) => {
  //   setContainerDimensions({
  //     width,
  //     height,
  //   });
  // }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollX, scrollY, scrollDirection } = useScroll();

  // useEffect(() => {
  //   const containerEl = containerRef.current;

  //   window.onresize = () => {
  //     updateDimensions(containerEl.clientWidth, containerEl.clientHeight);
  //   };
  // }, [updateDimensions]);

  return (
    <>
      <Meta />
      {/* <FixedContainer dimensions={containerDimensions}> */}
      <Container ref={containerRef} position={0}>
        {/* {showMenu && ( */}
        <MobileMenu
          showMenu={showMenu}
          handleMenuLinkClick={handleRouteChange}
        />
        {/* )} */}

        <Header
          bgHeight={200}
          hideNav={false}
          menuOpen={showMenu}
          toggleMenuComponent={open => toggleMenu(open)}
        />

        {children}

        {!hideFooter && <Footer />}
      </Container>
      {/* </FixedContainer> */}
    </>
  );
};

export default Layout;
