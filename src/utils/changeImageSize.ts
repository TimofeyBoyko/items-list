export default function changeImageSize(url: string, size: string) {
  const splitUrl = url.split("/");

  splitUrl[splitUrl.length - 2] = size;
  splitUrl[splitUrl.length - 1] = size;

  return splitUrl.join("/");
}
