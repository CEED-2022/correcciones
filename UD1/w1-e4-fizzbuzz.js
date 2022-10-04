/*
EJERCICIO 4: FIZZBUZZ
Escribir un programa que muestre en pantalla los números del 1 al 300 sustituyendo los números
que terminen en 3 por la palabra “fizz”, los números que acaben en 5 por “buzz” y los números que
acaben en 15 por la palabra “fizzbuzz”.

Un ejemplo de salida sería:
1, 2, fizz, 4, buzz,...
, 14, fizzbuzz, 16,...

Puedes separar los números por coma o escribir uno en cada línea.
*/
const SHOW_UNTIL = 300

let numbers = [];

// We don't use functions here because they are introduced in W2
for(let num = 1; num <= SHOW_UNTIL; num++) {

  let stringToShow = num.toString()

  const lastTwoDigits = num.toString().slice(-2)
  const lastDigit = lastTwoDigits.slice(-1)

  // It's relevant here that we test 15 before 5. If not, we won't never show 'fizzbuzz'
  if ( lastDigit === '3') stringToShow = 'fizz';
  else if ( lastTwoDigits === '15') stringToShow = 'fizzbuzz';
  else if ( lastDigit === '5' ) stringToShow = 'buzz';

  numbers.push(stringToShow);
}

console.log(numbers.join(','));
