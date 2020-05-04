import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTransition } from 'react-spring';

import { useScroll } from '@/hooks/useScroll';

import links from '@/utils/navigationLinks';

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
  menuOpen: boolean;
  toggleMenuComponent(menuOpen: boolean): void;
}

const Header: React.FC<HeaderProps> = ({
  bgHeight,
  hideNav,
  menuOpen,
  toggleMenuComponent,
}) => {
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
    setMenuIsOpen(menuOpen);
  }, [toggleBackground, menuOpen]);

  const linesWithTransition = useTransition(router.pathname, null, {
    from: { width: '0%', opacity: 0, left: '50%' },
    enter: { width: '100%', opacity: 1, left: '0%' },
    leave: { width: '0%', opacity: 0, left: '50%' },
  });

  const toggleMenu = useCallback(
    (open: boolean) => {
      open ? setMenuIsOpen(false) : setMenuIsOpen(true);

      toggleMenuComponent(!open);
    },
    [toggleMenuComponent],
  );

  return (
    <Container showBg={showBg}>
      {/* Mobile Components */}
      <MobileLogoWrapper menuOpen={menuIsOpen}>
        <Link href="/">
          <a>
            <img src="/icons/logo.svg" alt="TheVïe" />
          </a>
        </Link>
      </MobileLogoWrapper>

      <MenuButton
        onClick={() => toggleMenu(menuIsOpen)}
        open={!!menuIsOpen}
        type="button"
      >
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

        {!hideNav &&
          links.map(link => (
            <Link key={link.path} href={link.path}>
              <a>
                {link.title}
                {linesWithTransition.map(
                  ({ item, key, props }) =>
                    item === link.path && <Line key={key} style={props} />,
                )}
              </a>
            </Link>
          ))}
      </Nav>

      <Slogan>
        <p>Wish.</p>
        <p>We make it happen.</p>
      </Slogan>
    </Container>
  );
};

export default Header;
