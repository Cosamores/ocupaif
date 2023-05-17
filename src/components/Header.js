// Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Head from 'next/head';

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

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
