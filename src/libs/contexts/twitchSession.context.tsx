import React, { createContext, useContext, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';

import {
  TTwitchAction,
  TTwitchSession,
  TTwitchSessionContextData,
  TTwitchSessionProviderProps,
  TTwitchSessionReducer,
} from '@/types/libs/contexts/twitchSession.context';
import { abortController, twitchSessionApi } from '../utils/twitchSession';

const COOKIE_NAME = 'SESSION_TWITCH_TOKEN';

const getSession = async (dispatch: React.Dispatch<TTwitchAction>) => {
  const value = await twitchSessionApi.getSession();

  dispatch({ type: 'createSession', value });
};

const getCookie = (): TTwitchSession => {
  const cookie = Cookies.get(COOKIE_NAME);

  return cookie ? JSON.parse(cookie) : ({} as TTwitchSession);
};

const initialCookieValue = getCookie();

const TwitchSessionContext = createContext({} as TTwitchSessionContextData);

const TwitchSessionProvider = ({ children }: TTwitchSessionProviderProps) => {
  const [twitchSession, dispatch] = useReducer<TTwitchSessionReducer>((_state, action) => {
    switch (action.type) {
      case 'createSession':
        const { value } = action;
        Cookies.set(COOKIE_NAME, JSON.stringify(value), { expires: value.expires_in });

        return value;
      case 'clearSession':
        Cookies.remove(COOKIE_NAME);

        return {} as TTwitchSession;
      default:
        throw new Error();
    }
  }, initialCookieValue);

  useEffect(() => {
    const { expires_date = 0 } = twitchSession;

    if (expires_date && expires_date > Date.now()) return;

    // setTimeout(() => {
    // }, expires_date - Date.now());
    getSession(dispatch);

    () => {
      abortController.abort();
    };
  }, []);

  return (
    <TwitchSessionContext.Provider value={{ twitchSession }}>
      {children}
    </TwitchSessionContext.Provider>
  );
};

function useTwitchSession() {
  const context = useContext(TwitchSessionContext);

  if (!context) {
    throw new Error('useTwitchSession must be used within a TwitchSessionProvider');
  }

  return context;
}

export { TwitchSessionProvider, useTwitchSession, COOKIE_NAME };
