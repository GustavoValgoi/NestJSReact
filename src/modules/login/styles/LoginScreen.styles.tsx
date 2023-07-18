import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const TitleLogin = styled(Title)`
  color: #ff0000;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  height: 100vh;
  max-width: 646px;
  right: 0;
  top: 0;
  padding: 22px;
  width: 100%;
`;

export const LimitedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 498px;
  width: 100%;
`;
