export interface IArticleItem {
  key: string;
  label: string;
  iconUrl: string;
  isActive: boolean;
}

export interface ICard {
  id: string;
  url: string;
  author: string;
  download_url: string;
  height: number;
  width: number;
  isFavorite: boolean;
}
