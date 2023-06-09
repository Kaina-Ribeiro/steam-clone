import Layout from '@/components/Layout';
import { CodeTag, Container, Description, Main, Title } from '@/components/sharedstyes';
import type { NextPageWithLayout } from './_app';

import Head from 'next/head';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>
      </Main>
    </Container>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
