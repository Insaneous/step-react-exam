import { Link } from 'react-router-dom';
import styles from './style.module.css';
import logo from '/src/assets/logo.svg';

export const Footer = () => {
  const links = [
    {text: 'Restaurants'},
    {text: 'Couriers'},
    {text: 'Press-Kit'},
    {text: 'Contact'}
  ];
  const socials = [
    {
      link: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png', 
      text: 'Instagram'
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png', 
      text: 'Facebook'
    },
    {
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png', 
      text: 'VK'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.logo__container}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p>Delivery<br />Food</p>
        </div>
        <div className={styles.footer__links}>
          {links.map((link) => (
            <Link to='/' key={link.text}>
              {link.text}
            </Link>
          ))}
        </div>
        <nav className={styles.footer__socials}>
          {socials.map((social) => (
            <Link to='/' key={social.text}>
              <img src={social.link} alt={social.text} className={styles.social} />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
