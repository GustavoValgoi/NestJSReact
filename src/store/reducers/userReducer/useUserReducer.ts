import { UserType } from '../../../modules/login/types/UserType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUsersAction } from '.';

export const useUserReducer = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);

  const setUsers = (currentUsers: UserType[]) => {
    dispatch(setUsersAction(currentUsers));
  };

  return { users, setUsers };
};
