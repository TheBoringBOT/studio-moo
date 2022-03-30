import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}

export const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};
