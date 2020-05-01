import styled, { css } from 'styled-components';

import device from '@/styles/device';

// interface FixedContainerProps {
//   dimensions: {
//     width: number;
//     height: number;
//   };
// }

interface ContainerProps {
  position: number;
}

// export const FixedContainer = styled.div<FixedContainerProps>`
//   overflow: hidden;
//   width: ${props => `calc(${props.dimensions.width} + 40px)`};
//   height: ${props => props.dimensions.height};
//   position: relative;
// `;

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  /* width: calc(100% - 40px); */
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 70px 28px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* ${props =>
    props.position &&
    css`
      transform: translate(0px, -${props.position}px);
    `} */

  transition: transform ease-in-out;

  @media ${device.laptop} {
    padding: 90px 0 0;
  }
`;
