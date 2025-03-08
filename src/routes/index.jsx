import { createBrowserRouter } from 'react-router-dom';
import { paths } from '../configs';
import App from '../App';
import Template from '../pages/Template';

const router = createBrowserRouter([
  {
    path: paths.home.path,
    element: <Template />,
  },
  {
    path: paths.app.path,
    element: <App />,
    children: [{ index: true, element: <Template /> }],
  },
]);

export default router;
