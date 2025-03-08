import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { paths } from '../configs';

const convert = (queryClient) => async (m) => {
  const { clientAction, clientLoader, default: Component } = m;

  return {
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    element: (
      <QueryClientProvider client={queryClient}>
        <Component />
      </QueryClientProvider>
    ),
  };
};

const createRouter = (queryClient) =>
  createBrowserRouter([
    {
      path: paths.example.path,
      lazy: () => import('../pages/example').then(convert(queryClient)),
    },
    {
      path: paths.app.root.path,
        element: <p>Welcome</p>
    },
  ]);

export default function AppRouter() {
  const queryClient = new QueryClient();

  const router = createRouter(queryClient);

  return <RouterProvider router={router} />;
}
