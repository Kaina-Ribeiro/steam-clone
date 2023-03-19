import { AppPropsWithLayout } from '@/types/pages/_app';
import { IndexProvider } from '@/libs/contexts/index.context';
import GlobalStyle from '@/styles/globalstyle';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <IndexProvider>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </IndexProvider>
  );
}
