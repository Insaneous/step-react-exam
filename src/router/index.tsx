import { createBrowserRouter } from 'react-router-dom';
import { RootTemplate } from '../templates/RootTemplate';
import { HomePage } from '../pages/HomePage';

// Define the routes with protection
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
