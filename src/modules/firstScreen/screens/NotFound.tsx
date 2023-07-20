import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import { LoginRoutesEnum } from '../../login/routes';
import { ContainerPageNotFound } from '../styles/pageNotFound.styles';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Opss... Esta página não existe."
        extra={
          <Button type="primary" onClick={() => navigate(LoginRoutesEnum.LOGIN)}>
            Login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default NotFound;
