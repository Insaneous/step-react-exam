import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Pizza } from "../../redux/slice/pizzaSlice";
import { RootState } from "../../redux/store";
import { Button } from "../Button";
import { addToCart } from "../../redux/slice/cartSlice";
import styles from './style.module.css';

export const PizzaCard = ({ pizza }: { pizza: Pizza }) => {
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized);
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleCart = (pizza: Pizza) => {
    dispatch(addToCart(pizza.id));
    setButtonText("Added!");
    setTimeout(() => setButtonText("Add to Cart"), 2000);
  };

  return (
    <div className={styles.pizzaCard}>
      <img src={pizza.image} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <div className={styles.pizzaCard__actions}>
        {isAuthorized && (
          <Button text={buttonText} icon="🛒" onClick={() => handleCart(pizza)} />
        )}
        <p>${pizza.price}</p>
      </div>
    </div>
  );
};
