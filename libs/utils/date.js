import { DateTime } from "luxon";

function parseDate(dateString) {
  return DateTime.fromMillis(dateString);
}

function formatDate(dateString) {
  return DateTime.fromMillis(dateString).toFormat("MMM d, yyyy");
}

function getAge() {
  const birthday = new Date("2002-02-01");
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export { formatDate, parseDate, getAge };
