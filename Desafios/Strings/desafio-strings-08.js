/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma string (frase ou palavra) e uma letra.

A função deve retornar quantas letras passadas como 2º parâmetro existem na string.

Obs: Trate as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

function countLetters(string, letter) {
  // Desenvolva seu código nessa função
  let baseString = string;
  baseString = baseString.replace(/[áãàâä]/g, "a");
  baseString = baseString.replace(/[èéêë]/g, "e");
  baseString = baseString.replace(/[íìîï]/g, "i");
  baseString = baseString.replace(/[óòõöô]/g, "o");
  baseString = baseString.replace(/[úùûü]/g, "u");
  baseString = baseString.toLowerCase();

  totalLetters = 0;
  for (let i = 0; i < baseString.length; i++) {
    if (baseString[i] === letter) {
      totalLetters++;
    }
  }
  return totalLetters;
}

module.exports = countLetters;
