import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import palette from '@/styles/palette';
import zIndex from '@/styles/zIndex';
import device from '@/styles/device';
import headerHeights from '@/styles/headerHeights';

interface ContainerProps {
  showBg: boolean;
}

interface MobileLogoWrapperProps {
  menuOpen: boolean;
}

interface MenuButtonProps {
  open: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  height: ${headerHeights.mobile}px;
  padding: 15px 28px;
  z-index: ${zIndex.header};
  background: transparent;
  transition: background 0.2s ease-in-out;

  ${props =>
    props.showBg &&
    css`
      background: ${palette.grayShades.black};
    `}

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop} {
    height: ${headerHeights.desktops}px;
    padding: 20px 35px;
  }
`;

/**
 * Mobile Components
 */

export const MobileLogoWrapper = styled.div<MobileLogoWrapperProps>`
  img {
    width: 90px;

    ${props =>
      props.menuOpen &&
      css`
        opacity: 0.25;
      `}
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const MenuButton = styled.button<MenuButtonProps>`
  width: 27px;
  height: 8px;
  background: transparent;
  border: none;
  z-index: ${zIndex.default};
  transition: z-index 0.4s;

  &:hover,
  &:active {
    span span.top {
      width: 50%;
    }

    span span.bottom {
      width: 100%;
    }
  }

  > span {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    span {
      display: block;
      height: 1px;
      background: ${palette.grayShades.white};
      transition:
        width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    span.top {
      width: 100%;
    }

    span.bottom {
      width: 50%;
    }
  }

  ${props =>
    props.open &&
    css`
      z-index: ${zIndex.buttonMenuActive};

      > span {
        opacity: 0.3;

        span.top {
          width: 100% !important;
          transform-origin: center;
          transform: translate(0px, 3.5px) rotate(45deg);
        }

        span.bottom {
          width: 100% !important;
          transform-origin: center;
          transform: translate(0px, -3.5px) rotate(-45deg);
        }
      }
    `}

  @media ${device.laptop} {
    display: none;
  }
`;

/**
 * Desktop Components
 */

export const Nav = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: ${palette.grayShades.white};
      position: relative;

      & + a {
        margin-left: 70px;
      }

      img {
        width: 120px;
        margin-right: 50px;
      }
    }
  }
`;

export const Slogan = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    p {
      font-weight: bold;
    }
  }
`;

export const Line = styled(animated.span)`
  display: none;

  @media ${device.laptop} {
    display: block;
    height: 1px;
    background: ${palette.grayShades.white};

    position: absolute;
    top: calc(100% + 5px);
  }
`;
