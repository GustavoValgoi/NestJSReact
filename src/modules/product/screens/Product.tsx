import { useEffect } from 'react';

import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

const Product = () => {
  const { user } = useGlobalContext();

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user) {
    return <p>Carregando...</p>;
  }

  return <div>{user?.name}</div>;
};

export default Product;
