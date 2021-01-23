import Flex from '@/common/Flex/Flex';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex>
          <p>Testing</p>
        </Flex>
      </main>
    </div>
  );
}
