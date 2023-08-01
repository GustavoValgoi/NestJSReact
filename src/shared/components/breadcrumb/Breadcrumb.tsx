import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { Link } from 'react-router-dom';

import { BreadcrumbTestEnum } from './__tests__/Breadcrumb.spec';

export interface ListBreadCrumb {
  name: string;
  navigateTo?: string;
}

export interface BreadcrumbProps {
  listBreadcrumb: ListBreadCrumb[];
}

const Breadcrumb = ({ listBreadcrumb }: BreadcrumbProps) => {
  const itemsBreadcrumb = listBreadcrumb.map((breadcrumb) => ({
    title: breadcrumb.navigateTo ? (
      <Link to={breadcrumb.navigateTo}>{breadcrumb.name}</Link>
    ) : (
      <>{breadcrumb.name}</>
    ),
  }));

  return <BreadcrumbAntd data-testid={BreadcrumbTestEnum.CONTAINER} items={itemsBreadcrumb} />;
};

export default Breadcrumb;
