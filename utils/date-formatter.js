import { parseISO, format, formatRelative, subDays } from "date-fns";
import { se } from "date-fns/locale";

// uses locale to return correct date format
export default function DateFormatter({ dateString, formatStr = "PP" }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, formatStr, { locale: se })}</time>
  );
}

export const getFullYear = () => {
  const date = new Date({ locale: se });
  return date.getFullYear();
};

// show how long since post was updated
export const PostWasUpdatedAt = (dateString) => {
  // returns in swedish format
  // return formatRelative(subDays(new Date(), 3), new Date(), {
  //   locale: se,
  // });
  return "fish";
  //=> "last Friday at 7:26 p.m."
};
