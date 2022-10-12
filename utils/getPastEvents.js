export default async function getPastEvents() {
  // past_new_format
  const url = process.env.HOST_DOMAIN + `/api/events?eventType=past_new_format&sortBy=dateTime&sortOrder=desc`;
  const response = await fetch(url);
  return await response.json();

}
