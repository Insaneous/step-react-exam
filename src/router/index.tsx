import { createBrowserRouter } from 'react-router-dom';
import { RootTemplate } from '../templates/RootTemplate';
import { HomePage } from '../pages/HomePage';
import { AuthForm } from '../components/AuthForm';
import { Cart } from '../components/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/auth',
            element: <AuthForm />,
          },
          {
            path: '/cart',
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);
