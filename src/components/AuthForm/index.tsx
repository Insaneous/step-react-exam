import { useRef } from 'react';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button';

export const AuthForm = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login());
    navigate('/');
  };

  return (
    <form className={styles.authForm} onSubmit={(e) => handleLogin(e)}>
      <h2>Login</h2>
      <div>
        <p>
          <label htmlFor="username">Login</label>
          <input
            type="text"
            placeholder="Username"
            ref={username}
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            ref={password}
            required
          />
        </p>
      </div>
      <Button text="Login" icon="👤" />
    </form>
  );
};
