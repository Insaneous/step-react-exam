import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.css';


export const Modal = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/');
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <Outlet />
      </div>
    </div>
  );
};
