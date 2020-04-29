import styled from 'styled-components';

import palette from '@/styles/palette';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${palette.grayShades.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    li {
      & + li {
        margin-left: 10px;
      }

      a {
        color: ${palette.grayShades.darkGray};
        text-decoration: none;
      }
    }
  }
`;
