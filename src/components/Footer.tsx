'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css'; // Adjust the path as necessary

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <Link href="//vrugd.jp/" className={styles.logoLink}>
          <Image
            src="/img/logo.png"
            alt="VRUGD Logo"
            width={140}
            height={50}
            className={styles.logoImage}
          />
        </Link>
      </div>
      <hr className={styles.divider} />
      <p className={styles.copyright}>
        © {currentYear} VketReal Unofficial Garage Developers. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
