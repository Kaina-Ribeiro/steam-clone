import React from 'react';
import { ThemeProvider } from 'styled-components';

import { TwitchSessionProvider } from '@/libs/contexts/twitchSession.context';
import { defaultTheme } from '@/styles/themes/default';

const IndexProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TwitchSessionProvider>{children}</TwitchSessionProvider>
    </ThemeProvider>
  );
};

export { IndexProvider };
