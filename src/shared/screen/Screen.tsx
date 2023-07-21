import { Divider } from 'antd';

import Breadcrumb, { ListBreadCrumb } from '../components/breadcrumb/Breadcrumb';
import { ScreenContainer } from './screen.styles';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb?: ListBreadCrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      {listBreadcrumb && (
        <>
          <Breadcrumb listBreadcrumb={listBreadcrumb} />
          <Divider />
        </>
      )}
      {children}
    </ScreenContainer>
  );
};

export default Screen;
