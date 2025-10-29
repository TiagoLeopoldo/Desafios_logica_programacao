/*

16 - Verdadeiro ou falso?

Escreva um algoritmo que retorne de forma aleatória true ou false.

Obs: O retorne deve ser do tipo boolean.

*/

function randomBoolean(){
  // Desenvolva seu código nessa função
  const randomBooleanValue = Math.random() < 0.5;
  return randomBooleanValue;
}

module.exports = randomBoolean;
