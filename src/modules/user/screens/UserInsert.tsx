import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { useUserInsert } from '../hooks/useUserInsert';
import { UserRoutesEnum } from '../routes';

const UserInsert = () => {
  const {
    user,
    handleCancelInsert,
    handleInsertAdmin,
    handleOnChangeInput,
    disabledButton,
    loading,
  } = useUserInsert();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'Home',
          navigateTo: '/',
        },
        {
          name: 'Usuários',
          navigateTo: UserRoutesEnum.USER,
        },
        {
          name: 'Inserir Administrador',
        },
      ]}
    >
      <Display type="flex" justify="center" width="100%">
        <LimitedContainer width={400}>
          <Input
            margin="0 0 15px"
            title="Nome"
            placeholder="Nome"
            value={user.name}
            onChange={(e) => handleOnChangeInput(e, 'name')}
          />
          <Input
            margin="0 0 15px"
            title="E-mail"
            placeholder="E-mail"
            value={user.email}
            onChange={(e) => handleOnChangeInput(e, 'email')}
          />
          <Input
            margin="0 0 15px"
            title="Telefone"
            placeholder="Telefone"
            value={user.phone}
            onChange={(e) => handleOnChangeInput(e, 'phone')}
          />
          <Input
            margin="0 0 15px"
            title="CPF"
            placeholder="CPF"
            value={user.cpf}
            onChange={(e) => handleOnChangeInput(e, 'cpf')}
          />
          <Input
            margin="0 0 15px"
            title="Senha"
            placeholder="Senha"
            value={user.password}
            onChange={(e) => handleOnChangeInput(e, 'password')}
          />
          <Display type="flex" justify="right">
            <LimitedContainer width={120} margin="0 10px 0">
              <Button danger onClick={handleCancelInsert}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
                type="primary"
                onClick={handleInsertAdmin}
                disabled={disabledButton}
                loading={loading}
              >
                Inserir Usuário
              </Button>
            </LimitedContainer>
          </Display>
        </LimitedContainer>
      </Display>
    </Screen>
  );
};

export default UserInsert;
