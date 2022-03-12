export default async function getPastEvents() {

  const url = process.env.HOST_DOMAIN + `/api/events?eventType=past&sortBy=dateTime&sortOrder=desc`;
  const response = await fetch(url);
  return await response.json();

}
