import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { CartItem } from "../../UI/CartItem";
import { clearCart } from "../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.pizzas);
  const pizzas = useSelector((state: RootState) => state.pizza.pizzas);
  const navigate = useNavigate();

  const total = cart.reduce((acc, pizza) => {
    const pizzaItem = pizzas.find((p) => p.id === pizza.id);
    return pizzaItem ? acc + pizza.count * pizzaItem.price : acc;
  }, 0);

  const handleClear = () => {
    dispatch(clearCart());
    navigate('/');
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Checkout Successful');
    navigate('/');
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((pizza) => {
        const pizzaItem = pizzas.find((p) => p.id === pizza.id);
        return (
          pizzaItem && (
            <CartItem key={pizza.id} pizza={pizzaItem} count={pizza.count} />
          )
        );
      })}
      <div className={style.cart__bottom}>
        <div>
          <p>${total}</p>
        </div>
        <button onClick={handleCheckout} className={style.checkout}>Checkout</button>
        <button onClick={handleClear} className={style.clear}>Clear</button>
      </div>
    </div>
  );
};
