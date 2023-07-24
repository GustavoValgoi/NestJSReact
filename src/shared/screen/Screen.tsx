import { Divider } from 'antd';

import Breadcrumb, { ListBreadCrumb } from '../components/breadcrumb/Breadcrumb';
import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';
import { ScreenContainer } from './screen.styles';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb?: ListBreadCrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <Menu />
        {listBreadcrumb && (
          <>
            <Breadcrumb listBreadcrumb={listBreadcrumb} />
            <Divider />
          </>
        )}
        {children}
      </ScreenContainer>
    </>
  );
};

export default Screen;
