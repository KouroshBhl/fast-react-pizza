import { Link } from 'react-router-dom';
import SearchOrder from '../feautures/order/SearchOrder';

function Header() {
  return (
    <header>
      <SearchOrder />
      <Link to='/'>Fast travel Pizza inc.</Link>
    </header>
  );
}

export default Header;
