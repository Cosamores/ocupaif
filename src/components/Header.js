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
            <Link href="/">
              <a className={styles.menuItem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Audiovisual">
              <a className={styles.menuItem}>Formação</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
