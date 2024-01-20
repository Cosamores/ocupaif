import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../styles/Footer.module.css';

const Footer = (props) => {
/* const submitHandler = () => {
    const button = document.querySelector('submitButton');
    button.preventDefault();
    alert('Entre em nosso grupo do Whatsapp.');
} */

    return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
      <h3>
        Grupo no Whatsapp:
        <div className={styles.socialLinks}>
          <a href="https://chat.whatsapp.com/Dn6EyU8dI8NB6xptHHH4J8" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.icon} />
          </a>
        </div>
      </h3>
{/*         <form>
          <input type="email" placeholder="Seu e-mail" required />
          <button className={styles.submitButton} type="submit" onSubmit={submitHandler}>Inscrever-se</button>
        </form> */}
              <div className={styles.socialLinks}>
{/*         <a href="https://www.instagram.com/ifspcaraguatatuba/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className={styles.icon} />
        </a>
        <a href="https://chat.whatsapp.com/Dn6EyU8dI8NB6xptHHH4J8" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.icon} />
        </a>
         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className={styles.icon} />
        </a> */}
      </div>
      </div>
      <div className={styles.callToAction}>
        <p>Participe da luta estudantil e fortaleça este movimento que é seu!</p>
      </div>

    </footer>


  );
};

export default Footer;
