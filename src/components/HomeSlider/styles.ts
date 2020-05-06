import styled from 'styled-components';

import zIndex from '@/styles/zIndex';
import palette from '@/styles/palette';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderWrapper = styled.div`
  width: 100%;

  .slick-slider .slick-list .slick-track .slick-active {
    z-index: ${zIndex.homeSlider.activeImage};
  }

  .slick-slider .slick-dots {
    bottom: 2.5%;

    li {
      & + li {
        margin-left: 10px;
      }
    }

    li.slick-active {
      div {
        background: ${palette.grayShades.white};
      }
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;

  > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    opacity: 0.5;
  }
`;

export const Title = styled.div`
  width: 104%;
  position: absolute;
  top: 50%;
  left: -2%;
  transform: translateY(-50%);

  img {
    object-fit: contain;
  }
`;

export const Indicators = styled.div`
  width: 30px;
  height: 5px;
  border: 1px solid ${palette.grayShades.white};
  background: transparent;
  position: relative;

  &.slick-active {
    background: ${palette.grayShades.white};
  }

  &:hover,
  &:active {
    cursor: pointer;
  }

  p {
    opacity: 0;
    position: absolute;
    bottom: 0;
  }
`;
