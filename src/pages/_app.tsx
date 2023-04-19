import { AppPropsWithLayout } from '@/types/pages/_app';
import { IndexProvider } from '@/libs/contexts/index.context';
import GlobalStyle from '@/styles/globalstyle';
import { Container, Wrapper } from '@/styles/sharedstyes';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <IndexProvider>
      <GlobalStyle />
      <Container>
        <Wrapper>{getLayout(<Component {...pageProps} />)}</Wrapper>
      </Container>
    </IndexProvider>
  );
}
