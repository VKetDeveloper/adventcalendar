import Head from 'next/head';
import { CountdownEvent } from '../components/Countdown';

export default function Home() {
  return (
    <>
      <Head>
        <title>イベントカウントダウン</title>
      </Head>
<main>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
        }
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>イベントカウントダウン</h1>
        <p>次のイベントまでのカウントダウンを表示します</p>
      </header>
  <CountdownEvent title="Vket 2025 Summer開催まで" target="2025-07-12T10:00:00+09:00" />
  <CountdownEvent title="VketReal 2025 Summer in Sapporo 開催まで" target="2025-07-21T10:00:00+09:00" />
  <CountdownEvent title="VketReal 2025 Summer 開催まで" target="2025-07-26T10:00:00+09:00" />
</main>
<footer style={{ textAlign: 'center', padding: '20px' }}><p>©{new Date().getFullYear()} VketReal Unofficial Garage Developers. All Rights Reserved.</p>
</footer>
    </>
  );
}
