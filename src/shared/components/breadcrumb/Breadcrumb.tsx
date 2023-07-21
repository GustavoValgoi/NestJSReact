import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { Link } from 'react-router-dom';

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

  return <BreadcrumbAntd items={itemsBreadcrumb} />;
};

export default Breadcrumb;
