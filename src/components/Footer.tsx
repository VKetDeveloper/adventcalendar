'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const adjustFooterPosition = () => {
      const footer = footerRef.current;
      if (!footer) return;

      footer.style.position = 'static'; // リセット

      const bodyHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;

      const footerTop = footer.offsetTop;
      const footerHeight = footer.offsetHeight;

      const totalFooterBottom = footerTop + footerHeight;

      if (totalFooterBottom < windowHeight) {
        footer.style.position = 'relative';
        footer.style.top = `${windowHeight - totalFooterBottom}px`;
      }
    };

    window.addEventListener('load', adjustFooterPosition);
    window.addEventListener('resize', adjustFooterPosition);

    const fontCheck = document.createElement('div');
    fontCheck.style.visibility = 'hidden';
    fontCheck.style.position = 'absolute';
    fontCheck.style.top = '0';
    fontCheck.textContent = 'S';
    document.body.appendChild(fontCheck);
    let prevHeight = fontCheck.offsetHeight;

    const fontSizeWatcher = setInterval(() => {
      if (fontCheck.offsetHeight !== prevHeight) {
        prevHeight = fontCheck.offsetHeight;
        adjustFooterPosition();
      }
    }, 1000);

    return () => {
      window.removeEventListener('load', adjustFooterPosition);
      window.removeEventListener('resize', adjustFooterPosition);
      clearInterval(fontSizeWatcher);
      document.body.removeChild(fontCheck);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="md-flex md-justify-between">
        <a href="https://jajaaan.co.jp/" className="footer__logo">
          <Image
            src="https://jajaaan.co.jp/wp-content/themes/jajaaan/assets/images/dist/svg/logo.svg"
            alt="JAJAAAN Logo"
            width={140}
            height={20}
          />
        </a>
      </div>
      <hr />
      <p className="copyright">
        © {currentYear} <a href="https://jajaaan.co.jp/">JAJAAAN Inc.</a> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
