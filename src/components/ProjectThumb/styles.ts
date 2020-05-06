import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 190px;
  margin: 40px 0;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.6;
  }
`;

export const Title = styled.div`
  position: absolute;
  width: 100%;
  top: -10%;
  left: 0%;

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const LinkWrapper = styled.div`
  position: absolute;
  bottom: -10%;
  right: 30px;
`;
