import { DateTime } from "luxon";

function parseDate(date: string): DateTime {
  return DateTime.fromMillis(new Date(date).getTime());
}

function formatDate(date: string): string {
  const parsed = parseDate(date);
  const formatted = parsed.toFormat("MMM d, yyyy");
  return formatted;
}

export { formatDate, parseDate };
