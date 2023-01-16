export const getUserId = (url: string | undefined) => {
  const urlParts = url? url.split('/'): [];
  const userid: string = urlParts[urlParts.length-1];
  return userid;
}