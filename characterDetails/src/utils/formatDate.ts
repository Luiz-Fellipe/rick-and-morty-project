export function formatDate(
  date: string,
  locales: string | string[] = ['en-US']
): string | undefined {
  if (!date) return undefined;
  const covertedStrinInDate = new Date(date);

  const formatedDate = new Intl.DateTimeFormat(locales).format(
    covertedStrinInDate
  );

  return formatedDate;
}
