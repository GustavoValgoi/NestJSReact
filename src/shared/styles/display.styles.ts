import styled, { css } from 'styled-components';

interface DisplayProps {
  type: string;
  justify?: string;
  align?: string;
  direction?: string;
}

export const Display = styled.div<DisplayProps>`
  display: ${(props) => props.type};

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}
  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
`;
