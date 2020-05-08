import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 190px;
  margin: 75px 0 125px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: calc(100% - 60px);
  top: -25%;

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const LinkWrapper = styled.div`
  position: absolute;
  bottom: -24%;
  right: 30px;
`;
