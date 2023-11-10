// Import Date-FNS
import { format, parseISO } from 'date-fns';

// Get today if date is not entered
function getToday () {
  const rawDate = new Date();
  const formattedDateToday = format(rawDate, 'dd-MM-yyyy');
  return formattedDateToday;
}

// Function to change date to LATAM format
export function getCustomDate (rawDate) {
  const formattedDate = !rawDate ? getToday() : format(new Date(parseISO(rawDate)), 'dd-MM-yyyy');
  return formattedDate;
}
