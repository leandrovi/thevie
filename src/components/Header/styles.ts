import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import palette from '@/styles/palette';
import zIndex from '@/styles/zIndex';
import device from '@/styles/device';

interface ContainerProps {
  showBg: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;

  @media ${device.laptop} {
    height: 90px;
    padding: 20px 35px;
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
    z-index: ${zIndex.header};

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media ${device.tabletLandscape} {
    display: none;
  }
`;

export const Nav = styled.nav`
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

  @media ${device.tabletLandscape} {
    display: none;
  }
`;

export const Slogan = styled.div`
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
  @media ${device.laptop} {
    display: block;
    height: 1px;
    background: #fff;

    position: absolute;
    top: calc(100% + 5px);
  }

  @media ${device.tabletLandscape} {
    display: none;
  }
`;
