import Head from 'next/head';
import { CountdownEvent } from '../components/Countdown';

export default function Home() {
  return (
    <>
      <Head>
        <title>イベントカウントダウン</title>
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#111] text-white p-8">
        <h1 className="text-4xl mb-4 text-center">イベントカウントダウン</h1>
        <p className="text-lg mb-8 text-center">次のイベントまでのカウントダウンを表示します。</p>
        
        {/* Countdown Component */}
        <CountdownEvent title="🎉 VketReal 2025 Summer 開催まで" target="2025-07-26T10:00:00+09:00" />
        <CountdownEvent title="🌟 VketReal 2025 Summer in Sapporo 開催まで" target="2025-07-21T10:00:00+09:00" />
      </main>
      
    </>
  );
}
