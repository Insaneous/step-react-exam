import { CSSProperties } from 'react';

const styles: { button: CSSProperties } = {
  button: {
    all: 'unset',
    cursor: 'pointer',
    borderRadius: '0.2rem',
    backgroundColor: 'var(--primary-color)',
    color: '#fff',
    padding: '0.5rem',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '0.2rem',
    fontFamily: 'Noto Emoji',
  },
};

export const Button = ({ text, icon, onClick }: { text: string, icon: string, onClick?: () => void }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
