import { formatDistanceToNow, parseISO, format } from "date-fns";

const FORMAT_LONG = "EEEE, MMMM d, yyyy h:mm a zz";
const FORMAT_SHORT = "MMMM dd, yyyy";

const dateCache = new Map<string, Date>();

export const getDateDistance = (date: string | Date) => {
  const dateString = normalizeDate(date);
  const parsedDate = getParsedDate(dateString);

  return formatDistanceToNow(parsedDate, { addSuffix: true });
};

export const normalizeDate = (date: string | Date): string =>
  date instanceof Date ? date.toISOString() : date;

const getParsedDate = (dateString: string): Date => {
  if (dateCache.has(dateString)) {
    return dateCache.get(dateString)!;
  }

  const parsedDate = parseISO(dateString);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date value provided: ${dateString}`);
  }

  dateCache.set(dateString, parsedDate);
  return parsedDate;
};

export const formatDate = (
  date: string | Date,
  formatType: "long" | "short" = "long"
) => {
  const dateString = normalizeDate(date);
  const parsedDate = getParsedDate(dateString);

  return format(parsedDate, formatType === "short" ? FORMAT_SHORT : FORMAT_LONG);
};
