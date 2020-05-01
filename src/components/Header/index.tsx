import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTransition } from 'react-spring';

import { useScroll } from '@/hooks/useScroll';

import {
  Container,
  MobileLogoWrapper,
  MenuButton,
  Nav,
  Slogan,
  Line,
} from './styles';

interface HeaderProps {
  bgHeight: number;
  hideNav: boolean;
}

const Header: React.FC<HeaderProps> = ({ bgHeight, hideNav }) => {
  const [showBg, setShowBg] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll();

  const toggleBackground = useCallback(() => {
    if (scrollY > bgHeight !== !!showBg) {
      if (scrollY < bgHeight) setShowBg(false);

      if (scrollY >= bgHeight) setShowBg(true);
    }
  }, [bgHeight, showBg, scrollY]);

  useEffect(() => {
    toggleBackground();
  }, [toggleBackground]);

  const linesWithTransition = useTransition(router.pathname, null, {
    from: { width: '0%', opacity: 0, left: '50%' },
    enter: { width: '100%', opacity: 1, left: '0%' },
    leave: { width: '0%', opacity: 0, left: '50%' },
  });

  const toggleMenu = useCallback(() => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  }, [menuIsOpen]);

  return (
    <Container showBg={showBg}>
      {/* Mobile Components */}
      <MobileLogoWrapper>
        <img src="/icons/logo.svg" alt="TheVïe" />
      </MobileLogoWrapper>

      <MenuButton onClick={toggleMenu} open={!!menuIsOpen} type="button">
        <span>
          <span className="top" />
          <span className="bottom" />
        </span>
      </MenuButton>

      {/* Desktop Components */}
      <Nav>
        <Link href="/">
          <a>
            <img src="/icons/logo.svg" alt="TheVïe" />
          </a>
        </Link>

        {!hideNav && (
          <>
            <Link href="/work">
              <a>
                Work
                {linesWithTransition.map(
                  ({ item, key, props }) =>
                    item === '/work' && <Line key={key} style={props} />,
                )}
              </a>
            </Link>
            <Link href="/about">
              <a>
                Who we are?
                {linesWithTransition.map(
                  ({ item, key, props }) =>
                    item === '/about' && <Line key={key} style={props} />,
                )}
              </a>
            </Link>
            <Link href="/sayhello">
              <a>
                Get in touch
                {linesWithTransition.map(
                  ({ item, key, props }) =>
                    item === '/sayhello' && <Line key={key} style={props} />,
                )}
              </a>
            </Link>
          </>
        )}
      </Nav>

      <Slogan>
        <p>Wish.</p>
        <p>We make it happen.</p>
      </Slogan>
    </Container>
  );
};

export default Header;
