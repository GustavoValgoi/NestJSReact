import { Result } from 'antd';

import Button from '../../../shared/components/buttons/button/Button';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Opss... Esta página não existe."
      extra={<Button type="primary">Login</Button>}
    />
  );
};

export default NotFound;
