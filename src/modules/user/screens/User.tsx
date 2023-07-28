import { Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Loading from '../../../shared/components/loading/Loading';
import Table from '../../../shared/components/table/Table';
import { insertMaskInCPF } from '../../../shared/functions/cpf';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { UserType } from '../../login/types/UserType';
import { useUser } from '../hooks/useUser';
import { UserRoutesEnum } from '../routes';

const { Search } = Input;

const columns: ColumnsType<UserType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (id) => <p>{id}</p>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name) => <a>{name}</a>,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    render: (email) => <a>{email}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone) => <a>{insertMaskInPhone(phone)}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render: (cpf) => <a>{insertMaskInCPF(cpf)}</a>,
  },
];

const User = () => {
  const { users, loading, handleSearch } = useUser();
  const navigate = useNavigate();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'Home',
          navigateTo: '/',
        },
        {
          name: 'Clientes',
        },
      ]}
    >
      {!users || loading ? (
        <Display type="flex" justify="center">
          <Loading size="large" />
        </Display>
      ) : (
        <>
          <Display type="flex" justify="space-between" margin="16px 0">
            <LimitedContainer width={500}>
              <Search placeholder="Buscar produto..." onSearch={handleSearch} enterButton />
            </LimitedContainer>
            <LimitedContainer width={200}>
              <Button type="primary" onClick={() => navigate(UserRoutesEnum.USER_INSERT)}>
                Novo usuário
              </Button>
            </LimitedContainer>
          </Display>
          <Table columns={columns} dataSource={users} />
        </>
      )}
    </Screen>
  );
};

export default User;
