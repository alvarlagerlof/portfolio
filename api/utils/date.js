import { DateTime } from "luxon";

function parseDate(dateString) {
  return DateTime.fromMillis(dateString);
}

function formatDate(dateString) {
  return DateTime.fromMillis(dateString).toFormat("MMM M, yyyy");
}

export { formatDate, parseDate };
