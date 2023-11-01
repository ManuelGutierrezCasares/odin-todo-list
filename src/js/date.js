// Import Date-FNS
import { format, parseISO } from 'date-fns';

// export function getToday(){
//     const rawDate = new Date();
//     const formattedDate = format(rawDate, 'dd-MM-yyyy');
//     return formattedDate;
// }

// Function to change date to LATAM format

export function getCustomDate(rawDate){
    const formattedDate = format(new Date(parseISO(rawDate)), 'dd-MM-yyyy');
    return formattedDate;
}

//trae un string al revés el form 2022-12-31

//console.log('This is a message through webpack w/ bootstrap');