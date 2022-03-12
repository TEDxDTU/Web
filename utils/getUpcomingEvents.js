export default async function getUpcomingEvents() {

  const url = process.env.HOST_DOMAIN + `/api/events?eventType=upcoming&sortBy=dateTime&sortOrder=asc`;
  const response = await fetch(url);
  return await response.json();

}