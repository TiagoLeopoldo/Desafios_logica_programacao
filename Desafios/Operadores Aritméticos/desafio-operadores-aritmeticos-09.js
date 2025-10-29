/*

09 - Celsius

Escreva um algoritmo que faça conversão de temperatura em graus Celsius para graus Fahrenheit e o retorne.

*/

function celsiusToFahrenheit(celsius){
  // Desenvolva seu código nessa função
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

module.exports = celsiusToFahrenheit;
