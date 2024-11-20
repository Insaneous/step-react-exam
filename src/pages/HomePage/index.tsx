import { useSelector } from "react-redux";
import { Modal } from "../../UI/Modal"
import { RootState } from "../../redux/store";
import { PizzaCard } from "../../UI/PizzaCard";
import styles from './style.module.css'

export const HomePage = () => {
  const pizzas = useSelector((state: RootState) => state.pizza.pizzas);
  const filteredPizzas = useSelector((state: RootState) => state.pizza.filteredPizzas);
  
  return (
    <main className={styles.home}>
      <div className={styles.home__container}>
        <h1>Menu</h1>
        <div className={styles.pizzas__container}>
          {filteredPizzas.length === 0 ? (
            pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))) : (
              filteredPizzas.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
            )))
          }
        </div>
      </div>
      <Modal />
    </main>
  )
}