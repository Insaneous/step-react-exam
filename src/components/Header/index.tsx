import styles from './style.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1>Pizza Store</h1>
        <nav className={styles.nav}>
          <button className={styles.basket}>
            🧺
          </button>
          {localStorage.getItem('authorized') ? (
            <button>
              🚪
            </button>
          ) : (
            <button>
              👤
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}