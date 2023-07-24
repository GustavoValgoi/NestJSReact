import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  padding-right: 32px;
  height: 72px;
  width: calc(100% - 240px);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoutButton = styled(LogoutOutlined)`
  font-size: 24px;
`;
