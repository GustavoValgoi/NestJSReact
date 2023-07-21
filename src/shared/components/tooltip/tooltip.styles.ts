import styled from 'styled-components';

export const ContainerTooltip = styled.div`
  position: relative;

  :hover {
    div {
      display: block;
    }
  }
`;

export const ContainerExternal = styled.div`
  display: none;
  position: absolute;
  top: -5px;
  left: 15px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  z-index: 10;
`;
