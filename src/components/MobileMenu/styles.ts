import styled from 'styled-components';
import { animated } from 'react-spring';

import zIndex from '@/styles/zIndex';
import device from '@/styles/device';
import palette from '@/styles/palette';
import headerHeights from '@/styles/headerHeights';

export const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex.mobileMenu};

  padding: 0px 28px;
  width: 100%;
  min-height: 100vh;
  max-height: 800px;
  background: ${palette.grayShades.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  flex: 1;
  padding-top: ${headerHeights.mobile}px;
  background: ${palette.grayShades.black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  a {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 30px;
    position: relative;

    & + a {
      margin-top: 45px;
    }
  }
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: ${palette.grayShades.white};

  position: absolute;
  bottom: -20%;
`;

export const Slogan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 34px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      font-weight: bold;
      font-size: 11px;
      color: ${palette.grayShades.mediumGray};
    }
  }

  a {
    width: 28px;
  }
`;
