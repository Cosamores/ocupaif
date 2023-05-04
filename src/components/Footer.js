import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../styles/Footer.module.css';

const Footer = (props) => {
const submitHandler = () => {
    const button = document.querySelector('submitButton');
    button.preventDefault();

    alert('Versão de teste');

}

    return (
    <footer className={styles.footer}>
        <div className={styles.newsletter}>
        <h3>Inscreva-se em nossa newsletter</h3>
        <form>
          <input type="email" placeholder="Seu e-mail" required />
          <button className={styles.submitButton} type="submit" onSubmit={submitHandler}>Inscrever-se</button>
        </form>
      </div>
      <div className={styles.callToAction}>
        <p>Participe da luta estudantil e fortaleça este movimento que é seu!</p>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className={styles.icon} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá!%20Gostaria%20de%20participar%20do%20grupo%20do%20WhatsApp." target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
