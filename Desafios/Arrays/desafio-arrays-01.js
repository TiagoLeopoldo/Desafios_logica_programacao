/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  let maxNumber = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  return maxNumber;
}

module.exports = getMaxNumber;
