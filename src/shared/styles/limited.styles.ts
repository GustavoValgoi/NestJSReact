import styled, { css } from 'styled-components';

interface LimitedContainerProps {
  width: number;
  margin?: string;
  padding?: string;
}

export const LimitedContainer = styled.div<LimitedContainerProps>`
  width: ${(props) => props.width}px;

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
`;
