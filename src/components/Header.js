// Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo Ocupa IFSP" />
        <h1 className={styles.title}>Ocupa IFSP</h1>
      </div>
      <nav>
         <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.menuItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Audiovisual" className={styles.menuItem}>
              Formação
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
