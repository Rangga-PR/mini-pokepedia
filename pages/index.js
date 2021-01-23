import Head from 'next/head';
import Home from '@/components/Home/Home';
import MainLayout from '@/layouts/MainLayout';

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Pokepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </MainLayout>
  );
}
