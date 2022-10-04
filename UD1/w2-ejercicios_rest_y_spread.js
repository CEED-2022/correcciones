/*
 1.1  Elementos únicos

 Escribe una función llamada uniques que acepte un número variable de argumentos y devuelva un array que contenga todos los argumentos pero eliminando los repetidos.
Por ejemplo:
uniques(2, 4, 'patata', [1,2], [1, 2], 'patata', 4) => [2, 4, 'patata', [1,2], [1,2])
Ten en cuenta que [1,2] y [1,2] son dos arrays diferentes, y por tanto no se consideran duplicados
*/
function uniques(...args) {
  let set = new Set(args)
  return [...set]
}
console.log(uniques(2, 4, 'patata', [1,2], [1, 2], 'patata', 4))

/*
 1.2  Combinación de Arrays

 Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el primero.
Por ejemplo:
combineArrays([1,2], [3,4]) => [3,4,1,2]
*/
function combineArrays(first, second) {
  return [...second, ...first]
}
console.log(combineArrays([1,2], [3,4]))

/*
 1.3  Suma de números
Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de cualquier tipo) y devuelva la suma de los argumentos numéricos.
Por ejemplo:
sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }) => 5
*/
function sumNumbers(...numbers) {
  let sum = 0;

  for(let number of numbers) {
    if (typeof number === 'number') sum += number;
  }

  return sum;
}

console.log(sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }))
