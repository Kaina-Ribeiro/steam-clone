import { ReactNode } from 'react';

import { Main } from '@/styles/sharedstyes';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <Main>{children}</Main>;
};

export default Layout;
