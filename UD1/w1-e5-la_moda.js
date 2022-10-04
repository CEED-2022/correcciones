/*
Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez
construida dicha matriz, el programa debe calcular cual es la moda.

Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
Math.floor(Math.random() * (10 + 1));

Puedes consultar cómo se calcula la moda en este
enlace:https://www.disfrutalasmatematicas.com/datos/moda.html

Un ejemplo de ejecución del programa sería:
[ 1, 2, 4, 5, 4 ,4 ,4 ,4 ,4 ,4 ,0 ,7, 8, 4 ,9, 7, 3, 3, 1, 0]
Moda: 4
*/

// We don't use functions here because they are introduced in W2

const GENERATED_ARRAY_LENGTH = 10;
const MAX_RANDOM_NUMBER = 10;

// ------------------------------------------
// Generate random numbers
// ------------------------------------------
let randomNumbers = [];

for( let i=0; i<GENERATED_ARRAY_LENGTH; i++ ) {
  let randomNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER+1));

  randomNumbers.push(randomNumber);
}

// We can also initialize an array passing a length and a function to 'Array.from'
/*
let randomNumbers = Array.from(
  {length: GENERATED_ARRAY_LENGTH},
  () => Math.floor(Math.random() * (MAX_RANDOM_NUMBER+1))
);
*/

// ------------------------------------------
// Compute frequency for each number
// ------------------------------------------
// We have elements from zero to MAX_RANDOM_NUMBER, so length = MAX_RANDOM_NUMBER + 1
const frequencies = Array(MAX_RANDOM_NUMBER + 1).fill(0);

for ( let number of randomNumbers) {
  frequencies[number] += 1;
}

// ------------------------------------------
// Obtain the maximum frequency
// ------------------------------------------
let maxFrequency = 0;

for ( const frequency of frequencies ) {
  if (frequency > maxFrequency) maxFrequency = frequency;
}
// Or we could use this to replace the entire loop (introduced in W2):
// let maxFrequency = Math.max(...frequencies);

// ------------------------------------------
// Obtain the mode
// ------------------------------------------
let mode = [] // We can have multimodal data (two numbers with the same frequency)

// Get numbers with frequency = maxFrequency
for (const index in frequencies) {
  if ( frequencies[index] === maxFrequency ) mode.push(index);
}

console.log(`Data: [${randomNumbers.join(',')}]`);
console.log(`Mode: [${mode.join(',')}]`);



