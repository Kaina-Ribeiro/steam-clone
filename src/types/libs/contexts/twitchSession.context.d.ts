type TTwitchSession = {
  access_token: string;
  expires_in: number;
  expires_date?: number;
  token_type: 'bearer';
};

type TTwitchSessionContextData = {
  twitchSession: TTwitchSession;
};

type TTwitchSessionProviderProps = {
  children: React.ReactNode;
};

type TTwitchActionCreateSession = { type: 'createSession'; value: TTwitchSession };
type TTwitchActionClearSession = { type: 'clearSession' };

type TTwitchAction = TTwitchActionCreateSession | TTwitchActionClearSession;

type TTwitchSessionReducer = (state: TTwitchSession, action: TTwitchAction) => TTwitchSession;

export {
  TTwitchSession,
  TTwitchSessionContextData,
  TTwitchSessionProviderProps,
  TTwitchSessionReducer,
  TTwitchAction,
};
