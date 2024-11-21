import { useDispatch } from "react-redux";
import { Pizza } from "../redux/slice/pizzaSlice";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import { CSSProperties } from 'react';


interface CartItemProps {
  pizza?: Pizza;
  count: number;
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.2rem',
    borderBottom: '1px solid #ccc',
  } as CSSProperties,
  name: {
    width: '100%'
  } as CSSProperties,
  btn: {
    all: 'unset',
    width: '2.5rem',
    height: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'var(--primary-color) solid 2px',
    color: 'var(--primary-color)',
    cursor: 'pointer',
    fontFamily: 'Noto Emoji',
  } as CSSProperties,
};

export const CartItem = ({ pizza, count }: CartItemProps) => {
  if (!pizza) return null;
  const dispatch = useDispatch();
  const handleAdd = (id: number) => {
    dispatch(addToCart(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div style={styles.container}>
      <p style={styles.name}>{pizza.name}</p>
      <p>${pizza.price}</p>
      <button onClick={() => handleAdd(pizza.id)} style={styles.btn}>➕</button>
      <p>{count}</p>
      <button onClick={() => handleRemove(pizza.id)} style={styles.btn}>➖</button>
    </div>
  );
};
