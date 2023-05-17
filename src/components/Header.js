// Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/images/ocupa_logo.png" alt="Logo Ocupa IFSP" />
        <Link href="/#cartaAberta">
          <button className={styles.oQueButton}>
            <h1 className={styles.title}>O que é o OcupaIF?</h1>
          </button>
        </Link>
      </div>
      <nav>
        <ul className={styles.menu}>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
