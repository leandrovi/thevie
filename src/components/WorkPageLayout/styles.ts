import styled from 'styled-components';

import palette from '@/styles/palette';
import zIndex from '@/styles/zIndex';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  height: 300px;
  background: ${palette.grayShades.black};
  z-index: ${zIndex.workPage.header};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.5;
  }
`;

export const TitleImage = styled.div`
  width: 100%;
  position: fixed;
  top: 256px;
  left: 0;
  z-index: ${zIndex.workPage.title};

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const DescriptionSection = styled.section`
  width: 100%;
  margin-top: 55px;
  padding: 30px;
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
  padding: 50px 30px 30px;
  z-index: ${zIndex.workPage.content};
`;
