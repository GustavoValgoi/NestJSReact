import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../functions/connection/auth';
import { HeaderContainer, LogoutButton } from './header.styles';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoutButton onClick={() => setOpen(true)} />
      <Modal
        title="Sair do sistema"
        open={open}
        onOk={() => logout(navigate)}
        onCancel={() => setOpen(false)}
        okText="Sair"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja sair do sistema ?</p>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
