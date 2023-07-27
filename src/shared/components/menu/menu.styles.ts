import { Typography } from 'antd';
import styled from 'styled-components';

import SVGLogo from '../icons/SVGLogo';

const { Text } = Typography;

export const ContainerMenu = styled.div`
  background-color: #001529;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
`;

export const ContainerLogoName = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  width: 100%;
  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoMenu = styled(SVGLogo)`
  margin: 0 16px;
  width: 50px;
`;

export const NameCompany = styled(Text)`
  color: white;
`;
