'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CountdownEventProps = {
  title: string;
  target: string; // ISO日付文字列
};

export function CountdownEvent({ title, target }: CountdownEventProps) {
  const [status, setStatus] = useState<string>('読み込み中...');

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

    updateCountdown(); // 初回即実行
    const interval = setInterval(updateCountdown, 1000); // 1秒ごとに更新

    return () => clearInterval(interval); // クリーンアップ
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h2>
      <div
        style={{
          fontSize: '1.5rem',
          backgroundColor: '#222',
          padding: '1rem 2rem',
          borderRadius: '12px',
          display: 'inline-block',
          minWidth: '16em',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {status}
      </div>
    </motion.div>
  );
}
