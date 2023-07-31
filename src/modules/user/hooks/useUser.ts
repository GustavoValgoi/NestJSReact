import { useEffect, useState } from 'react';

import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methos.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { UserType } from '../../login/types/UserType';

export const useUser = () => {
  const { users, setUsers } = useUserReducer();
  const { request, loading } = useRequests();
  const [usersFiltered, setUsersFiltered] = useState(users);

  useEffect(() => {
    if (!users || !users.length) {
      request<UserType[]>(URL_USER_ALL, MethodsEnum.GET, setUsers);
    }
  }, []);

  useEffect(() => {
    setUsersFiltered([...users]);
  }, [users]);

  const handleSearch = (value: string) => {
    if (!value) {
      setUsersFiltered([...users]);
    } else {
      setUsersFiltered([
        ...users.filter((user) => user.name.toUpperCase().includes(value.toUpperCase())),
      ]);
    }
  };

  return { users: usersFiltered, loading, handleSearch, setUsers };
};
