import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../utils/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const data = useLoaderData();
  console.log(data);
  return (
    <ul>
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
