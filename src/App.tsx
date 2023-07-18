import { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela principal...</div>,
    errorElement: <div>Nada encontrado</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
