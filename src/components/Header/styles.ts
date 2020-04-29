import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #fff;
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
        color: #333;
        text-decoration: none;
      }
    }
  }
`;
