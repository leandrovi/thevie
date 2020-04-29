import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

import palette from '@/styles/palette';

export const Container = styled(animated.div)`
  background: ${palette.grayShades.black};
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoFadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Logo = styled.img`
  width: 100px;
  animation: ${logoFadeInOut} 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`;
