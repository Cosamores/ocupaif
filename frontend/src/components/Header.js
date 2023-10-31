// Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <Link href="/">
        <Image className={styles.logo} src="/images/ocupa_logo.png" alt="Logo Ocupa IFSP" width={90} height={90} />
        </Link>
        {/* <button className={styles.oQueButton}></button>

         <h1 className={styles.title}></h1>*/}
        <ul className={styles.menu}>
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
            <Link href="/LeiturasPage">
              <span className={styles.menuItem}>Leituras</span>
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Header;