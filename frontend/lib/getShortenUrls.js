
export default async function getShortenUrls(url) {
  const response = await fetch(`https://url-shortener23.p.rapidapi.com/shorten`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SHORT_URL_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_SHORT_URL_HOST
    },
    body: JSON.stringify({
      url,
      alias: ""
    })
  });
  if (!response) {
    throw new Error('Error to fetch url data');
  }
  let jsonResponse = await response.json();
  jsonResponse = Object.assign(jsonResponse, {
    original_url: url,
  })
  return jsonResponse;
}
