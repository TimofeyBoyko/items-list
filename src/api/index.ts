import axios from "axios";

export async function fetchCardList() {
  const data = await (await axios.get("https://picsum.photos/v2/list")).data;

  return data;
}
