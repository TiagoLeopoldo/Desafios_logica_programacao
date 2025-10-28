/*

03 - Antecessor e Sucessor

Escreva um algoritmo que recebe um número inteiro e retorne o seu antecessor e sucessor no seguinte formato:

--------------------------------------------------
"O antecessor de "number" é x e seu sucessor é y."
-------------------------------------------------- 

*/

function showNeighbors(number){
  // Desenvolva seu código nessa função
  const previousNumber = number - 1;
  const nextNumber = number + 1;

  return `O antecessor de ${number} é ${previousNumber} e seu sucessor é ${nextNumber}`
}

module.exports = showNeighbors;
