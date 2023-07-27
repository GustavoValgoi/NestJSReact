import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../functions/connection/auth';
import { HeaderTestIdEnum } from './enums/headerTestId.enum';
import { HeaderContainer, LogoutButton } from './header.styles';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Modal
        data-testid={HeaderTestIdEnum.HEADER_MODAL}
        title="Sair do sistema"
        open={open}
        onOk={() => logout(navigate)}
        onCancel={() => setOpen(false)}
        okText="Sair"
        cancelText="Cancelar"
      >
        <p data-testid={HeaderTestIdEnum.HEADER_MODAL_P}>
          Tem certeza que deseja sair do sistema ?
        </p>
      </Modal>
      <HeaderContainer data-testid={HeaderTestIdEnum.HEADER_CONTAINER}>
        <LogoutButton data-testid={HeaderTestIdEnum.HEADER_LOGO} onClick={() => setOpen(true)} />
      </HeaderContainer>
    </>
  );
};

export default Header;
