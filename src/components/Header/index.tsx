import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slice/userSlice';
import { RootState } from '../../redux/store';
import { Button } from '../../UI/Button';
import { clearCart } from '../../redux/slice/cartSlice';
import { filterPizzas } from '../../redux/slice/pizzaSlice';
import styles from './style.module.css';
import logo from '/src/assets/logo.svg';

export const Header = () => {
  const search = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleSearchChange = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      dispatch(filterPizzas(search.current?.value || ''));
    }, 500);
    setTimeoutId(newTimeoutId);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo__container}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p>Delivery<br />Food</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className={styles.search}
          ref={search}
          onChange={handleSearchChange}
        />
        <nav className={styles.nav}>
          {isAuthorized ? (
            <>
              <Link to="/cart">
                <Button text="Cart" icon="🛒" />
              </Link>
              <Button text="Logout" icon="🚪" onClick={handleLogout} />
            </>
          ) : (
            <Link to="/auth">
              <Button text="Login" icon="👤" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
