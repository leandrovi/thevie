import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import palette from '@/styles/palette';

interface ContainerProps {
  showBg: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
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

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
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
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  p {
    font-weight: bold;
  }
`;

export const Line = styled(animated.span)`
  display: block;
  height: 1px;
  background: #fff;

  position: absolute;
  top: calc(100% + 5px);
`;
