import styled, { css } from 'styled-components';

import palette from '@/styles/palette';

interface ContainerProps {
  direction: 'left' | 'right';
}

const linesDirectionVariations = {
  left: css`
    a {
      transform: translateX(-5px);
    }

    div {
      span {
        &:first-child {
          transform-origin: center;
          transform: rotate(135deg) translate(-8px, 20px);
        }

        &:last-child {
          transform-origin: left;
          transform: rotate(45deg);
        }
      }
    }
  `,
  right: css`
    a {
      transform: translateX(5px);
    }

    div {
      span {
        &:first-child {
          transform-origin: center;
          transform: rotate(45deg) translate(-8px, -20px);
        }

        &:last-child {
          transform-origin: right;
          transform: rotate(-45deg);
        }
      }
    }
  `,
};

const linesContainerVariations = {
  left: css`
    margin-right: 10px;
  `,
  right: css`
    margin-left: 10px;
  `,
};

export const Container = styled.div<ContainerProps>`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.direction === 'left' &&
    css`
      flex-direction: row-reverse;
    `}

  &:hover,
  &:active {
    cursor: pointer;

    ${props => linesDirectionVariations[props.direction || 'right']}
  }

  a {
    font-size: 11px;
    font-weight: 500;
    transition: transform 0.2s;
  }

  > div {
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${props => linesContainerVariations[props.direction || 'right']};

    span {
      display: block;
      width: 100%;
      height: 1px;
      background: ${palette.grayShades.white};
      transition: transform 0.2s;

      &:first-child {
        transform-origin: center;
        transform: translate(0px, 0.5px);
        transform: rotate(90deg);
      }

      &:last-child {
        transform: translate(0px, -0.5px);
      }
    }
  }
`;
