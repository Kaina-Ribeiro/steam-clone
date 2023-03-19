import { TTwitchSession } from '@/types/libs/contexts/twitchSession.context';

const fetchURL = `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`;

const abortController = new AbortController();

const twitchSessionApi = {
  getSession: () => {
    return new Promise<TTwitchSession>((resolve, reject) => {
      fetch(fetchURL, {
        method: 'POST',
        signal: abortController.signal,
      })
        .then(async (response) => {
          const data = (await response.json()) as TTwitchSession;

          const value = {
            ...data,
            expire_date: Date.now() + data.expires_in * 1000,
          };
          resolve(value);
        })
        .catch(reject);
    });
  },
};

export { twitchSessionApi, abortController };
