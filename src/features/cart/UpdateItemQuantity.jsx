import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <Button
        type="quantity"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </Button>
      <p className="text-sm">{currentQuantity}</p>
      <Button
        type="quantity"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
