import Head from 'next/head';
import { CountdownEvent } from '../components/Countdown';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>イベントカウントダウン</title>
      </Head>
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        color: '#fff',
        padding: '2rem',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}>イベントカウントダウン</h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>次のイベントまでのカウントダウンを表示します。</p>
        
        {/* Countdown Component */}
        <CountdownEvent title="🎉 VketReal 開催まで" target="2025-07-26T10:00:00+09:00" />
        <CountdownEvent title="🌟 VketReal in Sapporo 開催まで" target="2025-07-21T10:00:00+09:00" />
      </main>
      <Footer />
    </>
  );
}
