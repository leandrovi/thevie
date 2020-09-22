import styled from 'styled-components';

import palette from '@/styles/palette';
import zIndex from '@/styles/zIndex';
import device from '@/styles/device';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
`;

export const FixedBackgroundTitle = styled.div`
  width: 100%;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: ${zIndex.workPageBackground};

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: calc(-13% + 30px);
  background: ${palette.grayShades.black};

  @media ${device.laptop} {
    width: 100%;
    height: 300px;
  }
`;

export const HeaderImg = styled.div`
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    opacity: 0.5;
  }
`;

export const HeaderTitle = styled.div`
  width: 100%;
  padding-top: 24.3%;
  transform: translateY(-55%);
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    object-fit: contain;
  }
`;

export const DescriptionSection = styled.section`
  width: 100%;
  padding: 0px 30px 15px;
  margin: 15px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${palette.grayShades.black};
  z-index: ${zIndex.workPage.content};

  h4 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    flex: 1;
  }

  p {
    font-size: 13px;
    line-height: 16px;
    font-weight: 300;
    max-width: 180px;

    & + p {
      margin-top: 20px;
    }
  }
`;

export const GallerySection = styled.section`
  width: 100%;
  position: relative;
  z-index: ${zIndex.workPage.content};
`;
