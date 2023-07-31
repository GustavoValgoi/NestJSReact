import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER_ADMIN, URL_USER_ALL } from '../../../shared/constants/urls';
import { InsertUserDTO } from '../../../shared/dtos/InsertUser.dto';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { UserRoutesEnum } from '../routes';
import { useUser } from './useUser';

export const useUserInsert = () => {
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const navigate = useNavigate();
  const { request, loading } = useRequests();
  const { setNotification } = useGlobalReducer();
  const { setUsers } = useUser();
  const [user, setUser] = useState<InsertUserDTO>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  useEffect(() => {
    if (user.name && user.email && user.phone && user.cpf && user.password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [user]);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setUser((currentUser) => ({
      ...currentUser,
      [name]: event.target.value,
    }));
  };

  const handleCancelInsert = () => {
    navigate(UserRoutesEnum.USER);
  };

  const handleInsertAdmin = async () => {
    await request(URL_USER_ADMIN, MethodsEnum.POST, undefined, user)
      .then(async () => {
        await request(URL_USER_ALL, MethodsEnum.GET, setUsers);
        setNotification('Administrador cadastrado com sucesso.', 'success');
        navigate(UserRoutesEnum.USER);
      })
      .catch((err) => setNotification(err.message, 'error'));
  };

  return {
    user,
    loading,
    disabledButton,
    handleCancelInsert,
    handleInsertAdmin,
    handleOnChangeInput,
  };
};
