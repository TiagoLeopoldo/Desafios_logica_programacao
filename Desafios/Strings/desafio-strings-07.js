/*

07 - Contem "a" ?

Escreva um algoritmo que recebe uma palavra e checa se ela possui a letra "a" considerando as seguintes premissas para cada tipo de retorno.

Se apenas começa com letra "a", retorne:
------------------------------------------------------------
"A palavra x possui a letra 'a' apenas como primeira letra."
------------------------------------------------------------

Se apenas termina com a letra "a", retorne:
----------------------------------------------------------
"A palavra x possui a letra "a" apenas como última letra."
----------------------------------------------------------

Se apenas termina e começa com a letra "a", retorne:
----------------------------------------------------------------------
"A palavra x possui a letra 'a' apenas no começo e no fim da palavra."
----------------------------------------------------------------------

Se apenas possui o "a" sem a mesma ser a primeira ou a última letra da palavra, , retorne:
----------------------------------------------------------------------------
"A palavra x possui a letra 'a', porém não é a primeira nem a última letra."
----------------------------------------------------------------------------

Senão, retorne:
-----------------------------
"A palavra x não contém "a"."
-----------------------------

*/

function includeA(word) {
  // Desenvolva seu código nessa função
  let lowerCaseLetters = word.toLowerCase();
  let firstLetter = lowerCaseLetters[0];
  let lastLetter = lowerCaseLetters[lowerCaseLetters.length - 1];
  let middleLetters = lowerCaseLetters.slice(1, -1);
  let aInMiddle = middleLetters.includes('a');
  let hasA = lowerCaseLetters.includes('a');


  if (firstLetter === 'a' && lastLetter !== 'a' && !aInMiddle) {
    return `A palavra ${word} possui a letra 'a' apenas como primeira letra.`;
  };

  if (lastLetter === 'a' && firstLetter !== 'a'  && !aInMiddle) {
    return `A palavra ${word} possui a letra 'a' apenas como última letra.`;
  };

  if (firstLetter === 'a' && lastLetter === 'a' && !aInMiddle) {
    return `A palavra ${word} possui a letra 'a' apenas no começo e no fim da palavra.`;
  }

  if (aInMiddle && firstLetter !== 'a' && lastLetter !== 'a') {
    return `A palavra ${word} possui a letra 'a', porém não é a primeira nem a última letra.`;
  }

  if (!hasA) {
    return `A palavra ${word} não contém a letra 'a'.`;
  }
}

module.exports = includeA;
