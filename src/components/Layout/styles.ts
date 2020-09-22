import styled, { css } from 'styled-components';
import { Parallax } from '@react-spring/parallax';

import device from '@/styles/device';
import headerHeights from '@/styles/headerHeights';

interface ContainerProps {
  removePadding: boolean;
}

export const ParallaxContainer = styled(Parallax)`
  /* overflow-y: hidden !important; */
`;

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-top: ${headerHeights.mobile}px;
  padding-bottom: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props =>
    props.removePadding &&
    css`
      padding: 0px;
    `}

  transition: transform ease-in-out;

  @media ${device.laptop} {
    padding-top: ${headerHeights.desktops}px;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 0px;
  }
`;
