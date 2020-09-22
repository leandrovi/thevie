import React, { useRef, useState, useCallback } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';

import { ParallaxContainer, Container } from './styles';

interface LayoutProps {
  hideFooter?: boolean;
  removePadding?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  hideFooter = false,
  removePadding = false,
  children,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = useCallback((open: boolean) => {
    setShowMenu(open);
  }, []);

  const handleRouteChange = useCallback(() => {
    toggleMenu(false);
  }, [toggleMenu]);

  return (
    <>
      <Meta />

      <ParallaxContainer id="parallax-container" pages={5}>
        <ParallaxLayer offset={0} speed={3}>
          <Container removePadding={removePadding}>
            <MobileMenu
              showMenu={showMenu}
              handleMenuLinkClick={handleRouteChange}
            />

            <Header
              bgHeight={200}
              hideNav={false}
              menuOpen={showMenu}
              toggleMenuComponent={open => toggleMenu(open)}
            />
            {children}

            {!hideFooter && <Footer />}
          </Container>
        </ParallaxLayer>
      </ParallaxContainer>
    </>
  );
};

export default Layout;
