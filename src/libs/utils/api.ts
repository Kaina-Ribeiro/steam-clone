const fetchApi = (url: string, init?: RequestInit | undefined) => {
  const customHeader: Record<string, string | [string, string]> = {};

  if (init && init.headers) {
    for (const [key, value] of init.headers as any[]) {
      customHeader[key] = value;
    }
  }

  return fetch('https://api.igdb.com/v4' + url, {
    ...init,
    headers: new Headers({
      ...customHeader,
      'Client-ID': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || '',
      'Content-Type': 'application/json',
    }),
  });
};

export { fetchApi };
