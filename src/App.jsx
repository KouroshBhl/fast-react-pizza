import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Menu, { loader as loaderMenu } from './feautures/menu/Menu';
import Order, { loader as loaderOrder } from './feautures/order/Order';
import Cart from './feautures/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './feautures/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
