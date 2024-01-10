import Header from './Header';
import Loader from './Loader';
import CartOverview from '../feautures/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigate = useNavigation();
  const loader = navigate.state === 'loading';

  return (
    <div>
      {loader && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
