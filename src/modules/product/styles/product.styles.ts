import styled from 'styled-components';

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

export const LimitSize = styled.div<{ $customWidth?: string }>`
  width: ${(props) => props.$customWidth || '200px'};
`;
