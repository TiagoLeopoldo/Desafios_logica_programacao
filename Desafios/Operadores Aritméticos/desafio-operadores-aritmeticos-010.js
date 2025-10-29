/*

10 - Fahrenheit

Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius e retorne
  a temperatura em celsius.

*/

function fahrenheitToCelsius(fahrenheit){
  // Desenvolva seu código nessa função
  const celsius = Number(((fahrenheit -32) * 5 / 9).toFixed(2));
  return celsius;
}

module.exports = fahrenheitToCelsius;
