'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/Footer.css'; // src/styles に移動したと仮定

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="md:flex md:justify-between">
        <Link href="../" className="flex items-center">
          <Image
            src="img/logo.png" // basePathを考慮する場合
            alt="VRUGD Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </Link>
      </div>
      <hr />
      <p className="copyright">
        Copyright © {currentYear} VketReal Unofficial Garage Developers. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
