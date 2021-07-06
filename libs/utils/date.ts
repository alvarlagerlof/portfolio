import { DateTime } from "luxon";

function parseDate(date: string): DateTime {
  console.log(DateTime.fromISO(date));
  return DateTime.fromISO(date);
}

function formatDate(date: string, format: string = "MMM d, yyyy"): string {
  const parsed = parseDate(date);
  const formatted = parsed.toFormat(format);
  return formatted;
}

export { formatDate, parseDate };
