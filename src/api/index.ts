import axios from "axios";

interface IFetchCard {
  id: string;
  url: string;
  author: string;
  download_url: string;
  height: number;
  width: number;
}

export async function fetchCardList(page: number, imageOnPage: number) {
  const res = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=${imageOnPage}`
  );

  const data = res.data.map((item: IFetchCard) => ({
    ...item,
    isFavorite: false,
  }));

  return data;
}

export async function fetchCardById(id: string) {
  const res = await axios.get(`https://picsum.photos/id/${id}/info`);

  const data = res.data;

  return data;
}
