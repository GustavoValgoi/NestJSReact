import { createContext, useContext, useState } from 'react';

import { UserType } from '../../modules/login/types/UserType';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  notification?: NotificationProps;
  user?: UserType;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderChildren {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderChildren) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: { message, type, description },
    });
  };

  const setUser = (user: UserType) => {
    setTimeout(() => {
      setGlobalData({
        ...globalData,
        user,
      });
    }, 100);
  };

  return {
    notification: globalData?.notification,
    user: globalData?.user,
    setUser,
    setNotification,
  };
};
