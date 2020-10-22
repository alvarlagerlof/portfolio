import { DateTime } from "luxon";

function formatDate(dateString) {
  return DateTime.fromMillis(dateString);
}

function prettyPrintDate(dateString) {
  return DateTime.fromMillis(dateString).toFormat("MMM M, yyyy");
}

export { formatDate, prettyPrintDate };
