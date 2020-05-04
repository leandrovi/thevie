import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTransition } from 'react-spring';

import links from '@/utils/navigationLinks';

import { Container, Nav, Line, Slogan } from './styles';

interface MobileMenuProps {
  showMenu: boolean;
  handleMenuLinkClick(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  showMenu,
  handleMenuLinkClick,
}) => {
  const router = useRouter();

  const menuWithTransition = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleLinkClick = useCallback(
    (e, path) => {
      e.preventDefault();

      router.pathname === path ? handleMenuLinkClick() : router.push(path);
    },
    [handleMenuLinkClick, router],
  );

  return (
    <>
      {menuWithTransition.map(
        ({ item, key, props }) =>
          item && (
            <Container key={key} style={props}>
              <Nav>
                {links.map(link => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={e => handleLinkClick(e, link.path)}
                  >
                    {link.title}
                    {router.pathname === link.path && <Line />}
                  </a>
                ))}
              </Nav>

              <Slogan>
                <div>
                  <p>Wish.</p>
                  <p>We make it happen.</p>
                </div>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/instagram.svg" alt="Instagram Icon" />
                </a>
              </Slogan>
            </Container>
          ),
      )}
    </>
  );
};

export default MobileMenu;
