type Game<C = Cover | number, S = Screenshot | number> = {
  id: number;
  category: number;
  cover: C;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  game_modes: number[];
  genres: number[];
  name: string;
  platforms: number[];
  release_dates: number[];
  screenshots: S[];
  similar_games: number[];
  slug: string;
  summary: string;
  tags: number[];
  updated_at: number;
  url: string;
  websites: number[];
  checksum: string;
  language_supports: number[];
};

type Cover = {
  id: number;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
};

type Screenshot = {
  id: number;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
};

type GamesList<C = Cover | number, S = Screenshot | number> = Game<C, S>[];

type CoversList = Cover[];

type ScreenshotList = Screenshot[];

export { Game, Cover, Screenshot };
export { GamesList, CoversList, ScreenshotList };
