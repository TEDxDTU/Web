export function findLatestEventTillTime(events) {
    const currentMilli = new Date().getTime();

    events.forEach((event, idx) => {
        const eventDateTime = new Date(event.dateTime).getTime();
        if (eventDateTime > currentMilli) return idx;
    });

    return events.length - 1;
};