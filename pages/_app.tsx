// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-8 min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
