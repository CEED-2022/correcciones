/*
EJERCICIO 3: DÍA DE LA SEMANA
El 1 de enero de 2021 fue viernes.
Prepara un programa que, dado un día y un mes (de 2021) calcule qué día de la semana es.
Por ejemplo, si el programa tiene de entrada:

const dia = 10
const mes = 1
debería imprimir “Domingo”.

No puedes utilizar ninguna función predefinida de manejo de fechas de JavaScript (puedes hacerlo
calculando cuántas semanas y días han pasado desde el 1 de enero, por ejemplo)
*/

// We don't use functions here because they are introduced in W2
const WEEK_DURATION = 7;

const WEEKDAYS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];
const START_OF_YEAR_WEEKDAY = WEEKDAYS.indexOf('Friday'); // More clear than using 4

const MONTH_DURATION = [
  31, 28, 31, 30, // January - April
  31, 30, 31, 31, // May - August
  30, 31, 30, 31  // September - December
];

// This is the input for the calculation.
// Change this to calculate the weekday for a different date of 2021
// No validation for this data is required by the exercise (we asume the data entered is valid)
const day = 10;
const month = 1;

let daysElapsed = 0;

// Add days for each entire month that has passed from January.
// We shouldn't add current month.
// Remember that arrays are zero-index
for(let monthToAdd = 0; monthToAdd < month - 1; monthToAdd++) {
  daysElapsed += MONTH_DURATION[monthToAdd];
}

// Add days from each day elapsed since day 1
daysElapsed += day - 1;

// Compute how many week days have passed. Using mod, we don't take in account
// full weeks (for example, if 15 days have passed => 2 weeks + 1 day)
let weekDaysElapsed = daysElapsed % WEEK_DURATION;

// Using mod is like continuing at the beginning of the array when you have gone past the end.
// We need to use mood because if for example 5 weekdays have passed:
// 4 (friday) + 5 = 9. That corresponds to 9 % 7 = 2 = 'Tuesday'
let weekDay = ( START_OF_YEAR_WEEKDAY + weekDaysElapsed ) % WEEK_DURATION;

console.log(WEEKDAYS[weekDay]);
