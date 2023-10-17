export default async function getShortenUrls(url) {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);

  if (!response.ok) {
    throw new Error('Error to fetch url data');
  }

  return response.json();
}
