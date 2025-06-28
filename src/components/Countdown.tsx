'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CountdownEventProps = {
  title: string;
  target: string; // ISO日付文字列
};

export function CountdownEvent({ title, target }: CountdownEventProps) {
  const [status, setStatus] = useState<string>('読み込み中...');
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const targetDate = new Date(target);

    const updateCountdown = () => {
      const now = new Date();
      const diffMs = targetDate.getTime() - now.getTime();
      const isSameDay = now.toDateString() === targetDate.toDateString();

      if (isSameDay) {
        setStatus('開催中！');
      } else if (diffMs <= 0) {
        setStatus('終了しました');
      } else {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
        const seconds = Math.floor((diffMs / 1000) % 60);
        setStatus(`${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const colors = isDark
    ? {
        text: 'white',
        bg: '#222',
        border: '#444',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      }
    : {
        text: '#222',
        bg: '#fff',
        border: '#bbb',
        boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
      };

  return (
    <>
      <style>
        {`
          section.countdown {
            text-align: center;
            margin: 2rem auto;
            padding: 1rem;
            max-width: 600px;
            width: 90vw; /* 画面幅の90%に */
            color: ${colors.text};
            background: ${isDark ? '#111' : '#f9f9f9'};
            border-radius: 16px;
            transition: background 0.3s, color 0.3s;
          }
          h2.countdown-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid ${colors.border};
            padding-bottom: 0.5rem;
            color: ${colors.text};
          }
          div.countdown-status {
            font-size: 1.5rem;
            background-color: ${colors.bg};
            color: ${colors.text};
            padding: 1rem 2rem;
            border-radius: 12px;
            display: inline-block;
            min-width: 16em;
            box-shadow: ${colors.boxShadow};
            border: 1px solid ${colors.border};
            transition: background 0.3s, color 0.3s, border 0.3s;
          }

          /* スマホ用調整 */
          @media (max-width: 480px) {
            h2.countdown-title {
              font-size: 1.5rem;
              margin-bottom: 0.75rem;
            }
            div.countdown-status {
              font-size: 1.2rem;
              padding: 0.75rem 1rem;
              min-width: 12em;
            }
            section.countdown {
              margin: 1rem auto;
              padding: 0.75rem;
              border-radius: 12px;
            }
          }
        `}
      </style>

      <section className="countdown" aria-labelledby="countdown-heading">
        <motion.h2
          id="countdown-heading"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="countdown-title"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          role="status"
          aria-live="polite"
          className="countdown-status"
        >
          {status}
        </motion.div>
      </section>
    </>
  );
}
