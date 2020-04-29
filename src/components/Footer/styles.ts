import styled from 'styled-components';

import palette from '@/styles/palette';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${palette.grayShades.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.grayShades.white};

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
