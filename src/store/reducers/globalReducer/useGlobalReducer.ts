import { UserType } from '../../../modules/login/types/UserType';
import { NotificationEnum } from '../../../shared/types/NotificationType';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setNotificationAction, setUserAction } from '.';

export const useGlobalReducer = () => {
  const dispatch = useAppDispatch();
  const { user, notification } = useAppSelector((state) => state.global);

  const setNotification = (message: string, type: NotificationEnum, description?: string) => {
    dispatch(setNotificationAction({ message, type, description }));
  };

  const setUser = (user: UserType) => {
    setTimeout(() => {
      dispatch(setUserAction(user));
    }, 100);
  };

  return {
    user,
    notification,
    setNotification,
    setUser,
  };
};
