// Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Link href="/">
        <img className={styles.logo} src="/images/ocupa_logo.png" alt="Logo Ocupa IFSP" />
        </Link>
        <button className={styles.oQueButton}>
          <h1 className={styles.title}><ul className={styles.menu}>
          <li>
            <Link href="/">
              <span className={styles.menuItem}>Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="/EventosLista">
              <span className={styles.menuItem}>Eventos</span>
            </Link>
          </li>
          <li>
            <Link href="/Audiovisual">
              <span className={styles.menuItem}>Leituras</span>
            </Link>
          </li>
        </ul></h1>
          </button>
      </div>
      <nav>
         
      </nav>
    </header>
  );
};

export default Header;