import styled from 'styled-components';

export const Container = styled.div`
  div {
    & + div {
      margin-top: 50px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
