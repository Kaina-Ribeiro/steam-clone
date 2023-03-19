import { NextPage } from 'next';
import type { AppProps } from 'next/app';

type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export { NextPageWithLayout, AppPropsWithLayout };
