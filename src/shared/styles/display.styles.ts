import styled, { css } from 'styled-components';

interface DisplayProps {
  type: string;
  justify?: string;
  align?: string;
  direction?: string;
  margin?: string;
  padding?: string;
  width?: string;
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
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;
