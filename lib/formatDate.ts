let defaultFormat: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function formatDate(
  date: string,
  format: Intl.DateTimeFormatOptions = defaultFormat
): string {
  return new Intl.DateTimeFormat("en-GB", format).format(new Date(date));
}
